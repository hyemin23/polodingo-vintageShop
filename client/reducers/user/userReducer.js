import {
  LOG_IN,
  LOG_OUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../action';

export const init = {
  isLoggedIn: false,
  user: null,
  userId: 'test',
  userPw: '1234',
  userEmail: 'test@test.com',
  wishList: [
    {
      productId: 3,
    },
    {
      productId: 2,
    },
  ],
};

export const userRegisterReducer = (state = {}, action) => {
  console.log('userRegisterReducer들어옴');
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        isLoading: true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        isLoading: false,
        userInfo: action.data,
      };
    case USER_REGISTER_FAIL:
      return {
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

// 인자 : (이전상태, 액션) => return : 다음상태 만들어줌
export const userReducer = (state = init, action) => {
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
