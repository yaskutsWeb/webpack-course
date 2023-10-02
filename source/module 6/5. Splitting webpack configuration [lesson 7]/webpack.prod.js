const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const { merge: webpackMergePlugin } = require("webpack-merge");
const glob = require('glob');
const commonConfig = require('./webpack.common');

const purgePath = {
	src: path.join(__dirname, 'src'),
};

module.exports = webpackMergePlugin(commonConfig, {
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
			{
				test: /\.s[ac]ss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
		],
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{
					from: 'assets/images/*',
					to: path.resolve(__dirname, 'dist'),
					context: 'src',
				}
			],
		}),
		new PurgeCSSPlugin({
			paths: glob.sync(`${purgePath.src}/**/*`, {
				nodir: true,
			}),
			safelist: ['dummy-css']
		}),
		new MiniCssExtractPlugin(),
	],
});
