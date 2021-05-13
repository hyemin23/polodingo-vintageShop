import { LOG_IN, LOG_OUT } from '../action';

export const init = {
  isLoggedIn: false,
  user: null,
  userId: 'test',
  userPw: '1234',
  userEmail: 'test@test.com',
  products: [
    {
      productId: 1,
    },
    {
      productId: 2,
    },
  ],
};

// 인자 : (이전상태, 액션) => return : 다음상태 만들어줌
const userReducer = (state = init, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.data,
      };
    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};
export default userReducer;
