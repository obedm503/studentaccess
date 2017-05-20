import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Cafeteria } from './cafeteria';

@NgModule({
  declarations: [
    Cafeteria,
  ],
  imports: [
    IonicPageModule.forChild(Cafeteria),
  ],
  exports: [
    Cafeteria
  ]
})
export class CafeteriaModule {}
