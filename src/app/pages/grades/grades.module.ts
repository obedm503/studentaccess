import { NgModule } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { pageModuleConfig } from '../util';
import { Grades } from './grades';

@NgModule(
  pageModuleConfig(Grades, {
    imports: [ComponentsModule],
  }),
)
export class GradesModule {}
