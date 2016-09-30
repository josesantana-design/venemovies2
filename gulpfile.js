'use strict';
/*-----------------------------------------------------------
 GULP: DEPENDENCIES
 Define las variables de tus dependencias en esta seccion
-----------------------------------------------------------*/
var gulp = require('gulp'),
    requireDir = require('require-dir')

/*-----------------------------------------------------------
 GULP: TASKS
Sientete libre de agregar mas tareas dentro de la carpeta Task
-----------------------------------------------------------*/
var tasks = requireDir('./tasks');

/*-----------------------------------------------------------
 GULP : WATCH TASKS
-----------------------------------------------------------*/
gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch("app/sass/*.sass", ['sass']);
});
