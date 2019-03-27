import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

const merge = <T>(a: T, b: T): T => {
  const out = Object.assign({}, a, b);

  Object.keys(out).forEach(key => {
    if (Array.isArray(a[key])) {
      out[key] = a[key].concat(b[key]).filter(Boolean);
    }
  });

  return out;
};

export const pageModuleConfig = (Page, ngModule?: NgModule): NgModule => {
  const initial: NgModule = {
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      RouterModule.forChild([
        {
          path: '',
          component: Page,
        },
      ]),
      TranslateModule.forChild(),
    ],
    declarations: [Page],
    // exports: [Page],
  };
  if (ngModule) {
    return merge(initial, ngModule);
  }
  return initial;
};
