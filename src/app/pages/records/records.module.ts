import { NgModule } from '@angular/core';
import { pageModuleConfig } from '../util';
import { Records } from './records';

@NgModule(pageModuleConfig(Records))
export class RecordsModule {}
