const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

/* 抽取css为.css文件 */
const extract_fave_css = new ExtractTextWebpackPlugin('./fave.css');

module.exports = {
	entry: './src/index.js',
	plugins: [
		new CleanPlugin(['dist']),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		extract_fave_css
	],
	output: {
		filename: 'js/[name].bundle.js',
		path: __dirname + '/dist'
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './public'
	},
	module: {
		rules: [{
			test: /\.(woff|woff2|svg|eot|ttf)$/,
			use: [{
				loader: 'url-loader',
				options: {
					name: '[name].[ext]',
					outputPath: './'
				}
			}]
		}, {
			test: /\.(png|jpg|gif|jpeg)$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: './img/'
				}
			}]
		}, {
			test: /\.js$/,
			exclude: /node_modules/,
			use: [{
				loader: 'babel-loader',
				options: {
					presets: ['env', 'react']
				}
			}]
		}, {
			test: /\.css$/,
			use: extract_fave_css.extract(['css-loader'])
		}, {
			test: /\.scss$/,
			use: extract_fave_css.extract(['css-loader', 'sass-loader'])
		}]
	}
}