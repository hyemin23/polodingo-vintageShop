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
exports.OrderService = void 0;
const product_entity_1 = require("./../product/entities/product.entity");
const wish_entity_1 = require("./../wish/entities/wish.entity");
const typeorm_1 = require("@nestjs/typeorm");
const order_entity_1 = require("./entities/order.entity");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("typeorm");
let OrderService = class OrderService {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async postDetailOrder(body) {
        console.log("zzzzzzzzzzzzzz", body);
        const userId = body.userId;
        const result = await this.orderRepository.save(body);
        if (result.id) {
            const updateResult = await typeorm_2.getConnection()
                .createQueryBuilder()
                .update(wish_entity_1.Wish)
                .set({
                detailId: result.id
            })
                .where("userId =:userId", { userId })
                .andWhere("detailId is NULL")
                .execute();
            const productQuery = await typeorm_2.createQueryBuilder('Wish')
                .leftJoinAndSelect('Wish.product', 'product')
                .select('product.id')
                .where('Wish.userId =:userId', { userId })
                .andWhere('product.productCount =:productCount', { productCount: 1 })
                .execute();
            console.log("productQuery", productQuery);
            let updateId = [];
            if (!!productQuery) {
                for (let a = 0; a < productQuery.length; a++) {
                    if (a < productQuery.length) {
                        if (productQuery[a] !== null) {
                            updateId.push(productQuery[a].product_id);
                        }
                    }
                }
            }
            console.log("수량 업데이트칠 상품들 : ", updateId);
            console.log("==================");
            const updateProduct = await typeorm_2.getConnection()
                .createQueryBuilder()
                .update(product_entity_1.Product)
                .set({
                productCount: 0
            })
                .where(`id IN (:...id)`, { id: updateId })
                .execute();
            console.log("상품 수량 업데이트 쿼리 ", updateProduct);
            const message = {
                status: 201,
                resultId: result.id,
                updateRow: updateResult.affected,
                message: '등록되었습니다'
            };
            return message;
        }
        else {
            const message = {
                status: 201,
                message: '등록 실패!'
            };
            return message;
        }
    }
};
OrderService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(order_entity_1.Order)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map