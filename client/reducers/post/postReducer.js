export const init = {
  post: {},
};

const postReducer = (state = init, action) => {
  switch (action.type) {
    case '':
      return {};
    default:
      return state;
  }
};

export default postReducer;
