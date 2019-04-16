import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { GradeBadge } from './grade-badge/grade-badge';
import { Ribbon } from './ribbon/ribbon';

@NgModule({
  declarations: [Ribbon, GradeBadge],
  exports: [Ribbon, GradeBadge],
  imports: [CommonModule, IonicModule],
})
export class ComponentsModule {}
