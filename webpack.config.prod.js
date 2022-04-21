const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpack = require('clean-webpack-plugin');
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports =['source-map'].map((devtool) => ({
	mode: 'production',
	entry: ['/src/index.ts'],
	output: {
		filename: 'admin_create_user_1.0.0.js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: { extensions: ['.ts', '.js'] },
    devtool,
	module: {
		rules: [
				{
				  test: /\.m?ts$/,
				  exclude: /node_modules/,
				  use: {
					loader: "babel-loader",
					options: {
					  presets: ['@babel/preset-env', '@babel/preset-typescript'],
					  plugins:[['@babel/plugin-proposal-decorators', {legacy: true}], ["@babel/plugin-proposal-class-properties", { "loose": true }]]
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
						sourceMap: false,
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
			path: './.env'}),
		new ModuleFederationPlugin({
			name:'user_create',
			filename:'remoteEntry.js',
			remotes:{},
			exposes:{
				'./CreateUserFormModule': './src/CreateUserFormModule'
			},
			shared:{}
		}),
        new cleanWebpack.CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: process.env.APP_TITLE,
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
