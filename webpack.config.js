var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry : './js/timeZone2ComponentApp.js',
	output: {
		path: '.',
		filename: './js/timeZone2ComponentBundle.js'
	},
	watch: true,
	module: {
		loaders :[
		{
			test : /.jsx?$/,
			loader : 'babel-loader',
			exclude: /node_modules/,
			query :{
				presets :['es2015','react']
			}
		}
		]
		
	},
};
