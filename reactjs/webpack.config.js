const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"] // (*)
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'pmp_bundle.js'
  },
  devServer: {
    contentBase: '/dist',
    inline: true,
    port: 8001
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};