import { Component } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'page-records',
  templateUrl: 'records.html',
})
export class Records {
  title: string;
  attendance: any[] = [];
  discipline: any[] = [];

  constructor(private navParams: NavParams) {}

  ionViewDidEnter() {
    this.discipline = this.navParams.get('discipline');
    this.attendance = this.navParams.get('attendance');
    this.title = this.attendance ? 'RECORDS.ATTENDANCE' : 'RECORDS.DISCIPLINE';
  }
}
