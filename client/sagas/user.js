import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../reducers/action';

function signUpAPI(data) {
  return axios.post('/auth/sing-in', data);
}
function* signUp(action) {
  try {
    console.log('signUp 사가 들어옴');
    const result = yield call(signUpAPI, action.data);
    console.log(result);
    yield put({
      type: USER_REGISTER_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    // console.error 꼭 적어주세요 !
    // error를 전달할 때 error.response 로 접근해야합니다!
    console.error(error);
    yield put({
      type: USER_REGISTER_FAIL,
      error: error.response.data,
    });
  }
}

function* watchSignUp() {
  yield takeLatest(USER_REGISTER_REQUEST, signUp);
}
export default function* userSaga() {
  yield all([fork(watchSignUp)]);
}
