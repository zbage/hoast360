var webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'hoast360.bundle.js',
    library: 'hoast360',
    libraryTarget: 'var' // import via <script>
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js'],
  }
};
