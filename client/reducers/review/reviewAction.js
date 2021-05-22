export const ADD_REVIEW = 'ADD_REVIEW';

export const addReview = (data) => {
  return {
    type: ADD_REVIEW,
    data,
  };
};
