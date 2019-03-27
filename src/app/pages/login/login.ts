import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AlertController,
  Events,
  LoadingController,
  MenuController,
} from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Auth } from '../../services/auth';
import { State } from '../../services/state';
import { Store } from '../../services/store';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login implements OnInit, OnDestroy {
  loading: HTMLIonLoadingElement;
  user = { username: '', password: '', language: 'en' };
  remember: boolean = true;

  constructor(
    private events: Events,
    private auth: Auth,
    private store: Store,
    private state: State,
    private alert: AlertController,
    private loadingCtrl: LoadingController,
    private translate: TranslateService,
    private menuCtrl: MenuController,
  ) {}

  async ngOnInit() {
    // disable sidemenu on login page
    await this.menuCtrl.enable(false);
  }
  async ngOnDestroy() {
    // reenable sidemenu
    await this.menuCtrl.enable(false);
  }

  async login() {
    await this.showLoading();
    try {
      const login = await this.auth.login(this.user);
      this.state.remember = this.remember;

      if (login.login_status) {
        this.store.setUser(this.user);
        // this.nav.setRoot('Profile');
        this.events.publish('login', this.user, login, 'Profile');
      } else {
        this.user.password = '';
        this.user.username = '';
        await this.showError(this.translate.instant('LOGIN.FAIL'));
      }
    } catch (err) {
      if (err === null) {
        await this.showError(this.translate.instant('LOGIN.NO_CREDENTIALS'));
      } else {
        await this.showError(err);
      }
    }
  }

  public selectLang(lang: string) {
    this.translate.use(lang);
  }

  async showLoading() {
    this.loading = await this.loadingCtrl.create();
    await this.loading.present();
  }

  async showError(text) {
    await this.loading.dismiss();

    const alert = await this.alert.create({
      header: 'Error',
      subHeader: text,
      buttons: [this.translate.instant('GLOBAL.OK')],
    });
    await alert.present();
  }
}
