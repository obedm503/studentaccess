import { NgModule } from '@angular/core';
import { pageModuleConfig } from '../util';
import { Events } from './events';

@NgModule(pageModuleConfig(Events))
export class EventsModule {}
