const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  compress: true,
  webpack(config, { webpack }) {
    const prod = process.env.NODE_ENV === 'production';
    return {
      ...config,
      mode: prod ? 'production' : 'development',
      devtool: prod ? 'hidden-source-map' : 'eval',
      plugins: [
        ...config.plugins,
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/),
      ],
    };
  },

  async rewrites() {
    return [
      {
        source: '/:path*', // axios에서 호출할때 시작값 넣어주면 됨

        // 실제 요청할 api
        destination:
          'http://shopapi-env.eba-prpggjew.ap-northeast-2.elasticbeanstalk.com/:path*',
        baseUrl: false,
      },
      // 요청 uri가 추가되면 아래에 객체로 source, destination 추가
    ];
  },
});
