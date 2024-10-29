const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    script: './src/script.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'src')
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      terserOptions: {
        mangle: false, // 混淆变量名
        compress: {
          // drop_console: true, // 去掉 console 语句
        },
      },
      extractComments: true, // 去掉注释
    })],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devServer: {
    static: path.join(__dirname), // 服务的文件目录
    compress: true, // 是否启用 gzip 压缩
    port: 40000, // 端口号
    open: false, // 自动打开浏览器
  },
};
