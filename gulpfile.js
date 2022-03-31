const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const uglifycss = require("gulp-uglifycss");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const plumber = require("gulp-plumber");
const minify = require("gulp-minify");
const concat = require("gulp-concat");

const themeFolder = "wp-content/themes/cut2code"; //! Change this while changing project

gulp.task("compile-scss", function () {
	return gulp
		.src(themeFolder + "/scss/main.scss")
		.pipe(sourcemaps.init())
		.pipe(plumber())
		.pipe(sass.sync().on("error", sass.logError))
		.pipe(rename("style.min.css"))
		.pipe(autoprefixer())
		.pipe(uglifycss())
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest(themeFolder));
});

gulp.task("compile-js", function () {
	return gulp
		.src([themeFolder + "/js/main.js"])
		.pipe(concat("main.js"))
		.pipe(
			minify({
				ext: {
					min: ".min.js",
				},
			})
		)
		.pipe(gulp.dest(themeFolder + "/js/min"));
});

gulp.task("build", function () {
	gulp.series("compile-scss", "compile-js");

	gulp.watch(themeFolder + "/scss/", gulp.series("compile-scss"));

	gulp.watch(themeFolder + "/js/*.js", gulp.series("compile-js"));
	console.log("Watching SCSS + JS changes...");
});
