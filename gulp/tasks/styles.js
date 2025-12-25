const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const mmq = require('gulp-merge-media-queries');
const autoprefixer = require('autoprefixer');
const cleanCss = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

const postcssOptions = [
    autoprefixer()
];
const scssOptions = {
  outputStyle: 'expanded',
  includePaths: ['node_modules'],
  api: 'modern-compiler',
  silenceDeprecations: ['legacy-js-api', 'import', 'global-builtin', 'color-functions', 'slash-div', 'strict-unary']
};

module.exports = () => {
    $.gulp.task('styles', () => {
        return $.gulp
            .src($.path.src.scss + '**/*.scss')
            .pipe($.debug())
            .pipe($.plumber())
            .pipe(sourcemaps.init())
            .pipe(sass(scssOptions))
            .pipe(postcss(postcssOptions))
            .pipe(mmq())
            .pipe(cleanCss())
            .pipe(sourcemaps.write('.'))
            .pipe($.plumber.stop())
            .pipe($.gulp.dest($.path.dev.css))
            .pipe(
                $.browserSync.reload({
                    stream: true
                })
            );
    });

    $.gulp.task('styles:prod', () => {
        return $.gulp
            .src($.path.dev.css + '**/*.css')
            .pipe($.debug())
            .pipe($.plumber.stop())
            .pipe($.gulp.dest($.path.prod.css));
    });
};
