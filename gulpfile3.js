var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
//var url = ""
//var url = "front_project/Bonnie/2016/SkyTeam/transWorld"
var url = "front/Bonnie/quanhuang/Fools"
//var url = "front/Bonnie/SkyTeam/transWorld"
//var url = "front/Ray/TencentIE/mall"
//var url ="front/Bonnie/quanhuang/SpringFestivalSign"
//var url = "study/angularjs"
//var url = "front/Mak/qeelin"
//var url = "front/Ray/magicSprite/golive"
//var url = "front_project/bank-master"
//var url = "front/Ray/taomi/game"
//var url = "front/Ray/skyteam/market"
// 静态服务器 + 监听 scss/html 文件
gulp.task('serve', function() {

    browserSync.init({
        server: "./"
    });
	gulp.watch([url+'/**/*.html',url+'/**/*.css', url+'/**/*.js']).on('change', reload);
    //gulp.watch(['requirejs/website/**/*.html','requirejs/website/**/*.css', 'requirejs/website/**/*.js']).on('change', reload);
	
});

