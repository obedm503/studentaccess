import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Log } from './log';

export type KeyName =
  | 'USER'
  | 'HOMEWORK'
  | 'LOGIN'
  | 'MISSING'
  | 'IMAGE'
  | 'SCHEDULES'
  | 'TRANSACTIONS'
  | 'MENU'
  | 'EVENTS'
  | 'STAFF'
  | 'RECORDS'
  | 'TEACHERS'
  | 'SCHEDULE'
  | 'ALLGRADES';

export type Key = {
  key: KeyName;
  valid: 'DAY' | 'WEEK' | 'MONTH';
  query?: string;
  url?: string;
  queryParams?: string[];
};

export type StoredItem<T> = {
  data: T;
  date: Date;
};

type Cache = Record<KeyName, StoredItem<any>>;

@Injectable({ providedIn: 'root' })
export class State {
  remember: boolean = true;
  keys: Key[] = [
    {
      key: 'USER',
      valid: 'MONTH',
    },
    {
      key: 'HOMEWORK',
      query: 'homework',
      valid: 'DAY',
    },
    {
      key: 'LOGIN',
      query: 'login',
      valid: 'DAY',
    },
    {
      key: 'MISSING',
      query: 'missing',
      valid: 'DAY',
    },
    {
      key: 'IMAGE',
      query: 'myphoto',
      valid: 'MONTH',
    },
    {
      key: 'SCHEDULES',
      url: './assets/schedules.json',
      valid: 'MONTH',
    },
    {
      key: 'TRANSACTIONS',
      query: 'credit',
      queryParams: ['history=10'],
      valid: 'DAY',
    },
    {
      key: 'MENU',
      query: 'cafeteria',
      valid: 'WEEK',
    },
    {
      key: 'EVENTS',
      query: 'events',
      valid: 'WEEK',
    },
    {
      key: 'STAFF',
      query: 'staff',
      valid: 'MONTH',
    },
    {
      key: 'RECORDS',
      query: 'records',
      valid: 'MONTH', // ?
    },
    {
      key: 'TEACHERS',
      query: 'allteachers',
      valid: 'MONTH',
    },
    {
      key: 'SCHEDULE',
      query: 'schedule',
      valid: 'MONTH',
    },
    {
      key: 'ALLGRADES',
      query: 'allgrades',
      valid: 'DAY',
    },
  ];

  private cache: Cache = {} as any;

  constructor(private storage: Storage, private log: Log) {
    this.log.info('new State()');
  }

  get(key: KeyName): StoredItem<any> {
    this.log.debug(`State.get('${key}')`, this.cache[key]);
    return this.cache[key];
  }
  async set(key: KeyName, value: StoredItem<any>): Promise<void> {
    // ignore null and undefined
    if (!value) {
      return;
    }

    this.log.debug(`State.set('${key}')`, value);
    this.cache[key] = value;
    await this.save();
  }
  async save(): Promise<void> {
    if (!this.remember) {
      return;
    }

    this.log.debug('State.save()');
    await Promise.all(
      this.keys.map(({ key }) => {
        const value = this.cache[key];
        if (value) {
          return this.storage.set(key, value);
        }
      }),
    );
  }
  async load(): Promise<Cache> {
    try {
      const state: StoredItem<any>[] = await Promise.all(
        this.keys.map(({ key }) => this.storage.get(key)),
      );

      this.log.debug('State.load() ', state);
      const reduced = state.reduce(
        (accumulator, el, i) => {
          accumulator[this.keys[i].key] = el;
          return accumulator;
        },
        {} as Cache,
      );

      // load state into memory
      Object.assign(this.cache, reduced);
      return reduced;
    } catch (e) {
      this.log.error(e);
    }
  }
  clear(): void {
    this.cache = {} as any;
  }
}
