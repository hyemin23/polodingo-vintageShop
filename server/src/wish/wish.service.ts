import { Wish } from './entities/wish.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, getRepository, Repository } from 'typeorm';
import { CreateWishDto } from './dto/create-wish.dto';

@Injectable()
export class WishService {
  constructor(
    @InjectRepository(Wish)
    private wishRepository: Repository<Wish>,
  ) {}

  async removeWishList(deleteWishDto: CreateWishDto) {
    const result = await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Wish)
      .where('userId = :userId', { userId: deleteWishDto.userId })
      .andWhere('productId = :productId', {
        productId: deleteWishDto.productId,
      })
      .execute();

    return result.affected;
  }

  async addWishList(createWishDto: CreateWishDto) {
    try {
      const { ...result } = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Wish)
        .values({
          product: { id: createWishDto.productId },
          user: { id: createWishDto.userId },
        })
        .execute();
      return result.raw.affectedRows;
    } catch (error) {
      console.error(error);
    }
  }

  async getWishList(userId: number) {
    console.log('service id : ', userId);

    //장바구니 테이블에서 userId가 일치하는 애들의
    // product 정보를 가져와야함

    //    select *
    // from wish a
    // left join product b
    // on a.productProductId = b.productId
    // left join user c
    // on c.id = a.userId
    // where a.userId =2 ;

    try {
      const result = await getRepository(Wish)
        .createQueryBuilder('wish')
        .leftJoinAndSelect('wish.product', 'product')
        .leftJoinAndSelect('wish.user', 'user')
        .where('wish.userId ', { userId })
        .getMany();
      return result;
    } catch (error) {
      console.error(error);
    }
  }
}
