import { all, fork } from 'redux-saga/effects';
import axios from 'axios';
import userSaga from './user';
import cartSaga from './cart';
import { backUrl } from '../config/config';

axios.defaults.baseURL = backUrl;

// 쿠기 공유를 위해서 설장
// 이 옵션은 서버쪽에서도 명시해줘야함
// 서버에서 이 설정을 안 해주면 계속 오류가 남
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(userSaga), fork(cartSaga)]);
}
