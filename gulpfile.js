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
        .pipe(gulp.dest('www/scripts/'));
});
