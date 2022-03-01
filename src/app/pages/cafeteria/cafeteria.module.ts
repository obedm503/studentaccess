import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { CafeteriaComponent } from './cafeteria';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: CafeteriaComponent,
      },
    ]),
    TranslateModule.forChild(),
  ],
  declarations: [CafeteriaComponent],
})
export class CafeteriaModule {}
