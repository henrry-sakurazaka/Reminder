
const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/index.js', // エントリーポイント（プロジェクトのメインファイル）
  output: {
    path: path.resolve(__dirname, 'dist'), // 出力先ディレクトリ
    filename: 'bundle.js' // 出力ファイル名
  },
  module: {
    rules: [
      {
        test: /\.js$/, // ローダーを適用するファイルの正規表現
        exclude: /node_modules/, // ローダーを適用しないディレクトリの正規表現
        use: {
          loader: 'babel-loader' // Babelローダーを使用してJavaScriptファイルをトランスパイル
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './firebase-messaging-sw.js', to: './firebase-messaging-sw.mjs' }
      ]
    })
  ],
  mode: 'development', // 開発モードを指定
  // その他の設定...
//   mode: 'production', // プロダクションモードを指定本番環境用
//   // その他の設定...
 
};
