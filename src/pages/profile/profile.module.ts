import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Profile } from './profile';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    Profile
  ],
  imports: [
    IonicPageModule.forChild(Profile),
    TranslateModule.forChild()
  ],
  exports: [
    Profile
  ]
})
export class ProfileModule {}
