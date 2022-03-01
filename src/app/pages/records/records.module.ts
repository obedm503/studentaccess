import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { RecordsComponent } from './records';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: RecordsComponent,
      },
    ]),
    TranslateModule.forChild(),
  ],
  declarations: [RecordsComponent],
})
export class RecordsModule {}
