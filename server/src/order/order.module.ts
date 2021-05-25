import { Wish } from './../wish/entities/wish.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { Order } from './entities/order.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Order,Wish])],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
