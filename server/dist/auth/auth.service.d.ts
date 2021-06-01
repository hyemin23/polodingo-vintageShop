import { JwtService } from '@nestjs/jwt';
import { User } from '../user/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginUserDto } from '../user/dto/login-user.dto';
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    validateUser(loginUserDto: LoginUserDto): Promise<any>;
    login(user: any): Promise<{
        accessToken: string;
        userInfo: any;
    }>;
    loadUserInfo(userId: string): Promise<User>;
    logOut(): Promise<{
        token: string;
        domain: string;
        path: string;
        httpOnly: boolean;
        maxAge: number;
    }>;
}
