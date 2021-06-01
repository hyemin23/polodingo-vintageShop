"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createImageURL = exports.multerOptions = void 0;
const multer_1 = require("multer");
const fs_1 = require("fs");
const uuid_1 = require("./uuid");
const common_1 = require("@nestjs/common");
exports.multerOptions = {
    fileFilter: (request, file, callback) => {
        if (file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
            callback(null, true);
        }
        else {
            callback(new common_1.HttpException('지원하지 않는 이미지 형식입니다.', 400), false);
        }
    },
    storage: multer_1.diskStorage({
        destination: (request, file, callback) => {
            const uploadPath = 'public';
            if (!fs_1.existsSync(uploadPath)) {
                fs_1.mkdirSync(uploadPath);
            }
            callback(null, uploadPath);
        },
        filename: (request, file, callback) => {
            callback(null, uuid_1.default(file));
        },
    }),
};
const createImageURL = (file) => {
    const serverAddress = 'http://localhost:3000';
    return `${serverAddress}/${file.filename}`;
};
exports.createImageURL = createImageURL;
//# sourceMappingURL=multerOPtions.js.map