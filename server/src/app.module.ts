import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { WishModule } from './wish/wish.module';
import { ReviewModule } from './review/review.module';
import * as Joi from 'joi';

// app.module.ts

@Module({
  imports: [
    AuthModule,
    UserModule,
    WishModule,
    ProductModule,
    ConfigModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.product',

      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('dev').required(),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.number().default(3360),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_DATABASE: Joi.string().required(),
      }),
    }),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE, //사용할 db 이름
      entities: ['src/**/**/*.entit'], //엔티티추가
      synchronize: true,
      autoLoadEntities: true, // 추가!!
      logging: true,
    }),

    ReviewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
