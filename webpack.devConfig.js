var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var portfinder = require('portfinder')
var commonConfig = require('./webpack.config.js')

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = commonConfig.devServer.port
  portfinder.getPort((err, port) => {
    if (err) reject(err)
    else {
      commonConfig.devServer.port = port
      commonConfig.plugins.push(
        new FriendlyErrorsPlugin({
          clearConsole: true,
          compilationSuccessInfo: {
            messages: [`local: http://localhost:${port}`],
          },
          onErrors: () => {
            console.log('打包失败')
          },
        }),
      )
      resolve(commonConfig)
    }
  })
})
