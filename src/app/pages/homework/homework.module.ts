import { NgModule } from '@angular/core';
import { pageModuleConfig } from '../util';
import { Homework } from './homework';

@NgModule(pageModuleConfig(Homework))
export class HomeworkModule {}
