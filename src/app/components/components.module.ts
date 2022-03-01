import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { GradeBadgeComponent } from './grade-badge/grade-badge';
import { RibbonComponent } from './ribbon/ribbon';

@NgModule({
  declarations: [RibbonComponent, GradeBadgeComponent],
  exports: [RibbonComponent, GradeBadgeComponent],
  imports: [CommonModule, IonicModule],
})
export class ComponentsModule {}
