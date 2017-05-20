import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { Grades } from './grades';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [ Grades ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(Grades),
  ],
  exports: [ Grades ],
})
export class GradesModule {}
