const path = required('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.export = {
  mode: 'development',
  entry: './src/main/index.tsx',
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.join(__dirname, 'src'),
    }
  },
  devServer: {
    contentBase: './public',
    writeToDisk: true,
    historyApiFallback: true
  },
  externals: {
    react: 'React',
    'react-dorm': 'ReactDOM'
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}