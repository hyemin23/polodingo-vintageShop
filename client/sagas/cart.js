import axios from 'axios';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import {
  ADD_WISH_FAILURE,
  ADD_WISH_REQUEST,
  ADD_WISH_SUCCESS,
  LOAD_WISH_FAILURE,
  LOAD_WISH_REQUEST,
  LOAD_WISH_SUCCESS,
  REMOVE_WISH_FAILURE,
  REMOVE_WISH_REQUSET,
  REMOVE_WISH_SUCCESS,
} from '../reducers/action';

function wishListAPI(data) {
  return axios.get(`wish/${data}`);
}
function* wishList(action) {
  try {
    const result = yield call(wishListAPI, action.data);
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

function removeWishAPI(data) {
  return axios.delete('wish/remove', {
    data,
  });
}
function* removeWishList(action) {
  try {
    const result = yield call(removeWishAPI, action.data);

    if (result.data === 1) {
      yield put({
        type: REMOVE_WISH_SUCCESS,
        data: true,
      });
    }
  } catch (error) {
    console.error(error);
    yield put({
      type: REMOVE_WISH_FAILURE,
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
function* watchRemoveWishList() {
  yield takeLatest(REMOVE_WISH_REQUSET, removeWishList);
}
export default function* cartSaga() {
  yield all([
    fork(watchAddWishList),
    fork(watchWishList),
    fork(watchRemoveWishList),
  ]);
}
