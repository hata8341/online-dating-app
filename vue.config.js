module.exports = {
  outputDir: 'docs',
  assetsDir: './',
  publicPath: './',
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
