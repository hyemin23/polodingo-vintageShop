import { IsString, IsNumber } from 'class-validator';

export class CreateImgDto {
  @IsNumber()
  userId: number;

  @IsString()
  src: string;
}
