"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const hpp = require("hpp");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(hpp());
    app.use(helmet({ contentSecurityPolicy: false }));
    if (process.env.NODE_ENV === 'production') {
        app.enableCors({
            origin: 'http://polodingo.shop',
            credentials: true,
        });
    }
    else {
        app.enableCors({
            origin: true,
            credentials: true,
        });
    }
    app.use(cookieParser('vintage-info-user'));
    app.useStaticAssets(path_1.join(__dirname, '..', 'public'));
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map