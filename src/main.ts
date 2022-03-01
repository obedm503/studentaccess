import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// renamed to AppModule to solve prod env bug ¯\_(ツ)_/¯
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  /* eslint-disable-next-line  no-console */
  .catch(console.error);
