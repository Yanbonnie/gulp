
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var less = require('gulp-less');
var sass = require('gulp-ruby-sass');
/*
 * 压缩js文件,在命令行输入gulp script 启动此任务
 */
gulp.task('script',function(){     
	//找到文件
	gulp.src('js/*.js')
	//压缩文件
	.pipe(uglify())
	//另存压缩后的文件
	.pipe(gulp.dest('dist/js'));
})

/*
 * 使用gulp编译less，在命令行输入gulp less
 */
gulp.task('less',function(){
	gulp.src('css/*.less')
	.pipe(less())
	.pipe(gulp.dest('dist/css'))
})

/*
 *使用gulp编译sass，在命令行中输入gulp sass (略特殊)
 */
gulp.task('sass',function(){
	/*gulp.src('css/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('dist/css'))*/
	 return sass('css/*.scss')
	    .on('error', sass.logError)
	    .pipe(gulp.dest('dist/css'));
	
})

/*
 * 压缩css文件，在命令行输入gulp minify-css
 */
gulp.task('minify-css',function(){
	gulp.src('css/*.css')
	.pipe(cleanCSS())
	.pipe(gulp.dest('dist/css'))
})

/*
 * 检测代码自动执行任务 gulp auto
 */
gulp.task('auto',function(){
	gulp.watch('js/*.js',['script'])
	gulp.watch('css/*.less',['less'])
	gulp.watch('css/*.sass',['sass'])
	gulp.watch('css/*.css',['minify-css'])	
})



/*
 * 使用gulp.task('default')定义默认任务   在命令行使用gulp启动script任务和auto任务
 */
gulp.task('default',['script','less','sass','minify-css','auto'])
