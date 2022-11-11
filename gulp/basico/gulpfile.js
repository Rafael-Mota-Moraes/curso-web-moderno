const gulp = require("gulp");
const { series, parallel } = require("gulp");

const antes1 = (cb) => {
  console.log("Tarefa Antes1!");
  return cb();
};

const antes2 = (cb) => {
  console.log("Tarefa Antes2!");
  return cb();
};

function copiar(callback) {
  // gulp
  //   .src(["pastaA/arquivo1.txt", "pastaA/arquivo2.txt"])
  //   .pipe(gulp.dest("pastaB"));

  gulp.src("pastaA/**/*.txt").pipe(gulp.dest("pastaB"));

  return callback();
}

const fim = (cb) => {
  console.log("Tarefa fim!");
  return cb();
};

module.exports.default = series(parallel(antes1, antes2), copiar, fim);
