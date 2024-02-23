const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = {
  // 기존 웹팩 설정
  mode: 'production',
  output: {
    filename: 'bundle.js',
  },
  plugins: [
    // 기존 플러그인 설정
    new CompressionWebpackPlugin({
      algorithm: 'gzip',
      test: /\.(ts|tsx|js|css|html)$/,
      threshold: 10240, // 압축을 적용할 파일 크기의 최소값 (10KB)
      minRatio: 0.8, // 압축률이 80% 이상일 경우에만 압축을 적용
    }),
  ],
};