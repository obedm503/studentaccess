import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Homework } from './homework';

@NgModule({
  declarations: [
    Homework,
  ],
  imports: [
    IonicPageModule.forChild(Homework),
  ],
  exports: [
    Homework
  ]
})
export class HomeworkModule {}
