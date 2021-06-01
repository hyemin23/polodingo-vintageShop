"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishModule = void 0;
const wish_entity_1 = require("./entities/wish.entity");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const wish_service_1 = require("./wish.service");
const wish_controller_1 = require("./wish.controller");
let WishModule = class WishModule {
};
WishModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([wish_entity_1.Wish])],
        providers: [wish_service_1.WishService],
        controllers: [wish_controller_1.WishController],
    })
], WishModule);
exports.WishModule = WishModule;
//# sourceMappingURL=wish.module.js.map