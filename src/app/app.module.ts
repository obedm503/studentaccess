import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule,Http } from '@angular/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { IonicStorageModule } from '@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StudentAccess } from './app';

import { Store } from '../providers/store';
import { Auth } from '../providers/auth';
import { State } from '../providers/state';

@NgModule({
  declarations: [
    StudentAccess
  ],
  imports: [
    HttpModule,
    BrowserModule,
    NoopAnimationsModule,
    IonicModule.forRoot(StudentAccess),
    IonicStorageModule.forRoot({
      name: 'studentaccess',
      driverOrder: ['indexeddb','websql','localstorage']
    }),
    TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: function loader(http: Http){
        return new TranslateHttpLoader(http, './assets/i18n/', '.json');
      },
      deps: [Http]
    }
  })
  ],
  bootstrap: [ IonicApp ],
  entryComponents: [ StudentAccess ],
  providers: [
    Store,
    Auth,
    State,

    StatusBar,
    HttpModule,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class StudentAccessModule {}
