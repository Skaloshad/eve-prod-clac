module.exports = {
    pluginOptions: {
      electronBuilder: {
        nodeIntegration: true,
        builderOptions: {
          win: {
            icon: 'public/Money_-_Flickr_-_AMagill.png',
            publish: ['github']
          }
        }
      }
    }
  }