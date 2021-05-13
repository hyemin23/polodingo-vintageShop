import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    userId: 'test',
    userPw: '1234',
    userEmail: 'test@test.com',
  },
};

// 액션 타입
export const LOG_IN = 'LOG_IN';

// 액션 생성자 함수 (action creator)
export const loginAction = (data) => {
  console.log('로그인 액션 들어옴');
  return {
    type: LOG_IN,
    data,
  };
};

// 인자 : (이전상태, 액션) => return : 다음상태 만들어줌
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log('하이드레이트', action);
      return { ...state, ...action.payload };
    case LOG_IN:
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true,
          user: action.data,
        },
      };

    default:
      return state;
  }
};

export default rootReducer;
