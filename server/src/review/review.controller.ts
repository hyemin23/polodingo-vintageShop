import { ReviewService } from './review.service';
import { multerOptions } from './../multer/multerOPtions';

import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get()
  public async loadReview() {
    return this.reviewService.loadRivew();
  }
  // @Post()
  // public async addReview(
  //   @Body('userId') userId: number,
  //   @Body('reviewTitle') reviewTitle: string,
  //   @Body('reviewContent') reviewContent: string,
  // ) {
  //   const result = await this.reviewService.addReview(
  //     userId,
  //     reviewTitle,
  //     reviewContent,
  //   );

  //게시물 등록에 성공했다면 리뷰 전체 데이터 가져오기
  //     select *
  // from review as a
  // left join user as b
  // on a.userId = b.id
  // left join image as c
  // on a.userId = c.userId
  // where a.userId = 1;

  //하나의 테이블로 합쳐서 가자
  // if (result === 1) {
  //   const allReviews = await getRepository(Review)
  //     .createQueryBuilder('review')
  //     .leftJoinAndSelect('')
  //     .where('review.userId=:userId', { userId })
  //     .getQuery();

  //   console.log(allReviews);
  // }
  // }

  //1:formData의 key값
  //2:파일 최대 갯수
  //3:파일 설정
  @UseInterceptors(FilesInterceptor('images', null, multerOptions))
  @Post('/upload')
  public uploadFiles(
    @UploadedFiles() files: File[],
    @Body('userId') userId: number,
    @Body('reviewTitle') reviewTitle: string,
    @Body('reviewContent') reviewContent: string,
  ) {
    const uploadedFiles: string[] = this.reviewService.uploadFiles(
      files,
      userId,
      reviewTitle,
      reviewContent,
    );
    return {
      status: 200,
      messaga: '파일 업로드를 성공하였습니다',
      data: {
        files: uploadedFiles,
      },
    };
  }
}
