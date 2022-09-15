const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  webpack: {
    configure: {
      output: {
        publicPath: 'http://localhost:4001/'
      },
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: 'devicesModule',
          filename: 'remoteEntry.js',
          exposes: {
            './DevicesBusiness': './src/exposed/business/index',
          },
        })
      ]
    }
  }
}