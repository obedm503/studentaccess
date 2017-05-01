import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

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

  constructor(public http: Http, public store: Store, public storage: Storage){}

  public login(credentials){
    if (credentials.username === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return this.http.get(
        `https://db.nca.edu.ni/api/api_ewapp.php?mode=student&query=login&username=${credentials.username}&password=${credentials.password}&language=${credentials.language}`
      ).map(res => res.json());
      // return Observable.create(observer => {
      //   // At this point make a request to your backend to make a real check!
      //   let access = (credentials.password === "pass" && credentials.username === "email");
      //   this.currentUser = new User('Simon', 'saimon@devdactic.com');
      //   observer.next(access);
      //   observer.complete();
      // });
    }
  }

  public getUser(): Promise<User> {
    return Promise.resolve(this.currentUser || this.store.getUser() );
  }

  public logout(){
    return Observable.create(observer => {
      this.currentUser = null;
      this.storage.clear();
      observer.next(true);
      observer.complete();
    });
  }
}
