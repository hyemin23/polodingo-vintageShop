import { User } from './../../user/entities/user.entity';
import { BaseEntity } from 'typeorm';
export declare class Review extends BaseEntity {
    id: number;
    user: User;
    reviewTitle: string;
    reviewContent: string;
    src: string;
}
