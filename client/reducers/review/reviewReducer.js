import { ADD_REVIEW } from './reviewAction';

const init = {
  reviews: [
    {
      reviewId: 1,
      userId: 1,
      reviewTitle: '리뷰제목 테스트',
      reviewContent: '리뷰테스트',
      reviewImage: '/images/review1.jpg',
      reviewState: true,
    },
  ],
};

const dummy = {
  reviewId: 2,
  userId: 2,
  reviewTitle: '리뷰제목2',
  reviewContent: '리뷰 테스트2',
  reviewImage: '/images/review2.jpg',
  reviewState: true,
};

const reviewReducer = (state = init, action) => {
  switch (action.type) {
    case ADD_REVIEW:
      return {
        ...state,
        reviews: [dummy, ...state.reviews],
      };
    default:
      return state;
  }
};

export default reviewReducer;
