export const backUrl =
  // 배포모드일 경우 aws ec2의 backend IP를 입력해주자
  process.env.NODE_ENV === 'production'
    ? 'http://3.37.52.147'
    : 'http://localhost:3000/';
