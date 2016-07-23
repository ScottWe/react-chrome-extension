// External dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

// Variable presets
const baseSrcPath = path.resolve(__dirname, 'src');

// Configurations
module.exports = {
	entry: path.resolve(__dirname, 'src/index.js'),
	output: {
		path: path.resolve(__dirname, 'bin'),
		filename: 'extension.bundle.js'
	},
	devtool: "source-map",
	module: {
		loaders: [{
			test: /\.js(x)?/,
			include: [
				baseSrcPath
			],
			loader: "babel-loader"
		}, {
			test: /\.((scss)|(css))/,
			include: [
				baseSrcPath
			],
			loaders: ["style", "css", "sass"]
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Popup",
			filename: "popup.html"
		}),
		new CopyWebpackPlugin([
				{
					from: path.resolve(__dirname, "src/manifest.json"),
					to: path.resolve(__dirname, "bin/manifest.json")
				},
				{
					from: path.resolve(__dirname, "src/icon.png"),
					to: path.resolve(__dirname, "bin/icon.png")
				}
			], {
			copyUnmodified: true
		})
	]
};
