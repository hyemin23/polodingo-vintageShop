import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { HttpException } from '@nestjs/common';
export declare class ProductService {
    private productRepository;
    constructor(productRepository: Repository<Product>);
    getLoadProductId(productId: any): Promise<Product[]>;
    getLoadProductTitle(productTitle: string): Promise<any>;
    getLoadProduct(productType: string): Promise<HttpException | Product[]>;
}
