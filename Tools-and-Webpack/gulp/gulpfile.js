const { task, src, dest, series, watch } = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");

task("js", () => {
  return src("src/*.js")
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(concat("index.js"))
    .pipe(dest("dist"))
    .pipe(uglify())
    .pipe(rename({ suffix: "-min" }))
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist"));
});

task("css", () => {
  return src("src/css/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(concat("style.css"))
    .pipe(dest("dist"))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist"));
});

task("default", series("js", "css"));

task("watch", () => {
  watch("./src/css/*.scss", series("css"));
  watch("./src/*.js", series("js"));
});
