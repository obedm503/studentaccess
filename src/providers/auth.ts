import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';

import { Store } from './store';
import { Log } from './log';

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
    private http: HttpClient,
    private store: Store,
    private log: Log,
  ){}

  public login(credentials): Promise<any> {
    if( !credentials.username || !credentials.password ){
      return Promise.reject(null);
    }
    return this.http.get(`https://db.nca.edu.ni/api/api_ewapp.php?mode=student&query=login&username=${credentials.username}&password=${credentials.password}&lang=${credentials.language}`)
      .do(res => this.log.warn(res))
      .toPromise();
  }

  public getUser(): Promise<User> {
    return Promise.resolve(this.currentUser || this.store.get('USER') );
  }

  public logout(): Promise<null> {
    return this.store.clear()
      .then( () => this.currentUser = null );
  }
}
