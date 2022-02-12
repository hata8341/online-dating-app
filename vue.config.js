module.exports = {
  outputDir: 'docs',
  assetsDir: './',
  publicPath:
    process.env.NODE_ENV === 'production' ? '/online-dating-app/' : '/',
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
