import { Wish } from './../../wish/entities/wish.entity';
import { BaseEntity } from 'typeorm';
export declare class Product extends BaseEntity {
    id: number;
    wish: Wish;
    productName: string;
    productColor: string;
    productSize: string;
    productRsize: string;
    productMsize: string;
    productMaterial: string;
    productLogoColor: string;
    productPrice: number;
    productType: string;
    thumbnailPath: string;
    imgPath1: string;
    imgPath2: string;
    imgPath3: string;
    productCount: number;
}
