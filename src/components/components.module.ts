import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { Ribbon } from './ribbon/ribbon';
import { GradeBadge } from './grade-badge/grade-badge';

@NgModule({
  declarations: [
    Ribbon,
    GradeBadge
  ],
  imports: [ IonicModule ],
  exports: [
    Ribbon,
    GradeBadge
  ]
})
export class ComponentsModule {}
