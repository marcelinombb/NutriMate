module.exports = function (api) {
  api.cache(true)
  return {
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            // This has to be mirrored in tsconfig.json
            icons: './assets/icons/index',
            images: './assets/images/index'
          }
        }
      ]
    ],
    presets: ['babel-preset-expo']
  }
}
