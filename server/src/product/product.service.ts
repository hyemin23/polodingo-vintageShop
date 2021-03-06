import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository, getConnection } from 'typeorm';
import { Injectable, HttpException } from '@nestjs/common';

@Injectable()
export class ProductService {
 
 
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) { }
  

   async getLoadProductId(productId) {
     console.log("service productId : ", productId);

     const idSelect = await this.productRepository.find({
       where: {
         id: productId
       }
     });
     
     console.log("idSelect", idSelect);
    return idSelect;

  }


  async getLoadProductTitle(productTitle: string) {

   const result = await getConnection()
     .createQueryBuilder()
     .select()
     .from('Product', 'product')
     .where('productName like :name', { name: `%${productTitle}%` })
     .execute();
   
   console.log("like검색",result);
   return result;

 }
  
  async getLoadProduct(productType: string) {
    // all일 경우에는 날짜가 제일 최신인애들 기준으로 보여줘야함
    if (productType === 'all') {
      const result = await this.productRepository.find({
        
        order: {
          productType : "ASC"
        }
      });
      return result;
    } else if (productType === 'outer') {
      const result = await this.productRepository.find({
        where: {
          productType: 2,
          
        },
      });
      return result;
    } else if (productType === 'top') {
      const result = await this.productRepository.find({
        where: {
          productType: 3,
        },
      });
      return result;
    } else if (productType === 'pants') {
      const result = await this.productRepository.find({
        where: {
          productType: 4,
        },
      });
      return result;
    }
      else if (productType === 'acc') {
      const result = await this.productRepository.find({
        where: {
          productType: 5,
        },
      });
      
      return result;
    }
    else {
      return new HttpException('존재하지 않는 상품코드입니다.', 400);
    }
  }
}









 