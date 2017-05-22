import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Records } from './records';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ Records ],
  imports: [
    IonicPageModule.forChild(Records),
    TranslateModule.forChild()
  ],
  exports: [ Records ]
})
export class RecordsModule {}
