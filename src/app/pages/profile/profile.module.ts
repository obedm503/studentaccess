import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ProfileComponent } from './profile';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProfileComponent,
      },
    ]),
    TranslateModule.forChild(),
  ],
  declarations: [ProfileComponent],
})
export class ProfileModule {}
