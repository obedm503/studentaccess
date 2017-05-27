import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GradesDetail } from './grades-detail';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    GradesDetail
  ],
  imports: [
    IonicPageModule.forChild(GradesDetail),
    TranslateModule.forChild()
  ],
  exports: [
    GradesDetail
  ]
})
export class GradesDetailModule {}