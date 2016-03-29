var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('default', ['bundle'], function() {
	gulp.watch(['src/**/*'], ['bundle']);
});

gulp.task('bundle', function() {
	gulp.src('src/main.jsx')
		.pipe(
			webpack({
				watch: false,
				output: {
					filename: 'bundle.js'
				},
				module: {
					loaders: [
						{
							test: /\.jsx?/,
							loader: 'babel'
						}
					]
				}
			})
		)
		.on('error', e => {
			console.log('error catched');
			console.error(e);
			this.emit('end');
		})
		.pipe(gulp.dest('www/scripts/'));
});