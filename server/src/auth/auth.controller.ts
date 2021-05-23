import {
  Controller,
  Get,
  Post,
  Req,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';
import jwt_decode from 'jwt-decode';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('loadUserInfo')
  async loadUserInfo(@Req() req) {
    if (req.headers && req.headers.cookie) {
      const cookieSub = req.headers.cookie;
      const splitCookie = cookieSub.split('=')[1];
      const cookie_Info = jwt_decode(splitCookie);

      const userId = cookie_Info['userId'];

      //userId로 정보를 찾아서 객체로 정보를 돌려주면
      //프론트단에서 정보를 추가해준다. 근데 이 정보를 전역적으로 관리를 해야하는데.
      //프론트 헤더레이아웃쪽에서 관리를 해줘야하나?
      const result = await this.authService.loadUserInfo(userId);
      delete result.password;

      return result;
    }
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req, @Res({ passthrough: true }) res) {
    const { accessToken, userInfo } = await this.authService.login(req.user);
    delete userInfo.password;

    const data = {
      accessToken,
      userInfo,
    };

    //인증받은 user 기반으로 쿠키 설정
    res.cookie('vintage-auth-cookie', accessToken, { httpOnly: true });
    return data;
  }

  //로그아웃시 해당 토큰 이름을 지우는 방향으로 ?
  @Post('logout')
  async logOut(@Res({ passthrough: true }) res: Response) {
    const { token, ...option } = await this.authService.logOut();

    res.cookie('vintage-auth-cookie', token, option);
  }
}
