# Module 4. Build a full website using Webpack Course Project
## 1. Introduction
- [Video](https://youtu.be/r014byZPLak)

## 2. Install dependencies via NPM
- [Video](https://youtu.be/6j3XCMlsXp4)

#### Source code: 
[Course Project (Base version)](https://github.com/yaskutsWeb/webpack-course/tree/master/source/module%204/1.%20Course%20Project%20(Base%20version)%20%5Blesson%202%5D/src)

[Course Project](https://github.com/yaskutsWeb/webpack-course/tree/master/source/module%204/1.%20Course%20Project%20%5Blesson%202%5D)

## 3. Basic Webpack config
- [Video](https://youtu.be/ldG5lS_4y3c)

#### Source code: [Basic Webpack config](https://github.com/yaskutsWeb/webpack-course/tree/master/source/module%204/2.%20Basic%20Webpack%20config%20%5Blesson%203%5D)

## 4. CSS & SCSS loaders setup
- [Video](https://youtu.be/TKdgfY6pKAg)

#### Source code: [CSS and SCSS loaders setup](https://github.com/yaskutsWeb/webpack-course/tree/master/source/module%204/3.%20CSS%20and%20SCSS%20loaders%20setup%20%5Blesson%204%5D)

## 5. Dev Server setup
- [Video](https://youtu.be/w5_Z3UUtodI)

#### Source code: [Dev Server Setup](https://github.com/yaskutsWeb/webpack-course/tree/master/source/module%204/4.%20Dev%20server%20setup%20%5Blesson%205%5D)

## 6. Analyze the issue
- [Video](https://youtu.be/O5QFa8XW9YA)

#### Source code: [Analyze the issue](https://github.com/yaskutsWeb/webpack-course/tree/master/source/module%204/5.%20Analyze%20the%20issue%20%5Blesson%206%5D)

## 7. Copy Plugin:
- [Video](https://youtu.be/lEep_6mxX-E)

#### Source code: [Copy assets to dist folder](https://github.com/yaskutsWeb/webpack-course/tree/master/source/module%204/6.%20Copy%20Plugin%20%5Blesson%207%5D)

#### Notes: Use this config for webpack CopyPlugin
		new CopyPlugin({
			patterns: [
				{
					from: 'assets/images/*',
					to: path.resolve(__dirname, 'dist'),
					context: 'src',
				}
			],
		}),

#### Study materials:
- Webpack Copy Plugin: https://webpack.js.org/plugins/copy-webpack-plugin/

## 8. Fixing the imports in courses page
- [Video](https://youtu.be/LyDJqeoDeaw)

#### Source code: [Fixing the imports in courses page](https://github.com/yaskutsWeb/webpack-course/tree/master/source/module%204/7.%20Fixing%20the%20imports%20in%20courses%20page%20%5Blesson%208%5D)

##
#### [Next Module](https://github.com/yaskutsWeb/webpack-course/blob/master/source/module%205/Module%205.md)
#### [Return to contents](https://github.com/yaskutsWeb/webpack-course)
##
