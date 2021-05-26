// analyze 설정하는 방법 env파일에 없이 package.json에서
// cross-env ANALYZE=true NODE_ENV=production 이와 같이 설정하면 된다.
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
      // hidden source map 을 해줘야 배포 환경에서 소스코드 노출을 막음
      devtool: prod ? 'hidden-source-map' : 'eval',
      plugins: [
        ...config.plugins,
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/),
      ],
    };
  },

  // async rewrites() {
  //   return [
  //     {
  //       source: '/auth/:path*', // axios에서 호출할때 시작값 넣어주면 됨

  //       // 실제 요청할 api
  //       destination:
  //         'http://shopapi-env.eba-prpggjew.ap-northeast-2.elasticbeanstalk.com/:path*',
  //       baseUrl: false,
  //     },
  //     // 요청 uri가 추가되면 아래에 객체로 source, destination 추가
  //   ];
  // },
});
