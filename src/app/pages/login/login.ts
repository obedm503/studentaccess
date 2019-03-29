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
    // re-enable sidemenu after login
    await this.menuCtrl.enable(true);
  }

  async login() {
    await this.showLoading();
    try {
      const login = await this.auth.login(this.user);
      this.state.remember = this.remember;

      if (login.login_status) {
        this.store.setUser(this.user);
        this.events.publish('login', this.user, login, 'profile');
      } else {
        this.user.password = '';
        this.user.username = '';
        await this.showError(this.translate.instant('LOGIN.FAIL'));
      }
      await this.loading.dismiss();
    } catch (err) {
      await this.loading.dismiss();
      if (err === null) {
        await this.showError(this.translate.instant('LOGIN.NO_CREDENTIALS'));
      } else {
        await this.showError(err);
      }
    }
  }

  langChanged({ detail }: CustomEvent) {
    this.translate.use(detail.value);
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
