import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Store } from '../../providers/store';
import { Auth } from '../../providers/auth';

@IonicPage()
@Component({
  selector: 'page-homework',
  templateUrl: 'homework.html'
})
export class Homework {
  homework: Array<{calc_class: string, calc_date: string, lsn_date: string, lsn_hw: string, lsn_id: string}> = [];
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(
    public nav: NavController,
    public navParams: NavParams,
    public store: Store,
    public auth: Auth
    ){
    this.store.get('HOMEWORK').then( hw => {
      this.homework = hw.homework;
    }).catch(console.log);
  }
  itemTapped(event, item) {
    console.log(event, item)
  }

  ngAfterViewInit(){
    this.auth.getUser().then( user => {
      if(!user){
        this.nav.setRoot('Login');
      }
    });
  }
}
