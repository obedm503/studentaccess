import { NgModule } from '@angular/core';
import { GradeBadge } from './grade-badge/grade-badge';
import { Ribbon } from './ribbon/ribbon';

@NgModule({
  declarations: [Ribbon, GradeBadge],
  exports: [Ribbon, GradeBadge],
})
export class ComponentsModule {}
