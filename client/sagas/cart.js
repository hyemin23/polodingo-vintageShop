import axios from 'axios';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import {
  ADD_WISH_FAILURE,
  ADD_WISH_REQUEST,
  ADD_WISH_SUCCESS,
  LOAD_WISH_FAILURE,
  LOAD_WISH_REQUEST,
  LOAD_WISH_SUCCESS,
} from '../reducers/action';

function wishListAPI(data) {
  console.log('wishListAPI');
  return axios.get(`wish/${data}`);
}
function* wishList(action) {
  try {
    const result = yield call(wishListAPI, action.data);
    console.log('result는 : ', result);
    yield put({
      type: LOAD_WISH_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: LOAD_WISH_FAILURE,
      data: error.response.data,
    });
  }
}

function addWishAPI(data) {
  return axios.post('wish/add', data);
}

function* addWishList(action) {
  try {
    const result = yield call(addWishAPI, action.data);
    console.log('결과 : ', result);

    if (result.data === 1) {
      yield put({
        type: ADD_WISH_SUCCESS,
        data: true,
      });
    }
  } catch (error) {
    console.error(error);
    yield put({
      type: ADD_WISH_FAILURE,
      data: error.response.data,
    });
  }
}
function* watchAddWishList() {
  yield takeLatest(ADD_WISH_REQUEST, addWishList);
}
function* watchWishList() {
  yield takeLatest(LOAD_WISH_REQUEST, wishList);
}
export default function* cartSaga() {
  yield all([fork(watchAddWishList), fork(watchWishList)]);
}
