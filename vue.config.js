module.exports = {
  outputDir: 'docs',
  publicPath: './',
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
