import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Store } from '../../providers/store';

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class Events {
  public events;
  public selected;

  constructor(
    public nav: NavController,
    public navParams: NavParams,
    public store: Store
  ){}

  ionViewDidLoad() {
    this.selected = this.navParams.get('selected');
    if( !this.selected ){
      this.store.get('EVENTS').then( (events = { events: [] }) => {
        this.events = events.events;
      });
    }
  }
  goSelected(item){
    this.nav.push('Events', {
      selected: item
    });
  }

}
