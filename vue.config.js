module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    themeColor: '#F7F9E4',
    name: 'GiovannaeGiacomo',
    manifestOptions: {
      start_url: '/',
      background_color: '#F7F9E4',
      short_name: 'GeG',
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
