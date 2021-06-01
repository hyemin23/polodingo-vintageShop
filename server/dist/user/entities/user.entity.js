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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
const review_entity_1 = require("./../../review/entity/review.entity");
const wish_entity_1 = require("./../../wish/entities/wish.entity");
const typeorm_2 = require("typeorm");
let User = class User extends typeorm_2.BaseEntity {
};
__decorate([
    typeorm_2.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    typeorm_2.Column({ length: 10, unique: true }),
    __metadata("design:type", String)
], User.prototype, "userId", void 0);
__decorate([
    typeorm_2.Column({ length: 200, nullable: false }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typeorm_2.Column({ length: 40 }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typeorm_2.Column(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    typeorm_2.Column(),
    __metadata("design:type", String)
], User.prototype, "roleType", void 0);
__decorate([
    typeorm_1.OneToOne(() => wish_entity_1.Wish, (wish) => wish.id),
    __metadata("design:type", wish_entity_1.Wish)
], User.prototype, "wish", void 0);
__decorate([
    typeorm_2.OneToMany(() => review_entity_1.Review, (review) => review.id, {
        cascade: ['insert', 'update'],
    }),
    __metadata("design:type", review_entity_1.Review)
], User.prototype, "review", void 0);
User = __decorate([
    typeorm_2.Entity()
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map