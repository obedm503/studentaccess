import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
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
