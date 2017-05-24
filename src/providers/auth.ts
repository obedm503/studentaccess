import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Store } from './store';

export class User {
  constructor(
    public username: string,
    public password: string,
    public language: string = 'en'
  ){}
}

@Injectable()
export class Auth {
  currentUser: User;

  constructor(
    public http: Http,
    public store: Store
  ){}

  public login(credentials): Promise<any> {
    if( !credentials.username || !credentials.password ){
      return Promise.reject("Please insert credentials");
    }
    return this.http.get(`https://db.nca.edu.ni/api/api_ewapp.php?mode=student&query=login&username=${credentials.username}&password=${credentials.password}&lang=${credentials.language}`)
      .toPromise()
      .then(res => res.json());
  }

  public getUser(): Promise<User> {
    return Promise.resolve(this.currentUser || this.store.get('USER') );
  }

  public logout(): Promise<null> {
    return this.store.clear()
      .then( () => this.currentUser = null );
  }
}
