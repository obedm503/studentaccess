import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Cafeteria } from './cafeteria';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ Cafeteria ],
  imports: [
    IonicPageModule.forChild(Cafeteria),
    TranslateModule.forChild()
  ],
  exports: [ Cafeteria ]
})
export class CafeteriaModule {}
