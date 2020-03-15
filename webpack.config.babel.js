let inputFileName
const outputFileName = 'input-format' + (process.env.WEBPACK_BUNDLE_TYPE === 'default' ? '' : '-' + process.env.WEBPACK_BUNDLE_TYPE)
let globalVariableName

switch (process.env.WEBPACK_BUNDLE_TYPE) {
  case 'default':
    inputFileName = 'index.commonjs'
    globalVariableName = 'InputFormat'
    break
  case 'react':
    inputFileName = 'react/index.commonjs'
    globalVariableName = 'InputFormat'
    break
}

module.exports =
{
  entry: './' + inputFileName + '.js',
  devtool: 'source-map',
  output:
  {
    path           : require('path').join(__dirname, '/bundle'),
    filename       : `${outputFileName}.min.js`,
    library        : globalVariableName,
    libraryTarget  : 'umd',
    umdNamedDefine : true
  },
  module:
  {
    rules:
    [{
      test    : /(\.js)$/,
      loader  : 'babel-loader',
      exclude : /node_modules/
    }]
  },
  externals:
  {
    // Use external version of React
    "react"     : "React",
    "react-dom" : "ReactDOM"
  }
}