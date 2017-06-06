import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  Loading,
  LoadingController
} from 'ionic-angular';

import { Store } from '../../providers/store';

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class Events {
  public events;
  public selected;
  private loading: Loading = this.loadingCtrl.create();

  constructor(
    private nav: NavController,
    private navParams: NavParams,
    private loadingCtrl: LoadingController,
    private store: Store
  ){}

  async ionViewDidLoad(){
    this.selected = this.navParams.get('selected');
    if( !this.selected ){
      await this.loading.present();
      try {
        let events = await this.store.get('EVENTS');
        this.events = events.events;
      } catch(err){
        console.warn(err);
      }
      this.loading.dismiss();
    }
  }
  goSelected(item){
    this.nav.push('Events', {
      selected: item
    });
  }

}
