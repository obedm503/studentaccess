import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  Loading,
  LoadingController
} from 'ionic-angular';

import { Store } from '../../providers/store';
import { Log } from '../../providers/log';

@IonicPage()
@Component({
  selector: 'page-grades',
  templateUrl: 'grades.html'
})
export class Grades {
  public classes: any[] = [];
  public avg;
  private teachers: any[] = [];
  private loading: Loading = this.loadingCtrl.create();

  constructor(
    private nav: NavController,
    private loadingCtrl: LoadingController,
    private store: Store,
    private log: Log,
  ){}

  async ionViewDidLoad(){
    await this.loading.present();
    try {
      let schedule = await this.store.get('SCHEDULE');
      this.avg = schedule.overall_avg;

      let grades = await this.store.get('ALLGRADES');
      this.classes = grades.classes;

      let teachers = await this.store.get('TEACHERS');
      this.teachers = teachers.teachers;
    } catch(err){
      this.log.warn(err);
    }
    this.loading.dismiss();
  }
  goSelected(item){
    this.nav.push('GradesDetail', {
      class: item,
      teachers: this.teachers
    });
  }

}
