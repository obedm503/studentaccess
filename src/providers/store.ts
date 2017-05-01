import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

// import { $array } from '$array';

@Injectable()
export class Store {
  public user: { username: string, language: string, password: string };
  private date: Date = new Date();
  private api: string = 'https://db.nca.edu.ni/api/api_ewapp.php'
  private keys = {
    HOMEWORK: {
      query: 'homework',
      valid: 'DAY'
    },
    LOGIN: {
      query: 'login',
      valid: 'MONTH'
    }
  };

  constructor(public http: Http, public storage: Storage) {}

  public setUser(user){
    this.user = user;
    this.storage.set('USER', user);
  }

  public getUser(){
    return this.storage.get('USER');
  }

  private async buildUrl(query: string): Promise<string> {
    return `${this.api}?mode=student&language=${this.user.language}&username=${this.user.username}&password=${this.user.password}&query=${query}`;
  }

  private fetch(key: string): Promise<any> {
    return this.buildUrl(this.keys[key].query)
      .then( url => fetch( url ))
      .then( res => res.json() )
      .then( data => {
        this.storage.set(key, {
          date: this.date,
          data
        });
        return data;
      })
      .catch( e => console.log(e) );
  }

  public async getLogin(){
    let login = await this.storage.get('LOGIN') as { date: Date, data: any };
    return login ? login.data : null;
  }

  public async get(key: string): Promise<any> {
    let item = await this.storage.get(key) as { date: Date, data: any };
    if( !item ){ return this.fetch(key); }
    let comparator: boolean;
    switch( this.keys[key].valid ){
      case 'DAY':
        comparator = this.date.getDate() === new Date(item.date).getDate();
        break;
      case 'MONTH':
        comparator = this.date.getMonth() === new Date(item.date).getMonth();
        break;
      default:
        throw Error('Unknown Mode');
    }
    if( comparator ){
      return item.data;
    } else {
      return this.fetch(key);
    }
  }

  public refresh(){
    // should refesh local data
  }
}
