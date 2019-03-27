import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import currentWeekNumber from 'current-week-number';
import { Log } from './log';
import { Key, KeyName, State, StoredItem } from './state';

const tryParse = (text: string): any => {
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

@Injectable({ providedIn: 'root' })
export class Store {
  private date: Date = new Date();
  public today: string;
  private api: string = 'https://db.nca.edu.ni/api/api_ewapp.php';
  private keys: Key[];

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private state: State,
    private log: Log,
  ) {
    this.log.info('new Store()');
    const month = ('0' + (this.date.getMonth() + 1).toString()).slice(-2);
    const day = ('0' + this.date.getDate().toString()).slice(-2);
    const year = this.date.getFullYear().toString();
    this.today = `${year}-${month}-${day}`;
    this.keys = this.state.keys;
  }

  async fromApi<T = any>(
    el: Key,
    modifier: (args: { newData: T; oldData: T }) => T,
    oldData?: T,
  ): Promise<T> {
    const url = this.buildUrl(el.url, el.query, el.queryParams);
    if (!url) {
      return;
    }

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
      this.log.warn(err);
      return oldData;
    }
  }

  async get<T = any>(
    key: KeyName,
    modifier?: (args: { newData: T; oldData: T }) => T,
    refresh = false,
  ): Promise<T | undefined> {
    try {
      if (key === 'USER') {
        return this.getUser();
      }

      // from the state
      const storeItem = this.state.get(key);

      const keyItem = this.keys.find(el => el.key === key);

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
          valid =
            currentWeekNumber(this.date) ===
            currentWeekNumber(new Date(storeItem.date));
          break;
        case 'MONTH':
          valid = this.date.getMonth() === new Date(storeItem.date).getMonth();
          break;
        default:
          throw Error('Store: Unknown Mode');
      }
      //check validity
      if (valid && !refresh) {
        return storeItem.data;
      } else {
        return this.fromApi(keyItem, modifier, storeItem.data);
      }
    } catch (e) {
      this.log.warn(e);
      return;
    }
  }

  private buildUrl(
    url: string,
    query: string,
    queryParams: string[] = [],
  ): string | undefined {
    if (url) {
      return url;
    }

    const extraParams = queryParams.join('&');

    const data = this.state.get('USER') as StoredItem<StoredUser> | undefined;
    if (!data) {
      return;
    }

    const user = data.data;
    return `${this.api}?query=${query}&lang=${user.language}&username=${
      user.username
    }&password=${user.password}&mode=student&${extraParams}`;
  }

  private async getUser() {
    try {
      let user = this.state.get('USER');
      if (!user) {
        const state: Record<KeyName, any> = await this.storage.get('STATE');
        user = state.USER;
        this.log.debug('getUser: ', state);
      }
      if (user && this.date.getMonth() === new Date(user.date).getMonth()) {
        return user.data;
      } else {
        return null;
      }
    } catch (e) {
      this.log.warn(e);
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

  setUser(user) {
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
