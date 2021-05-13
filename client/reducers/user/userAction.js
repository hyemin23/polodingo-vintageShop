import { LOG_IN, LOG_OUT } from '../action';

// 액션 생성자 함수 (action creator)
export const loginAction = (data) => {
  return {
    type: LOG_IN,
    data,
  };
};
export const logoutAction = () => {
  return {
    type: LOG_OUT,
  };
};
