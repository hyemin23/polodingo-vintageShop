import { Product } from './../product/entities/product.entity';
import { Wish } from './../wish/entities/wish.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Injectable } from '@nestjs/common';
import { Repository, getConnection, createQueryBuilder } from 'typeorm';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order)
        private orderRepository: Repository<Order>,
    ) { }
    async postDetailOrder(body: CreateOrderDto) {

        const userId = body.userId;
        const result = await this.orderRepository.save(body);
        
        if (result.id) {
        

            //주문디테일 번호 넣어줌
            const updateResult = await getConnection()
            .createQueryBuilder()
            .update(Wish)
            .set({
                detailId: result.id
            })
            .where("userId =:userId", {userId})
            .andWhere("detailId is NULL")
            .execute();
          

            const productQuery = await createQueryBuilder('Wish')
                .leftJoinAndSelect('Wish.product', 'product'
                    , 'product.productCount =:productCount', { productCount: 1 })
                .select('product.id')
                .where('Wish.userId',{userId}).execute();
            
            
            console.log("==================")
            let updateId = '';
            for (let a = 0; a < productQuery.length; a++){
                if (a < productQuery.length) {
                    updateId += productQuery[a].product_id+",";
                 }
            }
            const newUpdateId = updateId.slice(0, -1);
            console.log("수량 업데이트칠 상품들 : " , newUpdateId);
            console.log("==================")


            //상품 테이블의 상품 수량 0개로 카운트
            const updateProduct = await getConnection()
                .createQueryBuilder()
                .update(Product)
                .set({
                    productCount: 0
                })
                //whereInIds와 row쿼리는 동작이 달라짐 In이냐 OR 이냐에 갈림
                // .whereInIds(newUpdateId)
                .where("id IN (:id)", { id: newUpdateId })
                .execute();
            
            console.log("상품 수량 업데이트 쿼리 ", updateProduct);
            

            const message = {
                status: 201
                , resultId: result.id
                , updateRow : updateResult.affected
                , message: '등록되었습니다'
            }
            return message;
        }
        else {
            const message = {
                status: 201
                ,message : '등록 실패!'
            }
            return message
        }
    }
}
