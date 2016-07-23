const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

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
				path.resolve(__dirname, 'src')
			],
			loader: "babel-loader"
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
