import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';

@IonicPage({
  defaultHistory: ['Profile']
})
@Component({
  selector: 'page-records',
  templateUrl: 'records.html',
})
export class Records {
  public attendance: any[];
  public discipline: any[];

  constructor(public navParams: NavParams, public nav: NavController){
    this.discipline = this.navParams.data.discipline;
    this.attendance = this.navParams.data.attendance;
    if( !this.discipline && !this.attendance ){
      this.nav.setRoot('Profile');
    }
  }

  ionViewDidLoad() {
  }
}
