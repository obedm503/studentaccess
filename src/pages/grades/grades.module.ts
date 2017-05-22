import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Grades } from './grades';
import { ComponentsModule } from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ Grades ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(Grades),
    TranslateModule.forChild()
  ],
  exports: [ Grades ],
})
export class GradesModule {}
