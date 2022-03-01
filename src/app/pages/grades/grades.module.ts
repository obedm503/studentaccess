import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '../../components/components.module';
import { GradesComponent } from './grades';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: GradesComponent,
      },
    ]),
    TranslateModule.forChild(),
  ],
  declarations: [GradesComponent],
})
export class GradesModule {}
