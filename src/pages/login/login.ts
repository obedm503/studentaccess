import { Component } from '@angular/core';
import {
  NavController,
  AlertController,
  LoadingController,
  Loading,
  IonicPage
} from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { Store } from '../../providers/store';

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
    private nav: NavController,
    private auth: Auth,
    private store: Store,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) { }


  public login() {
    this.showLoading();
    this.auth.login(this.user).subscribe(allowed => {
      console.log(allowed);
      if( this.remember ){
        this.store.setUser(this.user)
      } else {
        this.store.user = this.user;
      }
      if (allowed.login_status) {
        this.nav.setRoot('Home');
      } else {
        this.showError("Access Denied");
      }
    }, error => {
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
