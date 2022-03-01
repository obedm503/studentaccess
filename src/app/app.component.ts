import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Auth, User } from './services/auth';
import { Log } from './services/log';
import { State } from './services/state';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  username = '';
  name = '';

  appPages = [
    {
      title: 'PROFILE.NAME',
      url: 'profile',
      md: 'person-sharp',
      ios: 'person',
    },
    {
      title: 'HOMEWORK.NAME',
      url: 'homework',
      md: 'book-sharp',
      ios: 'book',
    },
    {
      title: 'GRADES.NAME',
      url: 'grades',
      md: 'checkmark-circle-sharp',
      ios: 'checkmark-circle',
    },
    {
      title: 'EVENTS.NAME',
      url: 'events',
      md: 'calendar-sharp',
      ios: 'calendar-outline',
    },
    {
      title: 'CAFETERIA.NAME',
      url: 'cafeteria',
      md: 'card-outline',
      ios: 'card',
    },
    { title: 'STAFF.NAME', url: 'staff', md: 'people-sharp', ios: 'people' },
  ];
  loading?: HTMLIonLoadingElement;
  currentRoute: Observable<string>;

  constructor(
    private loadingCtrl: LoadingController,
    private auth: Auth,
    private state: State,
    private log: Log,
    private translate: TranslateService,
    private router: Router,
  ) {
    this.init();

    this.auth.onLogin((user, login, link) => this.login(user, login, link));

    this.currentRoute = router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd),
      map((event: NavigationEnd) => event.urlAfterRedirects),
    );
  }

  getIconColor(url: string, currentRoute?: string) {
    return currentRoute?.startsWith('/' + url) ? 'dark' : 'medium';
  }

  openPage(url: string) {
    this.router.navigate([url]);
  }

  async init() {
    this.loading = await this.loadingCtrl.create();
    await this.loading.present();

    // load translations in background
    this.translate.getTranslation('en');
    this.translate.getTranslation('es');
    this.translate.getTranslation('ko');
    let preferedLang = navigator.language.slice(0, 2);
    if (preferedLang !== 'en' && preferedLang !== 'es') {
      preferedLang = 'en';
    }
    this.translate.setDefaultLang(preferedLang);

    const state = await this.state.ready();

    if (state.USER && state.LOGIN) {
      await this.login(state.USER.data, state.LOGIN.data);
    } else {
      await this.logout();
    }

    await this.loading.dismiss();
  }

  async login(user: User, login: any, link?: string) {
    this.username = user.username;
    this.name = login.person_name;
    this.translate.use(user.language);

    let url = link;
    if (!link) {
      url = location.pathname.slice(1);
    }
    await this.router.navigate([url]);
  }

  async logout() {
    try {
      await this.loading?.present();

      await this.router.navigate(['login']);

      await this.auth.logout();
      await this.loading?.dismiss();
    } catch (e) {
      this.log.error(e as string);
    }
  }
}
