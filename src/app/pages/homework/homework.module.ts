import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { HomeworkComponent } from './homework';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeworkComponent,
      },
    ]),
    TranslateModule.forChild(),
  ],
  declarations: [HomeworkComponent],
})
export class HomeworkModule {}
