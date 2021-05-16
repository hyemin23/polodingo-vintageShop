import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCES,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../action';

export const init = {
  isLoading: false,
  isLoginError: false,
  isLoginDone: false,
  isLoggedIn: false,
  me: null,
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

export const loginAction = (data) => {
  console.log('loginAction들어옴');
  return {
    type: 'LOG_IN_TEST_SUCCESS',
    data,
  };
};

export const userRegisterReducer = (state = {}, action) => {
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
    case 'LOG_IN_TEST_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isLoginDone: true,
        me: action.data,
      };

    case LOG_IN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isLoginError: null,
        isLoginDone: false,
      };
    case LOG_IN_SUCCES:
      return {
        ...state,
        isLoading: false,
        isLoginDone: true,
        me: action.data,
      };
    case LOG_IN_FAILURE:
      return {
        isLoading: false,
        isLoginError: action.error,
      };
    case LOG_OUT_REQUEST:
      return {};
    case LOG_OUT_SUCCESS:
      return {};
    case LOG_OUT_FAILURE:
      return {};

    default:
      return state;
  }
};
