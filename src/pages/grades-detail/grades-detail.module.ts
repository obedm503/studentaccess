import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GradesDetail } from './grades-detail';

@NgModule({
  declarations: [
    GradesDetail,
  ],
  imports: [
    IonicPageModule.forChild(GradesDetail),
  ],
  exports: [
    GradesDetail
  ]
})
export class GradesDetailModule {}
