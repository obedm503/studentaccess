import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  Loading,
  LoadingController
} from 'ionic-angular';

import { Store } from '../../providers/store';

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
    private store: Store
  ){}

  ionViewDidLoad(){
    this.loading.present();
    this.store.get('SCHEDULE')
      .then( ({ overall_avg } = {}) => this.avg = overall_avg );
    this.store.get('ALLGRADES')
      .then( ({ classes } = {}) => this.classes = classes );
    this.store.get('TEACHERS')
      .then( ({ teachers } = {}) => {
        this.teachers = teachers;
        this.loading.dismiss();
      });
  }
  goSelected(item){
    this.nav.push('GradesDetail', {
      class: item,
      teachers: this.teachers
    });
  }

}
