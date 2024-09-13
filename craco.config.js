const path = require('path');
const CracoAlias = require('craco-alias');
const TerserPlugin = require('terser-webpack-plugin');

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'options',
        aliases: {
          '@': './src',
          '@root': './',
          '@pages': './src/pages',
          '@shared': './src/shared',
          '@components': './src/shared/components',
          '@ui-components': './src/shared/ui-components',
          '@styles': './src/shared/styles',
        },
      },
    },
  ],
  webpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
      ],
    },
    alias: {
      '@root': resolvePath('./'),
      '@pages': resolvePath('./src/pages'),
      '@shared': resolvePath('./src/shared'),
      '@components': resolvePath('./src/shared/components'),
      '@ui-components': resolvePath('./src/shared/ui-components'),
      '@styles': resolvePath('./src/shared/styles'),
    },
    optimization: {
      minimizer: [new TerserPlugin({})],
    },
  },
};
