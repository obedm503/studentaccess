import { Component } from '@angular/core';
import {
  NavController,
  AlertController,
  LoadingController,
  Loading,
  IonicPage,
  Events,
  MenuController,
} from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { Auth } from '../../providers/auth';
import { Store } from '../../providers/store';
import { State } from '../../providers/state';
import { Log } from '../../providers/log';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  loading: Loading;
  user = { username: '', password: '', language: 'en' };
  remember: boolean = true;

  constructor(
    private events: Events,
    private nav: NavController,
    private auth: Auth,
    private store: Store,
    private state: State,
    private alert: AlertController,
    private loadingCtrl: LoadingController,
    private translate: TranslateService,
    private log: Log,
    private menuCtrl: MenuController,
  ){
    this.log.info('new Login()');
  }

  // disable sidemenu on login page
  ionViewWillEnter(){
    this.menuCtrl.swipeEnable(false);
  }
  // reenable sidemenu
  ionViewWillLeave(){
    this.menuCtrl.swipeEnable(true);
  }

  public login() {
    this.showLoading();
    this.auth.login(this.user).then(login => {
      this.state.remember = this.remember;
      if( login.login_status ){
        this.store.setUser(this.user);
        // this.nav.setRoot('Profile');
        this.events.publish('login', this.user, login, 'Profile');
      } else {
        this.showError(this.translate.instant('LOGIN.FAIL'));
        this.user.password = '';
        this.user.username = '';
      }
    }).catch(err => {
      if( err === null ){
        this.showError(this.translate.instant('LOGIN.NO_CREDENTIALS'));
      } else {
        this.showError(err);
      }
    });
  }

  public selectLang( lang: string ){
    this.translate.use(lang);
  }

  public showLoading() {
    this.loading = this.loadingCtrl.create({
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    this.alert.create({
      title: 'Error',
      subTitle: text,
      buttons: [
        this.translate.instant('GLOBAL.OK')
      ]
    }).present();
  }
}
