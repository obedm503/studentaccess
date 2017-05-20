import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Records } from './records';

@NgModule({
  declarations: [
    Records,
  ],
  imports: [
    IonicPageModule.forChild(Records),
  ],
  exports: [
    Records
  ]
})
export class RecordsModule {}
