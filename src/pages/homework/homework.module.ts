import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Homework } from './homework';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    Homework
  ],
  imports: [
    IonicPageModule.forChild(Homework),
    TranslateModule.forChild()
  ],
  exports: [
    Homework
  ]
})
export class HomeworkModule {}
