import { Review } from './entity/review.entity';
import { Repository } from 'typeorm';
export declare class ReviewService {
    private reviewRepository;
    constructor(reviewRepository: Repository<Review>);
    loadRivew(): Promise<Review[]>;
    uploadFiles(files: File[], userId: any, reviewTitle: any, reviewContent: any): string[];
}
