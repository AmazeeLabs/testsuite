'use strict';

/**
* Gulp specific config
*/

var gulp          = require('gulp'),
    util          = require('gulp-util'),
    browserSync   = require('browser-sync'),
    colors        = require('colors'),
    reload        = browserSync.reload,
    fs            = require('fs');

if( fs.existsSync('./domain.json') ) {
    var domain        = require('./domain.json');
} else {
    var domain        = process.env.AMAZEEIO_SITE_URL;
}


/* Gulp Test task*/
gulp.task('test', function() {
  return browserSync.init(null, {
    proxy: domain,
    startPath: "",
    notify: false,
    logConnections: true,
    reloadOnRestart: true,
    ghostMode: {
      clicks: true,
      forms: true,
      scroll: true
    }
  });
});


/* Default task*/
gulp.task('default', ['test']);


/*Help task*/
gulp.task('help', function () {
  console.log("\n\nUsage".underline);
  console.log("  gulp [command] --option\n\n"+"Commands:".underline);
  console.log('gulp test'.yellow+'\t\trun Gulp test enviroment');
});
