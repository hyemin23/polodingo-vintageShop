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
exports.ProductService = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const product_entity_1 = require("./entities/product.entity");
const typeorm_2 = require("typeorm");
const common_1 = require("@nestjs/common");
let ProductService = class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async getLoadProductId(productId) {
        console.log("service productId : ", productId);
        const idSelect = await this.productRepository.find({
            where: {
                id: productId
            }
        });
        console.log("idSelect", idSelect);
        return idSelect;
    }
    async getLoadProductTitle(productTitle) {
        const result = await typeorm_2.getConnection()
            .createQueryBuilder()
            .select()
            .from('Product', 'product')
            .where('productName like :name', { name: `%${productTitle}%` })
            .execute();
        console.log("like검색", result);
        return result;
    }
    async getLoadProduct(productType) {
        if (productType === 'all') {
            const result = await this.productRepository.find({
                order: {
                    productType: "ASC"
                }
            });
            return result;
        }
        else if (productType === 'outer') {
            const result = await this.productRepository.find({
                where: {
                    productType: 2,
                },
            });
            return result;
        }
        else if (productType === 'top') {
            const result = await this.productRepository.find({
                where: {
                    productType: 3,
                },
            });
            return result;
        }
        else if (productType === 'pants') {
            const result = await this.productRepository.find({
                where: {
                    productType: 4,
                },
            });
            return result;
        }
        else if (productType === 'acc') {
            const result = await this.productRepository.find({
                where: {
                    productType: 5,
                },
            });
            return result;
        }
        else {
            return new common_1.HttpException('존재하지 않는 상품코드입니다.', 400);
        }
    }
};
ProductService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map