var gulp = require('gulp');
var minify = require('gulp-minify');
var sass = require('gulp-sass');

var plugins = require('gulp-load-plugins')();

gulp.task('hello', function(){
	console.log('Bonjour');
})

gulp.task('minify', function(){
	return gulp.src('js/app.js')
	pipe(minify())
	pipe(gulp.dest('dest'))
	
})

gulp.task('sass', function(){
	return gulp.src('css/style.css')
	pipe(sass())
	pipe(gulp.dest('dest'))
})

