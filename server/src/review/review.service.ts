import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entity/review.entity';
import { Repository, getConnection } from 'typeorm';
import { createImageURL } from './../multer/multerOPtions';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
  ) {}
  // async addReview(userId, reviewTitle, reviewContent) {
  //   const result = await getConnection()
  //     .createQueryBuilder()
  //     .insert()
  //     .into(Review)
  //     .values({
  //       user: userId,
  //       reviewTitle: reviewTitle,
  //       reviewContent: reviewContent,
  //     })
  //     .execute();

  //   return result.raw.affectedRows;
  // }

  public async loadRivew() {
    const result = await this.reviewRepository.find();
    return result;
  }

  //리뷰 파일 업로드
  public uploadFiles(
    files: File[],
    userId,
    reviewTitle,
    reviewContent,
  ): string[] {
    const generatedFiles: string[] = [];

    //db에도 저장
    for (const file of files) {
      generatedFiles.push(createImageURL(file));
      getConnection()
        .createQueryBuilder()
        .insert()
        .into(Review)
        .values({
          user: userId,
          reviewTitle: reviewTitle,
          reviewContent: reviewContent,
          src: createImageURL(file),
        })
        .execute();

      // .createQueryBuilder()
      // .insert()
      // .into(Image)
      // .values({
      //   src: createImageURL(file),
      //   user: userId,
      // })
      // .execute();
    }

    // http://localhost:8080/public/파일이름 형식으로 저장이 됩니다.
    // console.log('파일경로,', generatedFiles);

    return generatedFiles;
  }
}
