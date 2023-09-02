const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const packageJson = require('./package.json');

module.exports = ({ mode } = { mode: 'production' }) => {
  return {
    mode,
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: `[name].[hash].js?v=${new Date().valueOf()}`,
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname, './public'),
      },
      port: 3011,
      hot: true,
      // open: true,
      compress: true,
      historyApiFallback: true,
      static: './public',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
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
        {
          test: /\.(woff|woff2|eot|ttf)$/,
          use: {
            loader: 'url-loader',
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
        name: 'uiComponents',
        filename: 'remoteEntry.js',
        remotes: {
          utilityFunctions:
            'utilityFunctions@http://localhost:3010/remoteEntry.js',
        },
        exposes: {
          './components': './src/components',
          './ChakraTheme': './src/chakra-config/ChakraTheme.ts',
          './pages': './src/pages',
          './layouts': './src/layouts',
          './security': './src/security',
        },
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
