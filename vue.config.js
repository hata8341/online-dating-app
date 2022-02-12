module.exports = {
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/online-dating-app/'
    : '/',
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
