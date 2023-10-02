const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		index: './src/index.js',
		courses: './src/pages/courses.js',
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	devServer: {
		static: './dist',
		hot: false,
		liveReload: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/index.html'),
			inject: true,
			chunks: ['index'],
			filename: 'index.html',
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/pages/courses.html'),
			inject: true,
			chunks: ['courses'],
			filename: 'courses.html',
		}),
		new CopyPlugin({
			patterns: [
				{
					from: 'assets/images/*',
					to: path.resolve(__dirname, 'dist'),
					context: 'src',
				}
			],
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.s[ac]ss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			// {
			// 	test: /\.(png|jpeg|jpg|gif)$/,
			// 	type: 'asset/resource',
			// }
		]
	}
};
