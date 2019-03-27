import { NgModule } from '@angular/core';
import { pageModuleConfig } from '../util';
import { Profile } from './profile';

@NgModule(pageModuleConfig(Profile))
export class ProfileModule {}
