// External dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

// Processes manifest
const manifest = require('./src/manifest')

// Variable presets
const baseSrcPath = path.resolve(__dirname, 'src');
const baseBinPath = path.resolve(__dirname, 'bin');

// Interpolating dependencies from manifest
var copyReqs = [
	{
		from: path.resolve(baseSrcPath, 'manifest.json'),
		to: path.resolve(baseBinPath, 'manifest.json')
	},
	{
		from: path.resolve(baseSrcPath, 'icon.png'),
		to: path.resolve(baseBinPath, 'icon.png')
	}
];

if (manifest.icons) {
	for (var prop in manifest.icons) {
		if (manifest.icons.hasOwnProperty(prop)) {
			copyReqs.push({
				from: path.resolve(baseSrcPath, prop),
				to: path.resolve(baseBinPath, prop)
			});
		}
	}
}

// Configurations
module.exports = {
	entry: path.resolve(baseSrcPath, 'index.js'),
	output: {
		path: baseBinPath,
		filename: 'extension.bundle.js'
	},
	devtool: 'source-map',
	module: {
		loaders: [{
			test: /\.js(x)?$/,
			include: [
				baseSrcPath
			],
			loader: 'babel-loader'
		}, {
			test: /\.((scss)|(css))$/,
			include: [
				baseSrcPath
			],
			loaders: ['style', 'css', 'sass']
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Popup',
			filename: 'popup.html',
			template: path.resolve(baseSrcPath, 'popup.html')
		}),
		new CopyWebpackPlugin(copyReqs, {
			copyUnmodified: true
		})
	]
};
