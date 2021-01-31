const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        inlineSource: '.(vue|js|css)',
      }),
      new HtmlWebpackInlineSourcePlugin(),
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, '../gas'),
          ignore: ['.*']
        }
      ])
    ]
  }
};
