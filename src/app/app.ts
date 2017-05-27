import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController, Events, Loading } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';

import { Auth } from '../providers/auth';
import { Store } from '../providers/store';
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
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public loadingCtrl: LoadingController,
    public events: Events,
    public storage: Storage,

    public auth: Auth,
    public store: Store,
    public state: State,
    public translate: TranslateService
  ){
    // load translation in background
    translate.getTranslation('es');
    translate.setDefaultLang('en');
    translate.use('en');

    let deepLink = location.hash.substr(2)
      .split('-')
      .map( word => word.charAt(0).toUpperCase() + word.substr(1) )
      .join('');

    this.loading = this.loadingCtrl.create({
      content: 'Loading...',
      dismissOnPageChange: true
    });

    this.storage.ready()
      .then( () => this.state.load() )
      .then( fromStorage => {
        let state  = fromStorage as any;
        console.log('load state: ',state)
        if(state && state.USER){
          this.login(state.USER.data, state.LOGIN.data);
          deepLink = deepLink === 'Login' ? null : deepLink;
          this.rootPage = deepLink || 'Profile';
        } else {
          this.logout();
        }
        return this.loading.dismiss();
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

    this.events.subscribe('login', (user, login) => this.login(user, login));
  }
  login(user, login){
    this.username = user.username;
    this.name = login.person_name;
    this.translate.use(user.language);
  }
  ionViewDidLoad(){
    this.loading.present();
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  logout(){
    console.warn('logout')
    this.auth.logout().then( () => {
      this.nav.setRoot('Login');
    });
  }
}
