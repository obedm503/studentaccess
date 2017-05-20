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
import { Auth } from '../../providers/auth';
import { Store } from '../../providers/store';
import { State } from '../../providers/state';

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
    public loadingCtrl: LoadingController
  ){
    console.log('new Login()');
  }

  public login() {
    this.showLoading();
    console.log('Login.login()')
    this.auth.login(this.user).then(login => {
      this.state.remember = this.remember;
      if (login.login_status) {
        this.store.setUser(this.user);
        this.nav.setRoot('Profile');
        this.events.publish('login', this.user, login);
      } else {
        this.showError("Access Denied");
      }
    }).catch(error => {
      this.showError(error);
    });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}
