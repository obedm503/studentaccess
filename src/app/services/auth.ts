import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from './store';

export class User {
  constructor(
    public username: string,
    public password: string,
    public language: string = 'en',
  ) {}
}

@Injectable({ providedIn: 'root' })
export class Auth {
  currentUser: User;

  constructor(private http: HttpClient, private store: Store) {}

  public login(credentials): Promise<any> {
    if (!credentials.username || !credentials.password) {
      return Promise.reject(null);
    }
    return this.http
      .get(
        `https://db.nca.edu.ni/api/api_ewapp.php?mode=student&query=login&username=${
          credentials.username
        }&password=${credentials.password}&lang=${credentials.language}`,
      )
      .toPromise();
  }

  public getUser(): Promise<User> {
    return Promise.resolve(this.currentUser || this.store.get('USER'));
  }

  public async logout(): Promise<null> {
    await this.store.clear();
    return (this.currentUser = null);
  }
}
