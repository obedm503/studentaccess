import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { Ribbon } from './ribbon/ribbon';

@NgModule({
  declarations: [
    Ribbon
  ],
  imports: [ IonicModule ],
  exports: [
    Ribbon
  ]
})
export class ComponentsModule {}
