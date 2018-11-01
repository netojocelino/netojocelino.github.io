"use strict";
const NAME= "Jocelino Alves";
const VERSION = "0.0.1";

const gulp = require("gulp");
const sass = require("gulp-sass");
const connect = require("gulp-connect");
const mincss = require("gulp-concat-css");

gulp.task('index', ['run','watch-index']);


gulp.task('watch-index',()=>{
  gulp.watch("./prod/**/*", ['run','sass-index']);
});

gulp.task('sass-index', ()=>{
  console.log("Sass Index running");
  return gulp.src("./prod/sass/**/*.scss")
     .pipe(sass({
       outputStyle: "compressed",
       noCache: true
     }).on('error', sass.logError))
     .pipe(mincss())
     .pipe(gulp.dest("./dist/css/index.css"))
     .pipe(connect.reload())
});



gulp.task('run', ()=> {
  return connect.server({
    root: 'dist',
    port: 1313,
    livereload: true
  })
})

gulp.task('default', ()=>{
  console.log(`
    Projeto Portfolio
      **INDEX**
       0   run:        run a server in localhost:1313
       1   index:      run 1.*
       1.1 sass-index: run sass production to css dist

    `);
});
