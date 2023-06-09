module.exports = {
  plugins:
    [
      'postcss-import',
      'postcss-nested',
      'postcss-flexbugs-fixes',
      [
        'postcss-preset-env',
        {
          autoprefixer: {
            flexbox: 'no-2009',
          },
          stage: 0,
          features: {
            'custom-properties': true,
          },
        },
      ],
    ]
}
