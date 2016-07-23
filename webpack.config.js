// External dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

// Variable presets
const baseSrcPath = path.resolve(__dirname, 'src');
const baseBinPath = path.resolve(__dirname, 'bin');

// Configurations
module.exports = {
	entry: path.resolve(baseSrcPath, 'index.js'),
	output: {
		path: baseBinPath,
		filename: 'extension.bundle.js'
	},
	devtool: "source-map",
	module: {
		loaders: [{
			test: /\.js(x)?$/,
			include: [
				baseSrcPath
			],
			loader: "babel-loader"
		}, {
			test: /\.((scss)|(css))$/,
			include: [
				baseSrcPath
			],
			loaders: ["style", "css", "sass"]
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Popup",
			filename: "popup.html",
			template: path.resolve(, "popup.html")
		}),
		new CopyWebpackPlugin([
				{
					from: path.resolve(baseSrcPath, "manifest.json"),
					to: path.resolve(baseBinPath, "manifest.json")
				},
				{
					from: path.resolve(baseSrcPath, "icon.png"),
					to: path.resolve(baseBinPath, "icon.png")
				}
			], {
			copyUnmodified: true
		})
	]
};
