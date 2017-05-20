import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

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

  constructor(
    public nav: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,

    public store: Store,
    public auth: Auth
  ){}
  popover(e){
    this.actionSheetCtrl.create({
      title: 'Pick a Class',
      buttons: this.classes
    }).present();
  }

  ionViewDidLoad(){
    this.store.get('HOMEWORK').then( ( hw = {homework: []} ) => {
      // this.homework serves as a backup
      // this.filteredHw is presented in view
      this.filteredHw = this.homework = hw.homework;

      this.classes = this.homework.map( el => ({
        text: el.calc_class,
        handler: () => {
          this.filteredHw = this.homework.filter( hw => el.calc_class === hw.calc_class );
        }
      }) ).filter( (el, i, arr) => arr.findIndex( t => t.text === el.text ) === i );

      this.classes.push({
        text: 'Clear',
        role: 'destructive',
        handler: () => this.filteredHw = this.homework
      },{
        text: 'Cancel',
        role: 'cancel'
      });
    }).catch(console.log);
  }
  // ngAfterViewInit(){
  //   this.auth.getUser().then( user => {
  //     if(!user){
  //       this.nav.setRoot('Login');
  //     }
  //   });
  // }
}
