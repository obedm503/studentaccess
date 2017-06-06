'use strict';
importScripts('./build/sw-toolbox.js');

self.toolbox.options.cache = {
  name: 'studentaccess-2017-06-05.1'
};

// pre-cache our key assets
let assets = [
  './build/main.js',
  './build/main.css',
  './build/polyfills.js',
  'index.html',
  '/',
  'manifest.json',
  './assets/placeholder.jpg',
  './assets/schedules.json',
  './assets/i18n/en.json',
  './assets/i18n/es.json',
];
for( let i = 0; i <= 8; i++ ){
  assets.push(`./build/${i}.main.js`);
}
self.toolbox.precache(assets);

// dynamically cache any other local assets
self.toolbox.router.any('/*', self.toolbox.cacheFirst);
// people images
self.toolbox.router.any('data:image/jpeg;base64,*', self.toolbox.cacheFirst);
// api
self.toolbox.router.any('https://db.nca.edu.ni/*', self.toolbox.networkOnly);

// for api request never hit the cache
self.toolbox.router.default = self.toolbox.networkFirst;
