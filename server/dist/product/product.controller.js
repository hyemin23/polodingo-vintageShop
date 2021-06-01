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
exports.ProductController = void 0;
const product_service_1 = require("./product.service");
const common_1 = require("@nestjs/common");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async getLoadProduct(productType) {
        console.log("productType", productType);
        const result = await this.productService.getLoadProduct(productType);
        return result;
    }
    async getLoadProductPathId(productTitle) {
        console.log("productTitle", productTitle);
        const result = await this.productService.getLoadProductTitle(productTitle.id);
        return result;
    }
    async getLoadProductId(productId) {
        console.log(productId);
        const result = await this.productService.getLoadProductId(productId);
        return result;
    }
};
__decorate([
    common_1.Get('load/:productType'),
    __param(0, common_1.Param('productType')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getLoadProduct", null);
__decorate([
    common_1.Get('search/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getLoadProductPathId", null);
__decorate([
    common_1.Get('load/productId/:productId'),
    __param(0, common_1.Param('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getLoadProductId", null);
ProductController = __decorate([
    common_1.Controller('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map