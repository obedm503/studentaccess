import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { expand } from '../../components/animations';
import { Log } from '../../services/log';
import { Store } from '../../services/store';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
  animations: [expand],
})
export class Events {
  events?: any;
  selected?: string;

  constructor(
    private loadingCtrl: LoadingController,
    private log: Log,
    public store: Store,
  ) {}

  async ionViewDidEnter() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    try {
      const { events } = (await this.store.get('EVENTS')) || {};
      this.events = events;
    } catch (err) {
      this.log.warn(err);
    }
    await loading.dismiss();
  }

  expand(id: string) {
    if (this.selected === id) {
      this.selected = '';
    } else {
      this.selected = id;
    }
  }
}
