import { ForbiddenException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '../user/entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginUserDto } from '../user/dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async validateUser(loginUserDto: LoginUserDto): Promise<any> {
    const user = await this.userRepository.findOne({
      userId: loginUserDto.userId,
    });

    if (!user) {
      throw new ForbiddenException({
        statusCode: HttpStatus.FORBIDDEN,
        message: [`등록되지 않은 사용자입니다.`],
        error: 'Forbidden',
      });
    }

    const isMatch = await bcrypt.compare(loginUserDto.password, user.password);

    if (isMatch) {
      // if (user.role === 'student') {
      //   const student = await this.studentRepository.findOne({
      //     userId: loginUserDto.userId,
      //   });
      //   const { password, ...result } = user;
      //   return { ...result, ...student };
      // }

      const { password, ...result } = user;
      return result;
    } else {
      throw new ForbiddenException({
        statusCode: HttpStatus.FORBIDDEN,
        message: [`사용자 정보가 일치하지 않습니다.`],
        error: 'Forbidden',
      });
    }
  }

  async login(user: any) {
    const payload: any = {
      userId: user.userId,
      userName: user.userName,
      seq: user.seq,
      role: user.role,
    };
    // if (payload.role == 'student') {
    //   payload.studentId = user.studentId;
    //   payload.grade = user.grade;
    //   payload.class = user.class;
    // }
    console.log(payload);
    console.log(this.jwtService.sign(payload));
    return {
      accessToken: this.jwtService.sign(payload),
      userInfo: user,
    };
  }

  //로그인한 사용자 정보 추가하기
  async loadUserInfo(userId: string) {
    const findUser = await this.userRepository.findOne({
      userId: userId,
    });

    return findUser;
  }

  async logOut() {
    return {
      token: '',
      domain: 'localhost',
      path: '/',
      httpOnly: true,
      maxAge: 0,
    };
  }
}
