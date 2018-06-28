var path = require("path");

module.exports = {
	mode: 'development',
	entry: "./src/index.js",
	output:{
		path: path.resolve(__dirname, "./dist/js"),
		filename: "bundle.js"
	},
	resolve:{
		extensions: ['.js','.jsx','.json']
	},
	module:{
		rules:[
		{
			test: /\.(jsx|js)$/,
			include: [
				path.resolve(__dirname, 'src')
			],
			exclude: /node_modules/,
			use:{
				loader: 'babel-loader',
				options:{
					presets: ['react','env']
				}
			}
		},
		{
			test: /\.css$/,
			exclude: /node_modules/,
			loader: "style-loader!css-loader"
		}, 
		{
			test: /\.less?$/,
			loaders: [
			'style-loader',
			'css-loader',
			'less-loader?{"sourceMap":false}'
			],
			exclude: /node_modules/,
		},

		]
	},
}