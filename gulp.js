var gulp = require('gulp')

var mustache = require("gulp-mustache");
 
gulp.src("./html/templates/*.mustache")
	.pipe(mustache({
		msg: "Hello Gulp!"
	}))
	.pipe(gulp.dest("./html/dist"));