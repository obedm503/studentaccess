import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

@IonicPage({
  defaultHistory: ['Profile'],
  segment: 'profile'
})
@Component({
  selector: 'page-records',
  templateUrl: 'records.html',
})
export class Records {
  public title: string;
  public attendance: any[] = [];
  public discipline: any[] = [];

  constructor(private navParams: NavParams){}

  ionViewDidEnter() {
    this.discipline = this.navParams.get('discipline');
    this.attendance = this.navParams.get('attendance');
    this.title = this.attendance ? 'RECORDS.attendance' : 'RECORDS.discipline';
  }
}
