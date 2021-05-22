import {
  ADD_REVIEW_FAILURE,
  ADD_REVIEW_REQUEST,
  ADD_REVIEW_SUCCESS,
  LOAD_REVIEW_LIST_FAILURE,
  LOAD_REVIEW_LIST_REQUEST,
  LOAD_REVIEW_LIST_SUCCESS,
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
  isReviewLoading: false,
  isReviewDone: false,
  isReviewError: null,
  reviews: [],
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
    case LOAD_REVIEW_LIST_REQUEST:
      return {
        isReviewLoading: true,
        isReviewDone: false,
        isReviewError: null,
      };
    case LOAD_REVIEW_LIST_SUCCESS:
      return {
        ...state,
        isReviewLoading: false,
        isReviewDone: true,
        reviews: [...action.data],
      };
    case LOAD_REVIEW_LIST_FAILURE:
      return {
        isReviewLoading: false,
        isReviewDone: false,
        isReviewError: action.data,
      };

    default:
      return state;
  }
};

export default reviewReducer;
