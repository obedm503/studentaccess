import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '../../components/components.module';
import { GradesDetailComponent } from './grades-detail';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: GradesDetailComponent,
      },
    ]),
    TranslateModule.forChild(),
  ],
  declarations: [GradesDetailComponent],
})
export class GradesDetailModule {}
