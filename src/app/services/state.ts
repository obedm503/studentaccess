import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

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

export const KEYS: Key[] = [
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

@Injectable({ providedIn: 'root' })
export class State {
  remember = true;
  private cache: Cache = {} as any;

  constructor(private storage: Storage) {}

  private isReady = false;
  private readyPromise: Promise<Cache>;
  private resolveReady;
  private rejectReady;
  async ready(): Promise<Cache> {
    if (this.isReady) {
      return this.cache;
    }

    if (this.readyPromise) {
      return this.readyPromise;
    }

    this.readyPromise = new Promise<Cache>((res, rej) => {
      this.resolveReady = res;
      this.rejectReady = rej;
    });

    try {
      await this.load();
    } catch (e) {
      if (this.rejectReady) {
        this.rejectReady(e);
      }
      throw e;
    }

    this.isReady = true;
    if (this.resolveReady) {
      this.resolveReady(this.cache);
    }
    delete this.readyPromise;
    delete this.resolveReady;
    delete this.rejectReady;

    return this.cache;
  }

  get(key: KeyName): StoredItem<any> {
    if (!this.isReady) {
      throw new Error('State: Not yet ready');
    }
    return this.cache[key];
  }

  async set(key: KeyName, value: StoredItem<any>): Promise<void> {
    // ignore null and undefined
    if (!value) {
      return;
    }

    this.cache[key] = value;
    await this.save();
  }

  async save(): Promise<void> {
    if (!this.remember) {
      return;
    }

    await Promise.all(
      KEYS.map(({ key }) => {
        const value = this.cache[key];
        if (value) {
          return this.storage.set(key, value);
        }
      }),
    );
  }

  private async load(): Promise<void> {
    await this.storage.ready();

    const state: StoredItem<any>[] = await Promise.all(
      KEYS.map(({ key }) => this.storage.get(key)),
    );

    const fromStorage = state.reduce((accumulator, el, i) => {
      accumulator[KEYS[i].key] = el;
      return accumulator;
    }, {} as Cache);

    // load state into memory
    Object.assign(this.cache, fromStorage);
  }

  clear(): void {
    this.cache = {} as any;
  }
}
