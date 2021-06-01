import { Wish } from './entities/wish.entity';
import { Repository } from 'typeorm';
import { CreateWishDto } from './dto/create-wish.dto';
export declare class WishService {
    private wishRepository;
    constructor(wishRepository: Repository<Wish>);
    removeWishList(deleteWishDto: CreateWishDto): Promise<number>;
    addWishList(createWishDto: CreateWishDto): Promise<any>;
    getWishList(userId: number): Promise<Wish[]>;
}
