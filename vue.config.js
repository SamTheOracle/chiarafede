module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    themeColor: '#FFFFF',
    name: 'ChiaraEFede',
    manifestOptions: {
      start_url: '/',
      background_color: '#FFFFF',
      short_name: 'CeF',
      icons: [
        {
          src: './img/icons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: './img/icons/maskable_icon.png',
          sizes: '196x196',
          typw: 'image/png',
          purpose: 'maskable' // <-- New property value `"maskable"`
        }
      ]
    },
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: './src/service-worker.js'
    }
  },
  chainWebpack: config => {
    config.plugin('VuetifyLoaderPlugin').tap(args => [{
      size: 12, // Use higher-resolution previews
      sharp: true // Use sharp instead of ImageMagick
    }])
  }
}
