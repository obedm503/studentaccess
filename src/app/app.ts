import { Component, ViewChild } from '@angular/core';
import { Nav, LoadingController, Events, Loading } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

import { Auth } from '../providers/auth';
import { State } from '../providers/state';

@Component({
  templateUrl: 'app.html'
})
export class StudentAccess {
  @ViewChild(Nav) nav: Nav;
  public loading: Loading;
  public rootPage: string = 'Login';
  public username: string = '';
  public name: string = '';

  public pages: Array<any>;

  constructor(
    public loadingCtrl: LoadingController,
    public events: Events,
    public storage: Storage,

    public auth: Auth,
    public state: State,
    public translate: TranslateService
  ){
    this.loading = this.loadingCtrl.create({
      dismissOnPageChange: true
    });
    this.loading.present();

    // load translations in background
    translate.getTranslation('en');
    translate.getTranslation('es');
    let preferedLang = navigator.language.slice(0,2);
    if( preferedLang !== 'en' && preferedLang !== 'es' ){
      preferedLang = 'en';
    }
    translate.setDefaultLang(preferedLang);

    let deepLink = location.hash.slice(2)
      .split('-')
      .map( word => word.charAt(0).toUpperCase() + word.substr(1) )
      .join('');

    this.events.subscribe('login', (user, login) => this.login(user, login));

    this.storage.ready()
      .then( () => this.state.load() )
      .then( fromStorage => {
        let state  = fromStorage as any;
        if(state && state.USER){
          this.login(state.USER.data, state.LOGIN.data);
          deepLink = deepLink === 'Login' ? null : deepLink;
          this.rootPage = deepLink || 'Profile';
        } else {
          this.logout();
        }
      })
      .catch(console.warn);

    this.pages = [
      { title: 'PROFILE-name', component: 'Profile', icon: 'person' },
      { title: 'HOMEWORK-name', component: 'Homework', icon: 'bookmarks' },
      { title: 'GRADES-name', component: 'Grades', icon: 'checkmark-circle' },
      { title: 'EVENTS-name', component: 'Events', icon: 'calendar' },
      { title: 'CAFETERIA-name', component: 'Cafeteria', icon: 'card' },
      { title: 'STAFF-name', component: 'Staff', icon: 'people' }
    ];
  }
  login(user, login){
    this.username = user.username;
    this.name = login.person_name;
    this.translate.use(user.language);
  }
  openPage(page) {
    this.nav.setRoot(page.component);
  }
  logout(){
    this.loading = this.loadingCtrl.create();
    this.loading.present()
      .then( () => this.nav.setRoot('Login') )
      .then( () => this.auth.logout() )
      .then( () => this.loading.dismiss() )
      .catch(console.warn);
  }

}
