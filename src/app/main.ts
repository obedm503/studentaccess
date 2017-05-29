import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { StudentAccessModule } from './app.module';
import { enableProdMode } from '@angular/core';

enableProdMode();
platformBrowserDynamic().bootstrapModule(StudentAccessModule);
