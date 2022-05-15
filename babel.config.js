const {merge} = require('webpack-merge')

const config = api => {
  const isTest = api.env('test')

  console.log({isTest})

  const commonConfig = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            edge: '17',
            firefox: '60',
            chrome: '67',
            safari: '11.1',
          },
          useBuiltIns: 'usage',
          corejs: '3.6.4',
        },
      ],
    ],
  }

  if (isTest) {
    return merge(commonConfig)
  } else {
    return merge(commonConfig)
  }
}

module.exports = config
