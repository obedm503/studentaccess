import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'page-records',
  templateUrl: 'records.html',
})
export class Records implements OnInit {
  title: string;
  attendance: any[] = [];
  discipline: any[] = [];

  constructor(private navParams: NavParams) {}

  ngOnInit() {
    this.discipline = this.navParams.get('discipline');
    this.attendance = this.navParams.get('attendance');
    this.title = this.attendance ? 'RECORDS.ATTENDANCE' : 'RECORDS.DISCIPLINE';
  }
}
