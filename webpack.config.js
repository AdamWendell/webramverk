const path = require('path')

module.exports = {
  context: __dirname,
  entry: './app/App.jsx',
  output: {
    path: path.join(__dirname, '/public/js/'),
    filename: 'bundle.min.js',
    publicPath: '/js/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    // preLoaders: [
    //   {
    //     test: /\.jsx?$/,
    //     loader: 'eslint-loader',
    //     exclude: /node_modules/
    //   }
    // ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: [
          'babel-loader',
          __dirname + '/lib/pre-loader'
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
}
