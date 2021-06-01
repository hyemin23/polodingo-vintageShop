import { CreateWishDto } from './dto/create-wish.dto';
import { WishService } from './wish.service';
export declare class WishController {
    private readonly wishService;
    constructor(wishService: WishService);
    getWishList(id: number): Promise<import("./entities/wish.entity").Wish[]>;
    addWishList(createWishDto: CreateWishDto): Promise<any>;
    removeWishList(deleteWishDto: CreateWishDto): Promise<number>;
}
