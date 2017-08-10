import { Component } from '@angular/core';
import {
  NavController,
  NavParams,
  AlertController,
  LoadingController,
  Loading,
  IonicPage,
  Events
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
    public events: Events,
    public nav: NavController,
    public navParams: NavParams,
    public auth: Auth,
    public store: Store,
    public state: State,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public translate: TranslateService,
    private log: Log,
  ){
    this.log.debug('new Login()');
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
        this.showError(this.translate.instant('LOGIN-fail'));
        this.user.password = '';
        this.user.username = '';
      }
    }).catch(err => {
      if( err === null ){
        this.showError(this.translate.instant('LOGIN-no-credentials'));
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

    this.alertCtrl.create({
      title: 'Error',
      subTitle: text,
      buttons: ['OK']
    }).present();
  }
}
