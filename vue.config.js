module.exports = {
  outputDir: 'docs',
  publicPath: '/online-dating-app',
  assetsDir: './',
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    performance: {
    hints: false,
    maxAssetSize: 270000,
    maxEntrypointSize: 700000,
  }
  },
}
