const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = ['inline-source-map'].map((devtool) => ({
	mode: 'development',
	devServer: {
		contentBase: path.resolve(__dirname, 'src'),
		compress: true,
		host: '0.0.0.0',
		port: 8081,
		inline: true,
		hot: true,
		watchContentBase: true,
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
	},
	entry: ['/src/index.ts'],
	devtool,
	resolve: { extensions: ['.ts', '.js'] },
	module: {
		rules: [
				 {
				  test: /\.m?ts$/,
				  exclude: /node_modules/,
				  use: {
					loader: "babel-loader",
					options: {
					  presets: ['@babel/preset-env', '@babel/preset-typescript'],
					  plugins:[['@babel/plugin-proposal-decorators', {legacy: true}], ["@babel/plugin-proposal-class-properties", { "loose": true }],
					  ["@babel/plugin-proposal-private-methods", { "loose": true }]]
					}
				  }
				},
			/*{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: [/node_modules/, /dist/],
			},*/
			 {
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader,
					{
					  loader: 'css-loader'
					},
					{
					  loader: 'sass-loader',
					  options: {
						sourceMap: true,
						// options...
					  }
					}
				  ]
			  
			  
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'assets/',
							name: '[name].[ext]',
						},
					},
				],
			},
		],
    },
    resolve: { extensions: ['.ts', '.js'] },
	plugins: [
		new Dotenv({
			path: './.env.development'}),
		 /* new ModuleFederationPlugin({
			name:'user_create',
			filename:'remoteEntry.js',
			remotes:{},
			exposes:{
				'./App': './src/App'
			},
			shared:{} //possibly share Form Fields
		}),  */
		new HtmlWebpackPlugin({
			title: 'DEVCreate User',
			inject: true,
			filename: 'index.html',
			template: path.resolve(__dirname, './src/index.html'),
			hash: false,
			//chunks: ['app']
			
		}),
		
		new MiniCssExtractPlugin({
			filename: 'main.css',
		})
		
	],
	
}));
