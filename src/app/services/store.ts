import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
// import currentWeekNumber from 'current-week-number';
import { getWeek } from 'date-fns';
import { Log } from './log';
import { Key, KeyName, KEYS, State, StoredItem } from './state';

const tryParse = (text: string) => {
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
};

interface StoredUser {
  username: string;
  password: string;
  language: string;
}

type Modifier<T> = (args: { newData: T; oldData: T | undefined }) => T;

const API = 'https://db.nca.edu.ni/api/api_ewapp.php';

@Injectable({ providedIn: 'root' })
export class Store {
  today: string;
  private date: Date = new Date();

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private state: State,
    private log: Log,
  ) {
    this.log.info('new Store()');
    const local = new Date();
    local.setUTCHours(
      this.date.getHours(),
      this.date.getMinutes(),
      this.date.getSeconds(),
      this.date.getMilliseconds(),
    );
    this.today = local.toISOString().slice(0, 10);
  }

  async ready() {
    await this.state.ready();
  }

  private async fromApi<T = any>(
    el: Key,
    modifier?: Modifier<T>,
    oldData?: T,
  ): Promise<T | undefined> {
    const url = this.buildUrl(el);

    try {
      const text = await this.http
        .get(url, { responseType: 'text' })
        .toPromise();

      const newData = tryParse(text);

      const modifiedData = modifier
        ? modifier({
            newData,
            oldData,
          })
        : newData;

      this.state.set(el.key, {
        date: this.date,
        data: modifiedData,
      });
      return modifiedData;
    } catch (err) {
      this.log.warn(err as string);
      return oldData;
    }
  }

  async get<T = any>(
    key: KeyName,
    {
      modifier,
      refresh = false,
    }: {
      modifier?: Modifier<T>;
      refresh?: boolean;
    } = {},
  ): Promise<T | undefined> {
    await this.ready();

    if (key === 'USER') {
      return this.getUser();
    }

    // from the state
    const storeItem = this.state.get(key);

    const keyItem = KEYS.find((el) => el.key === key);
    if (!keyItem) {
      throw new Error(`store: unknown key ${key}`);
    }

    // not in memory, not in storage, from api
    if (!storeItem) {
      return this.fromApi(keyItem, modifier);
    }

    let valid: boolean;
    switch (keyItem.valid) {
      case 'DAY':
        valid = this.date.getDate() === new Date(storeItem.date).getDate();
        break;
      case 'WEEK':
        valid = getWeek(this.date) === getWeek(new Date(storeItem.date));
        break;
      case 'MONTH':
        valid = this.date.getMonth() === new Date(storeItem.date).getMonth();
        break;
      default:
        throw Error('Store: Unknown Mode');
    }

    let data: T;
    // check validity
    if (valid && !refresh) {
      data = storeItem.data;
    } else {
      data = await this.fromApi(keyItem, modifier, storeItem.data);
    }

    return data;
  }

  private buildUrl({
    url,
    query,
    queryParams = [],
  }: {
    url?: string;
    query?: string;
    queryParams?: string[];
  }): string {
    if (typeof url === 'string') {
      return url;
    }

    if (!query) {
      throw new Error('store: exptected query to be defined');
    }

    const extraParams = queryParams.join('&');

    const data = this.state.get('USER') as StoredItem<StoredUser> | undefined;
    if (!data) {
      throw new Error('store: user credentials not available');
    }

    const user = data.data;
    const lang = user.language === 'es' ? 'es' : 'en';
    return `${API}?query=${query}&lang=${lang}&username=${user.username}&password=${user.password}&mode=student&${extraParams}`;
  }

  private async getUser() {
    try {
      let user = this.state.get('USER');
      if (!user) {
        const state: Record<KeyName, any> = await this.storage.get('STATE');
        user = state.USER;
      }
      if (user && this.date.getMonth() === new Date(user.date).getMonth()) {
        return user.data;
      } else {
        return null;
      }
    } catch (e) {
      this.log.warn(e as string);
    }
  }

  getLogin() {
    const login = this.state.get('LOGIN');
    if (login && this.date.getMonth() === new Date(login.date).getMonth()) {
      return login.data;
    } else {
      return null;
    }
  }

  persist() {
    return this.state.save();
  }

  setUser(user: any) {
    this.state.set('USER', {
      date: this.date,
      data: user,
    });
  }
  async clear(): Promise<void> {
    await this.storage.clear();
    this.log.debug('cleared storage');
    this.state.clear();
  }
}
