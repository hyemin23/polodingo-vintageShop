import axios from 'axios';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import {
  LOAD_PRODUCT_ID_REQUEST,
  LOAD_PRODUCT_TITLE_REQUEST,
  LOAD_PRODUCT_TYPE_REQUEST,
  LOAD_PRODUCT_TYPE_SUCCESS,
} from '../reducers/action';

function loadProductInfoAPI(data) {
  console.log('loadProductInfoAPI', data);
  return axios.get(`product/load/${data}`);
}
function* loadProductInfo(action) {
  try {
    const result = yield call(loadProductInfoAPI, action.data);

    yield put({
      type: LOAD_PRODUCT_TYPE_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    // console.error(error);
    // yield put({
    //   type: LOAD_PRODUCT_TYPE_FAILURE,
    //   data: error.response.data,
    // });
  }
}

function loadProductTitleInfoAPI(data) {
  return axios.get(`product/search/${data}`);
}
function* loadProductTitleInfo(action) {
  try {
    const result = yield call(loadProductTitleInfoAPI, action.data);

    yield put({
      type: LOAD_PRODUCT_TYPE_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    // console.error(error);
    // yield put({
    //   type: LOAD_PRODUCT_TYPE_FAILURE,
    //   data: error.response.data,
    // });
  }
}

function loadProductIdInfoAPI(data) {
  return axios.get(`product/load/productId/${data}`);
}
function* loadProductIdInfo(action) {
  try {
    const result = yield call(loadProductIdInfoAPI, action.data);

    yield put({
      type: LOAD_PRODUCT_TYPE_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    // console.error(error);
    // yield put({
    //   type: LOAD_PRODUCT_TYPE_FAILURE,
    //   data: error.response.data,
    // });
  }
}

function* watchLoadProductInfo() {
  yield takeLatest(LOAD_PRODUCT_TYPE_REQUEST, loadProductInfo);
}

function* watchLoadProductPathId() {
  yield takeLatest(LOAD_PRODUCT_TITLE_REQUEST, loadProductTitleInfo);
}

function* watchLoadProductId() {
  yield takeLatest(LOAD_PRODUCT_ID_REQUEST, loadProductIdInfo);
}
export default function* productSaga() {
  yield all([
    fork(watchLoadProductInfo),
    fork(watchLoadProductPathId),
    fork(watchLoadProductId),
  ]);
}
