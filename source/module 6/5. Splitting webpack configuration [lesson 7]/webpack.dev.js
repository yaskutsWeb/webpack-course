const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { merge: webpackMergePlugin } = require("webpack-merge");
const commonConfig = require('./webpack.common');

module.exports = webpackMergePlugin(commonConfig, {
	mode: 'development',
	devServer: {
		static: "./dist",
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.s[ac]ss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
	plugins: [
		new BundleAnalyzerPlugin({}),
	],
});
