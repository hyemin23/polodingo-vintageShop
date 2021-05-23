import { IsNumber, IsString } from 'class-validator';

export class CreateReviewDto {
  @IsNumber()
  userId: number;

  @IsString()
  reviewTitle: string;

  @IsString()
  reviewContent: string;
}
