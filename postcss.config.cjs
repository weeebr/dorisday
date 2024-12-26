module.exports = {
  plugins: [
    require('postcss-nested'),
    require('postcss-preset-env')({
      features: {
        'nesting-rules': true,
      },
      stage: 0,
    }),
    require('autoprefixer')({
      overrideBrowserslist: [
        'last 2 Chrome versions',
        'last 2 Firefox versions',
        'last 2 Edge versions',
        'Safari >= 12', // Include Safari for specific properties that need prefixing
      ],
    }),
  ],
};
