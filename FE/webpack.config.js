const path = require('path');
const PORT = 9000;
const webpack = require('webpack');
const mode = process.env.NODE_ENV || 'development';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode,

  entry: {
    main: path.join(__dirname, 'src', 'index.tsx'),
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    modules: ['node_modules'],
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: '> 0.25%, not dead',
                  useBuiltIns: 'usage',
                  corejs: { version: 3, proposals: true },
                },
              ],
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
            plugins: ['react-refresh/babel', 'styled-components'],
          },
        },
      },
      {
        test: /\.(sc|c|sa)ss$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|mp3|svg|webg)$/,
        use: ['file-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({ template: path.join(__dirname, 'public', 'index.html') }),
    new ReactRefreshWebpackPlugin(),
    new webpack.ProgressPlugin(),
    new webpack.ProvidePlugin({ React: 'react' }),
  ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  devServer: {
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
      progress: true,
    },
    compress: true,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    open: true,
    port: PORT,
  },
};
