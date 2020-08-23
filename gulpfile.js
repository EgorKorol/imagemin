const { src, dest } = require('gulp');
const imagemin = require('gulp-imagemin');
const svgo = require('imagemin-svgo');
const optipng = require('imagemin-optipng');
const mozjpeg = require('imagemin-mozjpeg');

function minifyImages() {
	return src('./images/**/*')
		.pipe(imagemin([
			mozjpeg({ quality: 85, progressive: true }),
			optipng({ optimizationLevel: 5 }),
			svgo({
				plugins: [{ removeViewBox: true }, { cleanupIDs: false }]
			})
		]))
		.pipe(dest('./minified'))
}

exports.default = minifyImages
