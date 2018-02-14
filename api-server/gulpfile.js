var gulp = require('gulp');
var del = require('del');
var htmlreplace = require('gulp-html-replace');
var path = "./client";
var ext = "";

var tasksCall = ["clean", "build", "map"];

console.log(process.argv[3])

if (process.argv[2] == "--prod") {
    path = "./dist";
    ext = "min.";
    tasksCall = ["build", "path-dist"];
    console.log("path")
}

gulp.task('clean', function () {
    return del(['./dist']);
});

gulp.task('build', function () {

    // if (path != "./client") {
    //     gulp.src(
    //         [
    //             "./client/*.html"
    //         ])
    //         .pipe(gulp.dest(`${path}`));
    // }

    gulp.src(
        [
            `./node_modules/jquery/dist/jquery.${ext}js`,
            `./node_modules/handlebars/dist/handlebars.${ext}js`
        ])
        .pipe(gulp.dest(`${path}/lib`));
    gulp.src(
        [
            `./node_modules/bootstrap/dist/css/bootstrap.${ext}css`
        ])
        .pipe(gulp.dest(`${path}/css`));
});

gulp.task('map', function () {
    gulp.src(
        [
            "./node_modules/bootstrap/dist/css/bootstrap.css.map"
        ])
        .pipe(gulp.dest("./client/css"));
});


gulp.task('path-dist', function () {
    gulp.src('./client/index.html')
        .pipe(htmlreplace({
            'css-bootstrap': './css/bootstrap.min.css',
            'js-hbs': './lib/handlebars.min.js',
            'jquery': './lib/jquery.min.js'
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task("default", tasksCall);