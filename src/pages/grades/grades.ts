import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

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

  constructor(
    public nav: NavController,
    public store: Store
  ){}

  ionViewDidLoad(){
    this.store.get('SCHEDULE')
      .then( ({ overall_avg } = {}) => this.avg = overall_avg );
    this.store.get('ALLGRADES')
      .then( ({ classes } = {}) => this.classes = classes );
    this.store.get('TEACHERS')
      .then( ({ teachers } = {}) => this.teachers = teachers );
  }
  goSelected(item){
    this.nav.push('GradesDetail', {
      class: item,
      teachers: this.teachers
    });
  }

}
