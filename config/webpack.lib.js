const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin') //installed via npm
const buildPath = path.resolve(__dirname, '../', 'library')

module.exports = function(api) {
  return {
    devtool: false,
    optimization: {
      minimize: true
    },
    entry: './src/tune-in.js',
    output: {
      filename: 'dynamic-tune-in.js',
      library: 'TuneIn',
      libraryTarget: 'window',
      libraryExport: 'default',
      path: buildPath
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    ie: '11'
                  },
                  forceAllTransforms: true
                }
              ]
            ]
          }
        }
      ]
    },
    plugins: [new CleanWebpackPlugin()]
  }
}
