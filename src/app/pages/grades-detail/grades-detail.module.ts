import { NgModule } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { pageModuleConfig } from '../util';
import { GradesDetail } from './grades-detail';

@NgModule(
  pageModuleConfig(GradesDetail, {
    imports: [ComponentsModule],
  }),
)
export class GradesDetailModule {}
