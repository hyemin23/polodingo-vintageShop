export const backUrl =
  // 배포모드일 경우 aws ec2의 backend IP를 입력해주자
  process.env.NODE_ENV === 'production'
    ? 'http://api.polodingo.shop'
    : 'http://localhost:3000/';
