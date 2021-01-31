const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')

module.exports = {
  publicPath: '/public',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].template = './public/index.html'
        args[0].inlineSource = '.(vue|js|css)'
        return args
      })
  },
  configureWebpack: {
    plugins: [
      new HtmlWebpackInlineSourcePlugin(),
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, './gas'),
          ignore: ['.*']
        }
      ])
    ]
  }
};
