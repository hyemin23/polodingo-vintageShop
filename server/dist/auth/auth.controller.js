"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const local_auth_guard_1 = require("./guards/local-auth.guard");
const auth_service_1 = require("./auth.service");
const jwt_decode_1 = require("jwt-decode");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async loadUserInfo(req) {
        console.log("loadUSerInfo 컨트롤러");
        if (req.headers && req.headers.cookie) {
            const cookieSub = req.headers.cookie;
            const splitCookie = cookieSub.split('=')[1];
            console.log("splitCookie", splitCookie);
            const cookie_Info = jwt_decode_1.default(splitCookie);
            const userId = cookie_Info['userId'];
            const result = await this.authService.loadUserInfo(userId);
            delete result.password;
            return result;
        }
    }
    async login(req, res) {
        console.log("login Controller");
        const { accessToken, userInfo } = await this.authService.login(req.user);
        delete userInfo.password;
        const data = {
            accessToken,
            userInfo,
        };
        res.cookie('vintage-auth-cookie', accessToken, { httpOnly: true });
        return data;
    }
    async logOut(res) {
        const _a = await this.authService.logOut(), { token } = _a, option = __rest(_a, ["token"]);
        res.cookie('vintage-auth-cookie', token, option);
    }
};
__decorate([
    common_1.Get('loadUserInfo'),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "loadUserInfo", null);
__decorate([
    common_1.UseGuards(local_auth_guard_1.LocalAuthGuard),
    common_1.Post('login'),
    __param(0, common_1.Request()), __param(1, common_1.Res({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    common_1.Post('logout'),
    __param(0, common_1.Res({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logOut", null);
AuthController = __decorate([
    common_1.Controller('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map