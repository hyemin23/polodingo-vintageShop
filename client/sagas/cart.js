import axios from 'axios';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import {
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
    console.log('action data saga :', action.data);
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

function* watchWishList() {
  yield takeLatest(LOAD_WISH_REQUEST, wishList);
}
export default function* cartSaga() {
  yield all([fork(watchWishList)]);
}
