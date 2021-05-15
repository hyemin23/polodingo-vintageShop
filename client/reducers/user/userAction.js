import { LOG_IN, LOG_OUT, USER_REGISTER_SUCCESS } from '../action';

// 액션 생성자 함수 (action creator)
// export const joinACtion = (data) => {
//   return {
//     type: USER_REGISTER_SUCCESS,
//     data,
//   };
// };
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
