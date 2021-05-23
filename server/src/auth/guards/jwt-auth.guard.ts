import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './../../common/constants';
import { HttpError } from 'http-errors';
import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  //   canActivate(context: ExecutionContext): boolean {
  //     console.log('jwt Auth Guard  canActivate 들어옴');
  //     const request = context.switchToHttp().getRequest();
  //     console.log(request.headers);
  //     const { authorization } = request.headers;
  //     // Remove Bearer from string
  //     const token = authorization.replace(/^Bearer\s+/, '');
  //     console.log(token);
  //     if (token === undefined) {
  //       console.log('토큰 없음');
  //       //  throw new HttpError(401, '토큰이 없습니다');
  //     }
  //     request.user = this.validateToken(token);
  //     // Add your custom authentication logic here
  //     // for example, call super.logIn(request) to establish a session.
  //     return true;
  //   }
  //   public validateToken(token: string): string {
  //     try {
  //       console.log('validateToken', token);
  //       const verify = (token, jwtConstants.secret);
  //       console.log('verify', verify);
  //       return verify.toString();
  //     } catch (error) {
  //       console.error(error);
  // switch (error.message) {
  // 토큰에 대한 오류를 판단합니다.
  // case 'INVALID_TOKEN':
  // case 'TOKEN_IS_ARRAY':
  // case 'NO_USER':
  //   throw new HttpError(401, '유효하지 않은 토큰입니다.');
  // case 'EXPIRED_TOKEN':
  //   throw new HttpError(410, '토큰이 만료되었습니다.');
  // default:
  //   throw new HttpError(500, '서버 오류입니다.');
  //   }
  // }
  //   }
}
