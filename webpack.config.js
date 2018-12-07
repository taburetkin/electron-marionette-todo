
var webpack = require('webpack');
var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'www'),
    filename: 'app.js'
  },
  resolve:{
    alias:{
	  'base': path.resolve('src/_env/base'),
	  'common': path.resolve('src/common'),
    },
  },
  plugins:[
	new webpack.ProvidePlugin({
		'$': 'jquery',
		'jQuery': 'jquery',
		'_':'underscore'
		// ...
	}),
	new MiniCssExtractPlugin()
  ],
  module: {
	rules: [
		{
			test: /\.html$/,
			loader: "underscore-template-loader",
			query: {
				engine: 'underscore',
			}
		},
		{
			test: /\.less$/,
			use: [ 
				MiniCssExtractPlugin.loader,
				'css-loader', 
				'less-loader'
			],			
		}					
	],
  },  
};
