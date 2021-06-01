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
exports.ReviewService = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const review_entity_1 = require("./entity/review.entity");
const typeorm_2 = require("typeorm");
const multerOPtions_1 = require("./../multer/multerOPtions");
const common_1 = require("@nestjs/common");
let ReviewService = class ReviewService {
    constructor(reviewRepository) {
        this.reviewRepository = reviewRepository;
    }
    async loadRivew() {
        const result = await this.reviewRepository.find();
        return result;
    }
    uploadFiles(files, userId, reviewTitle, reviewContent) {
        const generatedFiles = [];
        for (const file of files) {
            generatedFiles.push(multerOPtions_1.createImageURL(file));
            typeorm_2.getConnection()
                .createQueryBuilder()
                .insert()
                .into(review_entity_1.Review)
                .values({
                user: userId,
                reviewTitle: reviewTitle,
                reviewContent: reviewContent,
                src: multerOPtions_1.createImageURL(file),
            })
                .execute();
        }
        return generatedFiles;
    }
};
ReviewService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(review_entity_1.Review)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ReviewService);
exports.ReviewService = ReviewService;
//# sourceMappingURL=review.service.js.map