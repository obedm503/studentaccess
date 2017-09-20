import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { enableProdMode } from '@angular/core';

// enableProdMode();

// renamed to AppModule to solve prod env bug ¯\_(ツ)_/¯
platformBrowserDynamic().bootstrapModule(AppModule);
