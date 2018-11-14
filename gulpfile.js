"use strict";

// MODULES IMPORTS
const gulp = require("gulp");
const sass = require("gulp-sass");
const connect = require("gulp-connect");

// PATH IMPORTS
const DEV_DIR = `./prod`;
const DIST_DIR = `./dist`;
const SASS_JUST_ROOT_DIR = `${DEV_DIR}/sass/*.scss`;
const SASS_DIR = `${DEV_DIR}/sass/**/*.scss`;
const CSS_DIR  = `${DIST_DIR}/css/`;


// SERVER TASKS
gulp.task('server', function(){
  connect.server({
    root: `${DIST_DIR}`,
    port: 1313,
    livereload: true
  });
});



// STYLE TASKS
gulp.task('inicio:sass', function() {
  gulp.src(SASS_JUST_ROOT_DIR)
     .pipe(
       sass({ outputStyle: 'compressed' })
           .on('error', sass.logError)
     )
     .pipe( gulp.dest(CSS_DIR) )
     .pipe( connect.reload() );
});



gulp.task('inicio:html', function(){
  gulp.watch([DIST_DIR], function(){
    connect.reload();
  });
});

gulp.task('inicio:watch', function(){
  gulp.watch([SASS_DIR], ['inicio:sass']);
  // gulp.watch(DIST_DIR, ['inicio:server']);
  connect.reload();
})

gulp.task('inicio', ['server','inicio:watch', 'inicio:html']);

gulp.task('default', function(){
  console.log(`Its alive`);
});
