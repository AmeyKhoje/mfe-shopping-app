const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('./package.json');
const DotenvWebpackPlugin = require('dotenv-webpack');
const webpack = require('webpack');

module.exports = ({ mode } = { mode: 'production' }) => {
  return {
    mode,
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: `[name].[hash].js?v=${new Date().valueOf()}`,
      publicPath: 'http://localhost:3000/',
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname, './public'),
      },
      port: 3000,
      hot: true,
      open: true,
      compress: true,
      historyApiFallback: true,
      static: './public',
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.s[ac]ss?$/i,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|svg|jp?g|gif)$/,
          use: {
            loader: 'file-loader',
          },
        },
      ],
    },
    resolve: {
      extensions: ['.jsx', '.js', '.tsx', '.ts'],
      alias: {
        src: path.resolve(__dirname, 'src'),
        components: path.resolve(__dirname, 'src/components'),
        assets: path.resolve(__dirname, 'src/assets'),
      },
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'container',
        filename: 'remoteEntry.js',
        remotes: {
          auth: 'auth@http://localhost:3001/remoteEntry.js',
          shop: 'shop@http://localhost:3002/remoteEntry.js',
          cart: 'cart@http://localhost:3003/remoteEntry.js',
          utilityFunctions:
            'utilityFunctions@http://localhost:3010/remoteEntry.js',
          uiComponents: 'uiComponents@http://localhost:3011/remoteEntry.js',
        },
        exposes: {},
        shared: {
          react: {
            requiredVersion: packageJson.dependencies.react,
            singleton: true,
            eager: true,
          },
          'react-dom': {
            requiredVersion: packageJson.dependencies['react-dom'],
            singleton: true,
            eager: true,
          },
          'react-router-dom': {
            requiredVersion: packageJson.dependencies['react-router-dom'],
            singleton: true,
            eager: true,
          },
          sass: {
            requiredVersion: packageJson.dependencies.sass,
            singleton: true,
            eager: true,
          },
        },
      }),
      new HtmlWebpackPlugin({
        cache: true,
        chunks: true,
        filename: 'index.html',
        template: path.resolve(__dirname, 'public', 'index.html'),
      }),
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
      new DotenvWebpackPlugin({
        path: './.env',
      }),
    ],
    optimization: {
      minimize: true,
      minimizer: [
        '...',
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
            },
            format: {
              comments: false,
            },
          },
          extractComments: false,
        }),
      ],
    },
  };
};
