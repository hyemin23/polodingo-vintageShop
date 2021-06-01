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
exports.WishService = void 0;
const wish_entity_1 = require("./entities/wish.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let WishService = class WishService {
    constructor(wishRepository) {
        this.wishRepository = wishRepository;
    }
    async removeWishList(deleteWishDto) {
        const result = await typeorm_2.getConnection()
            .createQueryBuilder()
            .delete()
            .from(wish_entity_1.Wish)
            .where('userId = :userId', { userId: deleteWishDto.userId })
            .andWhere('productId = :productId', {
            productId: deleteWishDto.productId,
        })
            .execute();
        return result.affected;
    }
    async addWishList(createWishDto) {
        try {
            const result = __rest(await typeorm_2.getConnection()
                .createQueryBuilder()
                .insert()
                .into(wish_entity_1.Wish)
                .values({
                product: { id: createWishDto.productId },
                user: { id: createWishDto.userId },
            })
                .execute(), []);
            return result.raw.affectedRows;
        }
        catch (error) {
            console.error(error);
        }
    }
    async getWishList(userId) {
        console.log('service id : ', userId);
        try {
            const result = await typeorm_2.getRepository(wish_entity_1.Wish)
                .createQueryBuilder('wish')
                .leftJoinAndSelect('wish.product', 'product')
                .leftJoinAndSelect('wish.user', 'user')
                .where('wish.userId ', { userId })
                .andWhere('wish.detailId is NULL')
                .getMany();
            return result;
        }
        catch (error) {
            console.error(error);
        }
    }
};
WishService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(wish_entity_1.Wish)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], WishService);
exports.WishService = WishService;
//# sourceMappingURL=wish.service.js.map