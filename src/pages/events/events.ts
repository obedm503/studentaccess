import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  Loading,
  LoadingController
} from 'ionic-angular';

import { Store } from '../../providers/store';
import { Log } from '../../providers/log';

import { expand } from '../../components/animations';

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
  animations: [ expand ],
})
export class Events {
  public events;
  public selected;
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
      let events = await this.store.get('EVENTS');
      this.events = events.events;
    } catch(err){
      this.log.warn(err);
    }
    this.loading.dismiss();
  }
  goSelected(id){
    if( this.selected === id ){
      this.selected = '';
    } else {
      this.selected = id;
    }
  }

}
