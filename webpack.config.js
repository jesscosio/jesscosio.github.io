const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
      filename: 'main.js',
      publicPath: 'dist'
    },
    devServer: {
      historyApiFallback: true
    },
    devtool: 'inline-source-map',
    module: {
      rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          },
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        },
        {
          test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
          loader: 'url-loader?limit=100000',
          options: {
            esModule: false,
          }
        }
      ]
    },
    plugins: [
      // make sure to include the plugin!
      new VueLoaderPlugin()
    ]
};