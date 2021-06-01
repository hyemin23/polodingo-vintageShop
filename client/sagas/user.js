import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  ADD_REVIEW_REQUEST,
  ADD_REVIEW_SUCCESS,
  LOAD_REVIEW_LIST_FAILURE,
  LOAD_REVIEW_LIST_REQUEST,
  LOAD_REVIEW_LIST_SUCCESS,
  LOAD_USER_INFO_FAILURE,
  LOAD_USER_INFO_REQUEST,
  LOAD_USER_INFO_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCES,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  UPLOAD_IMG_FAILURE,
  UPLOAD_IMG_REQUEST,
  UPLOAD_IMG_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../reducers/action';

function signUpAPI(data) {
  console.log('회원가입 axios 들어옴');
  return axios.post('user/join', data);
}
function* signUp(action) {
  try {
    const result = yield call(signUpAPI, action.data);

    yield put({
      type: USER_REGISTER_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    // console.error 꼭 적어주세요 !
    // error를 전달할 때 error.response 로 접근해야합니다!
    console.error('에러', error.response.data);
    yield put({
      type: USER_REGISTER_FAIL,
      error: error.response.data,
    });
  }
}

function loginAPI(data) {
  return axios.post('/auth/login', data);
}
function* login(action) {
  try {
    const result = yield call(loginAPI, action.data);

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
  axios.defaults.headers.Cookie = '';
  return axios.post('/auth/logout');
}
function* logOut() {
  try {
    const result = yield call(logOutAPI);
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

function imgUploadAPI(data) {
  // 객체형식으로 보내야하나 ??
  console.log(data);
  return axios.post('review/upload', data);
}
function* imgUpload(action) {
  try {
    const result = yield call(imgUploadAPI, action.data);
    yield put({
      type: UPLOAD_IMG_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: UPLOAD_IMG_FAILURE,
      data: error.response.data,
    });
  }
}

function reviewAPI(data) {
  return axios.post('review', data);
}
function* review(action) {
  try {
    const result = yield call(reviewAPI, action.data);
    yield put({
      type: ADD_REVIEW_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: ADD_REVIEW_SUCCESS,
      data: error.response.data,
    });
  }
}

function reviewLoadAPI() {
  return axios.get('review');
}

function* reviewLoad(action) {
  try {
    const result = yield call(reviewLoadAPI);
    yield put({
      type: LOAD_REVIEW_LIST_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: LOAD_REVIEW_LIST_FAILURE,
      data: error.response.data,
    });
  }
}

// 토큰을 넣어줘야함
function loadUserInfoAPI() {
  console.log('로드유저 사가 API');
  console.log(axios.defaults.baseURL);
  console.log(process.env.NODE_ENV);
  return axios.get('auth/loadUserInfo');
}
function* loadUserInfo(action) {
  try {
    const result = yield call(loadUserInfoAPI, action.data);
    console.log('esresrse result ', result);
    yield put({
      type: LOAD_USER_INFO_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    console.log('에러', error.response.data);
    // console.error(error);
    // yield put({
    //   type: LOAD_USER_INFO_FAILURE,
    //   data: error.response,
    // });
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
function* watchImgAdded() {
  yield takeLatest(UPLOAD_IMG_REQUEST, imgUpload);
}

function* watchReview() {
  yield takeLatest(ADD_REVIEW_REQUEST, review);
}
function* watchReviewAllLoad() {
  yield takeLatest(LOAD_REVIEW_LIST_REQUEST, reviewLoad);
}

function* watchLoadUserInfo() {
  yield takeLatest(LOAD_USER_INFO_REQUEST, loadUserInfo);
}

export default function* userSaga() {
  yield all([
    fork(watchSignUp),
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchImgAdded),
    fork(watchReview),
    fork(watchReviewAllLoad),
    fork(watchLoadUserInfo),
  ]);
}
