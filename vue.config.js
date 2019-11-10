const path = require('path');

// 导入postcss-px-to-viewport
const resolve = (dir) => {
	return path.join(__dirname, dir);
}
module.exports = {
	devServer: {
		port: 9528,
		open: true,
	},
	assetsDir: 'static',
	outputDir: 'datamax',
	productionSourceMap: false,
	chainWebpack: config => {
		config.resolve.alias
			.set('@', resolve('src'));
	},
	css: {
		extract: true,
		requireModuleExtension: false,
		sourceMap: false,
		loaderOptions: {
		},
		modules: false
	}

}