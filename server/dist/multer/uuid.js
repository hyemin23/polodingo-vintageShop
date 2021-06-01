"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const uuid_1 = require("uuid");
exports.default = (file) => {
    const uuidPath = `${uuid_1.v4()} ${path_1.extname(file.originalname)}`;
    return uuidPath;
};
//# sourceMappingURL=uuid.js.map