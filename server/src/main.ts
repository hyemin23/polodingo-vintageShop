import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as hpp from 'hpp';
import * as helmet from 'helmet';
import * as cookieParser from 'cookie-parser';
async function bootstrap() {
  // const app = await NestFactory.create(AppModule, { cors: true });
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

 app.use(hpp());
  app.use(helmet({ contentSecurityPolicy: false }));

  if (process.env.NODE_ENV === 'production') {
    app.enableCors({
      // origin: true,
      origin: 'http://polodingo.shop',
      credentials: true,
    });
  } else {
    app.enableCors({
      // origin: true,
      origin: true,
      credentials: true,
    });
  }

  
  app.use(cookieParser('vintage-info-user'));

  // app.enableCors();
  // app.enableCors();

  //파일업로드를 위한 설정
  // app.useStaticAssets(path.join(__dirname, '..', 'uploads'));
  // app.use('/public', express.static(path.join(__dirname, '../public')));
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
