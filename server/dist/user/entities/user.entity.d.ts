import { Review } from './../../review/entity/review.entity';
import { Wish } from './../../wish/entities/wish.entity';
import { BaseEntity } from 'typeorm';
export declare class User extends BaseEntity {
    id: number;
    userId: string;
    password: string;
    email: string;
    name: string;
    roleType: string;
    wish: Wish;
    review: Review;
}
