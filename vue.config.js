module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    themeColor: '#FFFFFF',
    name: 'ChiaraEFede',
    manifestOptions: {
      start_url: '/',
      background_color: '#FFFFFF',
      short_name: 'CeF',
      icons: [
        {
          src: './img/icons/icon-72x72.png',
          sizes: '72x72',
          type: 'image/png'
        },
        {
          src: './img/icons/icon-96x96.png',
          sizes: '96x96',
          type: 'image/png'
        },
        {
          src: './img/icons/icon-128x128.png',
          sizes: '128x128',
          type: 'image/png'
        },
        {
          src: './img/icons/icon-144x144.png',
          sizes: '144x144',
          type: 'image/png'
        },
        {
          src: './img/icons/icon-152x152.png',
          sizes: '152x152',
          type: 'image/png'
        },
        {
          src: './img/icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: './img/icons/icon-384x384.png',
          sizes: '384x384',
          type: 'image/png'
        },
        {
          src: './img/icons/icon-192x192.png',
          sizes: '192x192',
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
