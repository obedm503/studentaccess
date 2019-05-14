import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { Cafeteria } from './cafeteria';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: Cafeteria,
      },
    ]),
    TranslateModule.forChild(),
  ],
  declarations: [Cafeteria],
})
export class CafeteriaModule {}
