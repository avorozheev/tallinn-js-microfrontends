const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  webpack: {
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: 'hostBusiness',
          filename: 'remoteEntry.js',
          remotes: {
            dashboardModule: 'dashboardModule@http://localhost:4000/remoteEntry.js',
            devicesModule: 'devicesModule@http://localhost:4001/remoteEntry.js',
          }
        })
      ]
    }
  }
}