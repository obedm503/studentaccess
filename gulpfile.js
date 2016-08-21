var gulp = require('gulp'),
    gutil = require('gulp-util'),
    bower = require('bower'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    cleanCss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    sh = require('shelljs'),
    uglify = require('gulp-uglify'),
    fs = require('fs'),
    gulpJsdoc2md = require('gulp-jsdoc-to-markdown'),
    paths = {
      sass: ['./scss/**/*.scss'],
      appjs: ['./www/js/app.js','./www/js/config.js','./www/components/**/*.js'],
      appcss: ['./www/components/**/*.css'],
      vendorjs: [
        './www/lib/ionic-material/dist/ionic.material.min.js',
        './www/lib/ionic-platform-web-client/dist/ionic.io.bundle.min.js',
        './www/lib/ngCordova/dist/ng-cordova.min.js',
        './www/lib/localforage/dist/localforage.min.js',
        './www/lib/angular-localforage/dist/angular-localForage.min.js',
        './www/lib/angular-translate/angular-translate.min.js',
        './www/lib/angular-translate-once/src/translate-once.js',
        './www/lib/ionic-ion-imageCacheFactory/ionic.ion.imagecachefactory.js',
        './www/lib/angular-img-fallback/angular.dcb-img-fallback.min.js',
        './www/lib/chart.js/dist/Chart.min.js',
        './www/lib/angular-chart.js/dist/angular-chart.min.js',
        './www/lib/obedm503-array/dist/$array.min.js'
      ],
      vendorcss: [
        './www/lib/ionic-material/dist/ionic.material.min.css',
        './www/lib/loaders.css/loaders.min.css',
        './www/lib/font-awesome/css/font-awesome.min.css'
      ]
    };

gulp.task('default', ['docs','appcss','appjs','vendorjs','vendorcss']);
gulp.task('buildapp',['docs','appcss', 'appjs']);
gulp.task('buildvendor',['vendorcss', 'vendorjs']);

gulp.task('docs', function () {
  return gulp.src('./www/components/**/*.js')
    .pipe(concat('DOCS.md'))
    .pipe(gulpJsdoc2md())
    .pipe(gulp.dest('./'));
});

gulp.task('appcss', function() {
  return gulp.src(paths.appcss)
    .pipe(cleanCss())
    .pipe(concat('app.build.min.css'))
    .pipe(gulp.dest('./www/build/'));
});

gulp.task('appjs', function(){
  return gulp.src(paths.appjs)
    .pipe(concat('app.build.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./www/build/'));
});

gulp.task('vendorjs', function(){
  return gulp.src(paths.vendorjs)
    .pipe(concat('vendor.build.min.js'))
    .pipe(gulp.dest('./www/build/'));
});

gulp.task('vendorcss', function() {
  return gulp.src(paths.vendorcss)
    .pipe(concat('vendor.build.min.css'))
    .pipe(gulp.dest('./www/build/'));
});

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(cleanCss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  //gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.appjs, ['appjs']);
  gulp.watch(paths.appcss, ['appcss']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
