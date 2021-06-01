import { User } from './../../user/entities/user.entity';
import { Product } from './../../product/entities/product.entity';
import { BaseEntity } from 'typeorm';
export declare class Wish extends BaseEntity {
    id: number;
    product: Product;
    user: User;
    detailId: number;
}
