import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Staff } from './staff';

@NgModule({
  declarations: [
    Staff,
  ],
  imports: [
    IonicPageModule.forChild(Staff),
  ],
  exports: [
    Staff
  ]
})
export class StaffModule {}
