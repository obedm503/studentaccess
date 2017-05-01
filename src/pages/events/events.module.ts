import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Events } from './events';

@NgModule({
  declarations: [
    Events,
  ],
  imports: [
    IonicPageModule.forChild(Events),
  ],
  exports: [
    Events
  ]
})
export class EventsModule {}
