import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { EventsComponent } from './events';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: EventsComponent,
      },
    ]),
    TranslateModule.forChild(),
  ],
  declarations: [EventsComponent],
})
export class EventsModule {}
