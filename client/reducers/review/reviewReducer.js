import {
  ADD_REVIEW_FAILURE,
  ADD_REVIEW_REQUEST,
  ADD_REVIEW_SUCCESS,
  UPLOAD_IMG_FAILURE,
  UPLOAD_IMG_REQUEST,
  UPLOAD_IMG_SUCCESS,
} from '../action';
import { ADD_REVIEW } from './reviewAction';

const init = {
  isImgLoading: false,
  isImgDone: false,
  isImgError: null,
  isAddedLoading: false,
  isAddedDone: false,
  isAddedError: null,
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
    case UPLOAD_IMG_REQUEST:
      return {
        isImgLoading: true,
        isImgDone: false,
        isImgError: null,
      };
    case UPLOAD_IMG_SUCCESS:
      return {
        isImgLoading: false,
        isImgDone: true,
      };
    case UPLOAD_IMG_FAILURE:
      return {
        isImgLoading: false,
        isImgDone: false,
        isImgError: action.data,
      };
    case ADD_REVIEW_REQUEST:
      return {
        isAddedLoading: true,
        isAddedDone: false,
        isAddedError: null,
      };
    case ADD_REVIEW_SUCCESS:
      return {
        isAddedLoading: false,
        isAddedDone: true,
      };
    case ADD_REVIEW_FAILURE:
      return {
        isAddedLoading: false,
        isAddedDone: false,
        isAddedError: action.data,
      };

    default:
      return state;
  }
};

export default reviewReducer;
