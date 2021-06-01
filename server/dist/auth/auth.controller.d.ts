import { AuthService } from './auth.service';
import { Response } from 'express';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    loadUserInfo(req: any): Promise<import("../user/entities/user.entity").User>;
    login(req: any, res: any): Promise<{
        accessToken: string;
        userInfo: any;
    }>;
    logOut(res: Response): Promise<void>;
}
