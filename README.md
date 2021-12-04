# my-webpack
This repo is used to store the configuration files for my webpack set up. Using this webpack configuration will allow a basic setup of minifying JS and CSS files, uses Babel for transpiling newer JS to older vanilla JS for older browser support, and uses PostCSS for auto adding vendor prefixes to CSS properties. 
## Features
- Minifies JS and CSS
- Transpiles SCSS files to CSS
- Uses Babel to transpile new JS code to older vanilla JS code for older browsers
- Custom entry points for specific files
- Extracts CSS into their own separate files
- Creates source maps for JS and CSS files
- Auto adds vendor prefixes to CSS properties

## Technologies
### Developer Dependencies  
These are all the packages that are needed to get this webpack configuration started.
- @babel/core
- @babel/preset-env
- babel-loader
- css-loader
- mini-css-extract-plugin
- postcss
- postcss-loader
- postcss-preset-env
- sass
- sass-loader
- webpack
- webpack-cli

## NPM Scripts
This script will tell webpack to look for the config file located in the current directory with the name "**webpack.config.js**", and build all the files in development. Building the project in development will show more information within the files for easier debugging.
```
"devbuild": "webpack --config webpack.config.js --mode development"
```
This script is the same as above. The difference being that when files are edited and saved, they will automatically be bundled and transpiled by webpack, without having to run the build command again.
```
"devbuild:watch": "webpack --watch --config webpack.config.js --development"
```
For this script, it will bundle and transpile the JS and CSS files in a "production ready standard". This means that the files will be minified and mangeld, making the file sizes as small as possible.
```
"prodbuild": "webpack --config webpack.config.js --mode production"
```

## Todo
- Finish the README.md

## References
- https://webpack.js.org/concepts/