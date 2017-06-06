import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GradesDetail } from './grades-detail';
import { ComponentsModule } from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    GradesDetail
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(GradesDetail),
    TranslateModule.forChild()
  ],
  exports: [
    GradesDetail
  ]
})
export class GradesDetailModule {}
