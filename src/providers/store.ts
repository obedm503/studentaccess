import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import currentWeekNumber from 'current-week-number';

import { State } from './state';

@Injectable()
export class Store {
  private date: Date = new Date();
  public today: string;
  private api: string = 'https://db.nca.edu.ni/api/api_ewapp.php'
  private keys: IKey[];

  constructor(public http: Http, public storage: Storage, public state: State ){
    console.log('new Store()');
    let month = ('0' + ( this.date.getMonth() + 1 ).toString() ).slice(-2);
    let day = ('0' + this.date.getDate().toString() ).slice(-2);
    let year = this.date.getFullYear().toString();
    this.today = `${year}-${month}-${day}`;
    this.keys = this.state.keys;
  }
  public clear(): Promise<null> {
    return this.storage.clear().then( () => {
      console.log('cleared storage')
      this.state.clear();
      return null;
    });
  }

  public setUser(user){
    this.state.set('USER', {
      date: this.date,
      data: user
    });
  }

  private async getUser(){
    console.log('getUser')
    try {
      let user;
      user = this.state.get('USER');
      if( !user ){
        let state = await this.storage.get('STATE');
        user = state.USER;
        console.log('getUser: ',state)
      }
      if( user && this.date.getMonth() === new Date(user.date).getMonth() ){
        return user.data;
      } else {
        return null;
      }
    } catch(e){
      console.warn(e);
    }
  }

  public async getLogin(){
    let login = this.state.get('LOGIN');
    if( login && this.date.getMonth() === new Date(login.date).getMonth() ){
      return login.data;
    } else { return null; }
  }

  buildUrl(query: string, url: string): string {
    let user = (this.state.get('USER') || {} as StoredItem<StoredUser>).data as StoredUser;
    return url ? url : `${this.api}?mode=student&lang=${user.language}&username=${user.username}&password=${user.password}&query=${query}`;
  }

  private fromApi( el: IKey ): Promise<any> {
    let url = this.buildUrl( el.query, el.url );
    console.log('fromApi url promise ',url)
    return this.http.get(url).toPromise()
      .then( res => res.text() ).then( text => {
        try {
          let json = JSON.parse(text);
          return json;
        } catch(e) {
          return text;
        }
      }).then( data => {
        console.log(`fetched ${el.key}`)
        this.state.set(el.key, {
          date: this.date,
          data
        });
        return data;
      });
  }

  public async get(key: string): Promise<any> {
    try {
      if( key === 'USER' ){ return this.getUser(); }

      // from the state
      let item = this.state.get(key);

      let el = this.keys.find( el => el.key === key );

      // not in memory, not in storage, from api
      if( !item ){
        console.log('not in state... fetching ', key);
        return this.fromApi(el).catch(console.warn);
      }

      let comparator: boolean;
      switch( el.valid ){
        case 'DAY':
          comparator = this.date.getDate() === new Date(item.date).getDate();
          break;
        case 'WEEK':
          comparator = currentWeekNumber(this.date) === currentWeekNumber( new Date(item.date) );
          break;
        case 'MONTH':
          comparator = this.date.getMonth() === new Date(item.date).getMonth();
          break;
        default:
          throw Error('Store: Unknown Mode');
      }
      //check validity
      if( comparator ){
        return item.data;
      } else {
        return this.fromApi(el).catch( err => {
          console.warn(err);
          // if network fails return old data
          return item.data;
        });
      }
    } catch(e){
      console.warn(e);
    }
  }

  public refresh(){
    // should refesh local data
  }
}
