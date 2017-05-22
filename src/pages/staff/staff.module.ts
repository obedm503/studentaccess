import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Staff } from './staff';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ Staff ],
  imports: [
    IonicPageModule.forChild(Staff),
    TranslateModule.forChild()
  ],
  exports: [ Staff ]
})
export class StaffModule {}
