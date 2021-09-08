// vue.config.js
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src'),
				'@api': path.resolve(__dirname, 'src/api'),
				'@apiConfig': path.resolve(__dirname, 'src/apiConfig'),
			},
		},
	},
}
