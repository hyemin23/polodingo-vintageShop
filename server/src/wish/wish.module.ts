import { Wish } from './entities/wish.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { WishService } from './wish.service';
import { WishController } from './wish.controller';

//forFeature()메서드를 사용하여 현재 범위에 등록 된 저장소를 정의합니
@Module({
  imports: [TypeOrmModule.forFeature([Wish])],
  providers: [WishService],
  controllers: [WishController],
})
export class WishModule {}
