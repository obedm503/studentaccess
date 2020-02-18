import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
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
  currentUser?: User;
  private events: Subject<[User, any, string?]> = new Subject();

  constructor(private http: HttpClient, private store: Store) {}

  login(credentials: {
    username: string;
    password: string;
    language: string;
  }): Promise<any> {
    if (!credentials.username || !credentials.password) {
      return Promise.reject(null);
    }

    const lang = credentials.language === 'es' ? 'es' : 'en';

    return this.http
      .get(
        [
          'https://db.nca.edu.ni/api/api_ewapp.php?mode=student&query=login&username=',
          credentials.username,
          '&password=',
          credentials.password,
          '&lang=',
          lang,
        ].join(''),
      )
      .toPromise();
  }

  getUser(): Promise<User | undefined> {
    return Promise.resolve(this.currentUser || this.store.get('USER'));
  }

  async logout(): Promise<undefined> {
    await this.store.clear();
    return (this.currentUser = undefined);
  }

  onLogin(sub: (user: User, login: any, link?: string) => void) {
    this.events.subscribe(([user, login, link]) => sub(user, login, link));
  }
  publishLogin(user: User, login: any, link?: string) {
    this.events.next([user, login, link]);
  }
}
