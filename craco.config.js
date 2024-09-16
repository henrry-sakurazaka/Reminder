const webpack = require('webpack'); // 追加

module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        webpackConfig.resolve.fallback = {
          ...webpackConfig.resolve.fallback,
          process: require.resolve('process/browser'),
          crypto: require.resolve('crypto-browserify'),
          stream: require.resolve('stream-browserify'),
          https: require.resolve('https-browserify'),
          http: require.resolve('stream-http'),
          os: require.resolve('os-browserify/browser'),
          url: require.resolve('url'),
          zlib: require.resolve('browserify-zlib'),
          querystring: require.resolve('querystring-es3'),
          buffer: require.resolve('buffer/'),
          path: require.resolve('path-browserify'),
          fs: false,
          net: false,
          tls: false,
          'child_process': false,
        };
  
        webpackConfig.plugins = [
          ...webpackConfig.plugins,
          new webpack.ProvidePlugin({
            process: 'process/browser',
            // Buffer: ['buffer', 'Buffer'],
          }),
          new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
            'process.env.REACT_APP_FIREBASE_API_KEY': JSON.stringify(process.env.REACT_APP_FIREBASE_API_KEY),
            'process.env.REACT_APP_FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.REACT_APP_FIREBASE_AUTH_DOMAIN),
            'process.env.REACT_APP_FIREBASE_PROJECT_ID': JSON.stringify(process.env.REACT_APP_FIREBASE_PROJECT_ID),
            'process.env.REACT_APP_FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.REACT_APP_FIREBASE_STORAGE_BUCKET),
            'process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID),
            'process.env.REACT_APP_FIREBASE_APP_ID': JSON.stringify(process.env.REACT_APP_FIREBASE_APP_ID),
          }),
        ];

          // HMRを無効にする設定を追加
        if (process.env.NODE_ENV === 'development') {
          webpackConfig.devServer = {
            ...webpackConfig.devServer,
            hot: false, // HMRを無効にする
          };
        }

  
        return webpackConfig;
      },
    },
  };
  