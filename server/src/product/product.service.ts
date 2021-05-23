import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { Injectable, HttpException } from '@nestjs/common';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async getLoadProduct(productType: string) {
    console.log(productType);
    // all일 경우에는 날짜가 제일 최신인애들 기준으로 보여줘야함
    if (productType === 'all') {
      const result = await this.productRepository.find({
        where: {
          productType: 1,
        },
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
    } else {
      return new HttpException('존재하지 않는 상품코드입니다.', 400);
    }
  }
}
