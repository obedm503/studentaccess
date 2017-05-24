import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';

@Injectable()
export class State {
  public remember: boolean = true;

  private USER: StoredItem<StoredUser> = null;
  private HOMEWORK: StoredItem<any> = null;
  private LOGIN: StoredItem<any> = null;
  private MISSING: StoredItem<any> = null;
  private IMAGE: StoredItem<string> = null;
  private SCHEDULES: StoredItem<any[]> = null;
  private TRANSACTIONS: StoredItem<any> = null;
  private MENU: StoredItem<any> = null;
  private EVENTS: StoredItem<any> = null;
  private STAFF: StoredItem<any> = null;
  private TEACHERS: StoredItem<any> = null;
  private SCHEDULE: StoredItem<any> = null;
  private ALLGRADES: StoredItem<any> = null;

  public keys: Array<IKey> = [
    {
      key: 'USER',
      valid: 'MONTH'
    }, {
      key: 'HOMEWORK',
      query: 'homework',
      valid: 'DAY'
    }, {
      key: 'LOGIN',
      query: 'login',
      valid: 'DAY'
    }, {
      key: 'MISSING',
      query: 'missing',
      valid: 'DAY'
    }, {
      key: 'IMAGE',
      query: 'myphoto',
      valid: 'MONTH'
    }, {
      key: 'SCHEDULES',
      url: '/assets/schedules.json',
      valid: 'MONTH'
    }, {
      key: 'TRANSACTIONS',
      query: 'credit',
      valid: 'MONTH'
    }, {
      key: 'MENU',
      query: 'cafeteria',
      valid: 'WEEK'
    }, {
      key: 'EVENTS',
      query: 'events',
      valid: 'WEEK'
    }, {
      key: 'STAFF',
      query: 'staff',
      valid: 'MONTH'
    }, {
      key: 'RECORDS',
      query: 'records',
      valid: 'MONTH' // ?
    }, {
      key: 'TEACHERS',
      query: 'allteachers',
      valid: 'MONTH'
    }, {
      key: 'SCHEDULE',
      query: 'schedule',
      valid: 'MONTH'
    }, {
      key: 'ALLGRADES',
      query: 'allgrades',
      valid: 'DAY'
    }
  ];

  constructor(public storage: Storage, public events: Events){
    console.log('new State()')
  }

  public get(key: string): StoredItem<any> {
    console.log(`State.get('${key}')`, this[key])
    return this[key];
  }
  public set(key: string, value: StoredItem<any>): void {
    // ignore null and undefined
    if( !value ){ return; }

    console.log(`State.set('${key}')`, value)
    this[key] = value;
    this.save();
  }
  public save(): void {
    if( !this.remember ){ return; }

    console.log('State.save()')
    this.keys.forEach( ({ key }) => {
      let value = this[key];
      if( value ){
        this.storage.set(key, value);
      }
    });
  }
  public load(): Promise<any> {
    let proms = this.keys.map( ({ key }) => this.storage.get(key));

    return Promise.all(proms).then( state => {
      console.log('State.load() ', state);
      let reduced = state.reduce( (accumulator, el, i) => {
        accumulator[ this.keys[i].key ] = el;
        return accumulator;
      }, {});
      // load state into memory
      Object.assign(this, reduced);
      return reduced;
    }).catch(console.warn);
  }
  public clear(){
    this.keys.forEach( key => this[key.key] = null );
  }
}
