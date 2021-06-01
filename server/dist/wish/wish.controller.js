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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishController = void 0;
const create_wish_dto_1 = require("./dto/create-wish.dto");
const wish_service_1 = require("./wish.service");
const common_1 = require("@nestjs/common");
let WishController = class WishController {
    constructor(wishService) {
        this.wishService = wishService;
    }
    getWishList(id) {
        const result = this.wishService.getWishList(id);
        return result;
    }
    async addWishList(createWishDto) {
        const result = await this.wishService.addWishList(createWishDto);
        return result;
    }
    removeWishList(deleteWishDto) {
        console.log('deleteWish Dto remove 들어옴');
        const result = this.wishService.removeWishList(deleteWishDto);
        return result;
    }
};
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], WishController.prototype, "getWishList", null);
__decorate([
    common_1.Post('add'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_wish_dto_1.CreateWishDto]),
    __metadata("design:returntype", Promise)
], WishController.prototype, "addWishList", null);
__decorate([
    common_1.Delete('remove'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_wish_dto_1.CreateWishDto]),
    __metadata("design:returntype", void 0)
], WishController.prototype, "removeWishList", null);
WishController = __decorate([
    common_1.Controller('wish'),
    __metadata("design:paramtypes", [wish_service_1.WishService])
], WishController);
exports.WishController = WishController;
//# sourceMappingURL=wish.controller.js.map