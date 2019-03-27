import { NgModule } from '@angular/core';
import { pageModuleConfig } from '../util';
import { Login } from './login';

@NgModule(pageModuleConfig(Login))
export class LoginModule {}
