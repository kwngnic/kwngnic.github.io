const path = require('path');
const HWP = require('html-webpack-plugin');
module.exports = {
	entry: path.join(__dirname, '/src/index.js'),
	output: {
		filename: 'build.js',
		path: path.join(__dirname, '/dist')},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|svg|jpg|gif|pdf|zip)$/,
				loader: 'file-loader',
				options: {esModule: false}
			}
		]
	},

	plugins: [
		new HWP(
				{template: path.join(__dirname, '/src/index.html')}
			)
	]
}
