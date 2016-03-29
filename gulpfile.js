var gulp = require('gulp');
var webpack = require('webpack-stream');
gulp.task('default', function() {
    return gulp.src('src/main.jsx')
        .pipe(webpack({
            watch: true,
            output: {
                filename: 'bundle.js'
            },
            module : {
                loaders : [
                    {
                        test : /\.jsx?/,
                        loader : 'babel'
                    }
                ]
            }
        }))
        .on('error', function() {
            this.emit('end');
        })
        .pipe(gulp.dest('www/scripts/'));
});
