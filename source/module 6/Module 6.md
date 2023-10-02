# Module 2. Production Build and Deployment configurations
## 1. Introduction
- [Video](https://youtu.be/UWISinCZZ4A)

## 2. Mini CSS Extract Plugin
- [Video](https://youtu.be/Ny6q5P0TL6A)
  
#### Source code: [Extract CSS from HTML](https://github.com/yaskutsWeb/webpack-course/tree/master/source/module%206/1.%20Extract%20CSS%20from%20HTML%20%5Blesson%202%5D)

#### Study Materials
- The Benefits of Separating HTML, CSS, and JavaScript: https://reviewnprep.com/blog/the-benefits-of-separating-html-css-and-javascript-unleashing-the-power-of-web-development/
- Separating CSS: https://survivejs.com/webpack/styling/separating-css/
- MiniCssExtractPlugin: [https://survivejs.com/webpack/styling/separating-css/](https://webpack.js.org/plugins/mini-css-extract-plugin/)

## 3. Shimming
- [Video](https://youtu.be/eGm2enu8vRM)

#### Source code: [Shimming](https://github.com/yaskutsWeb/webpack-course/tree/master/source/module%206/2.%20Shimming%20%5Blesson%203%5D)

#### Study Materials
- What is shimming: https://webpack.js.org/guides/shimming/
- Shimming in webpack: https://stackoverflow.com/questions/75318926/shimming-in-webpack

## 4. Purge CSS webpack plugin
- [Video](https://youtu.be/PxeglRAhW0o)

#### Notes: Use such configuration of PurgeCSS Plugin
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');

	new PurgeCSSPlugin({
		paths: glob.sync(`${purgePath.src}/**/*`, {
			nodir: true,
		}),
	}),

#### Source code: [Remove dead CSS](https://github.com/yaskutsWeb/webpack-course/tree/master/source/module%206/3.%20Remove%20dead%20CSS%20%5Blesson%204%5D)

#### Study Materials
- Eliminating Unused CSS: https://survivejs.com/webpack/styling/eliminating-unused-css/
- purgecss-webpack-plugin: https://www.npmjs.com/package/purgecss-webpack-plugin
- glob: https://www.npmjs.com/package/glob
- PurgeCSS in webpack: https://purgecss.com/plugins/webpack.html
- PurgeCSS configuration: https://purgecss.com/configuration.html

## 5. Tree shaking
- [Video](https://youtu.be/kvuMWqJNTGM)

#### Source code: [Tree shaking Webpack Production mode](https://github.com/yaskutsWeb/webpack-course/tree/master/source/module%206/4.%20Tree%20shaking%20Webpack%20Production%20mode%20%5Blesson%205%5D)

#### Study Materials
- Tree Shaking: https://webpack.js.org/guides/tree-shaking/
- Tree Shaking A Reference Guide: https://www.smashingmagazine.com/2021/05/tree-shaking-reference-guide/
- JavaScript tree shaking, like a pro: https://bluepnume.medium.com/javascript-tree-shaking-like-a-pro-7bf96e139eb7

## 6. Production vs Development mode
- [Video](https://youtu.be/CL64vD1nht4)

#### Study Materials
- Webpack Mode: https://webpack.js.org/configuration/mode/
- Webpack production mode: https://webpack.js.org/guides/production/
- Webpack development mode: https://webpack.js.org/guides/development/
- Production Build vs Development Build: https://www.linkedin.com/pulse/webpack-production-build-vs-development-prasenjit-sutradhar

## 7. Splitting webpack configuration:
- [Video (Part 1)](https://youtu.be/zyV0rXfJsrM)
- [Video (Part 2)](https://youtu.be/YjnZkk8z88s)

#### Source code: [Splitting webpack configuration](https://github.com/yaskutsWeb/webpack-course/tree/master/source/module%206/5.%20Splitting%20webpack%20configuration%20%5Blesson%207%5D)

#### Study Materials
- webpack-merge: https://www.npmjs.com/package/webpack-merge
- How we can use webpack-merge: https://medium.com/@h.tadayoni89/how-can-we-use-webpack-merge-a9e646e69ec7

##
#### [Next Module](https://github.com/yaskutsWeb/webpack-course/blob/master/source/module%207/Module%207.md)
#### [Return to contents](https://github.com/yaskutsWeb/webpack-course)
##
