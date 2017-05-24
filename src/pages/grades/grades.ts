import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, Loading } from 'ionic-angular';

import { Store } from '../../providers/store';

@IonicPage()
@Component({
  selector: 'page-grades',
  templateUrl: 'grades.html'
})
export class Grades {
  public classes: any[] = [];
  public avg;
  public loading: Loading;
  private teachers: any[] = [];

  constructor(
    public nav: NavController,
    public store: Store,
    public loadingCtrl: LoadingController
  ){
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
  }

  ionViewDidLoad(){
    this.store.get('SCHEDULE')
      .then( ({ overall_avg } = {}) => this.avg = overall_avg );
    this.store.get('ALLGRADES')
      .then( ({ classes } = {}) => this.classes = classes );

    // this.loadTeachers();
    this.store.get('TEACHERS')
      .then( ({ teachers } = {}) => this.teachers = teachers );
  }
  // async loadTeachers(){
  //   try {
  //     await this.loading.present();
  //     let teachers = await this.store.get('TEACHERS') as any;
  //     this.teachers = teachers.teachers;
  //     await this.loading.dismiss();
  //   } catch(e){
  //     console.warn(e)
  //   }
  // }
  goSelected(item){
    this.nav.push('GradesDetail', {
      class: item,
      teachers: this.teachers
    });
  }

}
