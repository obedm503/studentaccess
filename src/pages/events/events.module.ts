import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Events } from './events';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ Events ],
  imports: [
    IonicPageModule.forChild(Events),
    TranslateModule.forChild()
  ],
  exports: [ Events ]
})
export class EventsModule {}
