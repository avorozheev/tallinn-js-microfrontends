const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  webpack: {
    configure: {
      output: {
        publicPath: 'http://localhost:4000/'
      },
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: 'dashboardModule',
          filename: 'remoteEntry.js',
          exposes: {
            './DashboardBusiness': './src/exposed/business/index',
            './DashboardProvider': './src/exposed/provider/index',
          },
        })
      ]
    }
  }
}