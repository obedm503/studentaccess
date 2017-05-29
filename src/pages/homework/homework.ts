import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { Store } from '../../providers/store';
import { Auth } from '../../providers/auth';

@IonicPage()
@Component({
  selector: 'page-homework',
  templateUrl: 'homework.html'
})
export class Homework {
  homework: Array<{calc_class: string, calc_date: string, lsn_date: string, lsn_hw: string, lsn_id: string}> = [];
  classes: any[];
  filteredHw: any[];
  selectedClass: string = 'all-classes';

  constructor(
    public nav: NavController,
    public navParams: NavParams,
    public translate: TranslateService,
    public alert: AlertController,

    public store: Store,
    public auth: Auth
  ){}

  ionViewDidLoad(){
    this.store.get('HOMEWORK').then( ( hw = {homework: []} ) => {
      // this.homework serves as a backup
      // this.filteredHw is presented in view
      this.filteredHw = this.homework = hw.homework;

      this.classes = this.homework
        .filter( (el, i, arr) => arr.findIndex( t => t.calc_class === el.calc_class ) === i )
        .map( el => ({
          type: 'radio',
          label: el.calc_class,
          value: el.calc_class
        }) );
      this.classes.push({
        type: 'radio',
        label: this.translate.instant('HOMEWORK-all-classes'),
        value: 'all-classes'
      });
    });
  }

  popover(e){
    this.alert.create({
      title: this.translate.instant('HOMEWORK-title'),
      buttons: [
        this.translate.instant('CANCEL'),
        {
          text: 'OK',
          handler: className => {
            this.selectedClass = className;
            if( className === 'all-classes' ){
              this.filteredHw = this.homework;
            } else {
              this.filteredHw = this.homework.filter( hw => className === hw.calc_class );
            }
          }
        }
      ],
      inputs: this.classes.map( button => ({
        ...button,
        checked: button.value === this.selectedClass
      }) )
    }).present();
  }
}
