export const ADD_REVIEW = 'ADD_REVIEW';

export const addReview = (data) => {
  console.log('리뷰 액션 들어옴');
  return {
    type: ADD_REVIEW,
    data,
  };
};
