import { IsNumber } from 'class-validator';

export class CreateWishDto {
  @IsNumber()
  productId: number;

  @IsNumber()
  userId: number;
}
