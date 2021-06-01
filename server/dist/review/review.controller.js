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
exports.ReviewController = void 0;
const review_service_1 = require("./review.service");
const multerOPtions_1 = require("./../multer/multerOPtions");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
let ReviewController = class ReviewController {
    constructor(reviewService) {
        this.reviewService = reviewService;
    }
    async loadReview() {
        return this.reviewService.loadRivew();
    }
    uploadFiles(files, userId, reviewTitle, reviewContent) {
        const uploadedFiles = this.reviewService.uploadFiles(files, userId, reviewTitle, reviewContent);
        return {
            status: 200,
            messaga: '파일 업로드를 성공하였습니다',
            data: {
                files: uploadedFiles,
            },
        };
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "loadReview", null);
__decorate([
    common_1.UseInterceptors(platform_express_1.FilesInterceptor('images', null, multerOPtions_1.multerOptions)),
    common_1.Post('/upload'),
    __param(0, common_1.UploadedFiles()),
    __param(1, common_1.Body('userId')),
    __param(2, common_1.Body('reviewTitle')),
    __param(3, common_1.Body('reviewContent')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Number, String, String]),
    __metadata("design:returntype", void 0)
], ReviewController.prototype, "uploadFiles", null);
ReviewController = __decorate([
    common_1.Controller('review'),
    __metadata("design:paramtypes", [review_service_1.ReviewService])
], ReviewController);
exports.ReviewController = ReviewController;
//# sourceMappingURL=review.controller.js.map