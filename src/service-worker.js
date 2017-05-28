'use strict';
importScripts('./build/sw-toolbox.js');

console.log(self, self.toolbox)
self.toolbox.options.cache = {
  name: 'studentaccess'
};

// pre-cache our key assets
let assets = [
  './build/main.js',
  './build/main.css',
  './build/polyfills.js',
  'index.html',
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

// for any other requests go to the cache, and the the network
self.toolbox.router.default = self.toolbox.networkFirst;
