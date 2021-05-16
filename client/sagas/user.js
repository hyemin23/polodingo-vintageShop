import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
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
} from '../reducers/action';

function signUpAPI(data) {
  console.log('회원가입 axios 들어옴');

  return axios.post('/auth/sign-up', data);
}
function* signUp(action) {
  try {
    console.log('signUp 사가 들어옴');
    const result = yield call(signUpAPI, action.data);
    yield put({
      type: USER_REGISTER_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    // console.error 꼭 적어주세요 !
    // error를 전달할 때 error.response 로 접근해야합니다!
    console.error(error);
    console.log(error.response.data);
    yield put({
      type: USER_REGISTER_FAIL,
      error: error.response.data,
    });
  }
}

function loginUpAPI(data) {
  return axios.post('/auth/sign-in', data);
}
function* login(action) {
  try {
    console.log('로그인 사가 들어옴');
    const result = yield call(loginUpAPI, action.data);
    console.log('로그인 결과 : ', result);
    yield put({
      type: LOG_IN_SUCCES,
      data: result.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: LOG_IN_FAILURE,
      error: error.response.data,
    });
  }
}

function logOutAPI() {
  return axios.get('/logout');
}
function* logOut() {
  try {
    console.log('로그아웃 사가 들어옴');
    const result = yield call(logOutAPI);
    console.log('retult', result);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: LOG_OUT_FAILURE,
      data: error.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, login);
}
function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  yield takeLatest(USER_REGISTER_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([fork(watchSignUp), fork(watchLogIn), fork(watchLogOut)]);
}
