import { CreateWishDto } from './dto/create-wish.dto';
import { WishService } from './wish.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('wish')
export class WishController {
  constructor(private readonly wishService: WishService) {}

  @Get(':id')
  getWishList(@Param() id: number) {
    //Query는 HTTP request 로 들어오는 것
    //Param은 path value에서 들어오는 것
    const result = this.wishService.getWishList(id);

    return result;
  }

  //userId , productId
  @Post('add')
  async addWishList(@Body() createWishDto: CreateWishDto) {
    const result = await this.wishService.addWishList(createWishDto);
    return result;
  }

  @Delete('remove')
  removeWishList(@Body() deleteWishDto: CreateWishDto) {
    console.log('deleteWish Dto remove 들어옴');
    const result = this.wishService.removeWishList(deleteWishDto);
    return result;
  }
}
