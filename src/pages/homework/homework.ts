import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  Loading,
  LoadingController
} from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { Store } from '../../providers/store';
import { Auth } from '../../providers/auth';
import { expand } from '../../components/animations';

@IonicPage()
@Component({
  selector: 'page-homework',
  templateUrl: 'homework.html',
  animations: [ expand ]
})
export class Homework {
  homework: Array<{calc_class: string, calc_date: string, lsn_date: string, lsn_hw: string, lsn_id: string}> = [];
  classes: any[];
  filteredHw: any[] = [];
  selectedClass: string = 'all-classes';
  hideChecked: boolean = true;
  loading: Loading = this.loadingCtrl.create();

  constructor(
    private nav: NavController,
    private navParams: NavParams,
    private translate: TranslateService,
    private alert: AlertController,
    private loadingCtrl: LoadingController,

    private store: Store,
    private auth: Auth
  ){}

  public async ionViewDidEnter(){
    await this.loading.present();
    let hw = await this.store.get('HOMEWORK', ({ newData, oldData = { homework: [] } }) => ({
      ...newData,
      homework: newData.homework.map( item => {
        if( oldData.homework.findIndex( el => item.lsn_id === el.lsn_id && el.checked )  > -1 ){
          item.checked = true;
        }
        return item;
      } )
    }) );
    // this.homework serves as a backup
    // this.filteredHw is presented in view
    this.filteredHw = this.homework = hw.homework.slice(0).reverse();
    this.loading.dismiss();
  }

  popover(e){
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
  public check( item ){
    let index = this.homework.findIndex( el => el.lsn_id === item.lsn_id );
    this.homework[index] = item;
    this.store.persist();
  }
}
