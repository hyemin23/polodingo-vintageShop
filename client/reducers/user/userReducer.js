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
  isLoginError: null,
  isLoginDone: false,

  isJoinLoading: false,
  isJoinError: null,
  isJoinDone: false,
  me: null,
  userInfo: null,
};

export const loginAction = (data) => {
  return {
    type: 'LOG_IN_TEST_SUCCESS',
    data,
  };
};

export const wishAddAction = (data) => {
  return {
    type: 'ADD_WISH_LIST',
    data,
  };
};

// 인자 : (이전상태, 액션) => return : 다음상태 만들어줌
export const userReducer = (state = init, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        isJoinLoading: true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        isJoinLoading: false,
        isJoinDone: true,
        userInfo: action.data,
      };
    case USER_REGISTER_FAIL:
      return {
        ...state,
        isJoinError: action.error,
        isJoinLoading: false,
      };
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
        me: action.data.userInfo,
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
