import { ReviewService } from './review.service';
export declare class ReviewController {
    private readonly reviewService;
    constructor(reviewService: ReviewService);
    loadReview(): Promise<import("./entity/review.entity").Review[]>;
    uploadFiles(files: File[], userId: number, reviewTitle: string, reviewContent: string): {
        status: number;
        messaga: string;
        data: {
            files: string[];
        };
    };
}
