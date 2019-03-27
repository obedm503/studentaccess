import { NgModule } from '@angular/core';
import { pageModuleConfig } from '../util';
import { Staff } from './staff';

@NgModule(pageModuleConfig(Staff))
export class StaffModule {}
