import axios from 'axios';
import { all, call, fork, put } from 'redux-saga/effects';
import { LOAD_WISH_FAILURE, LOAD_WISH_SUCCESS } from '../reducers/action';

function wishListAPI(data) {
  return axios.get('/product/wishList', data);
}
function* watchWishList(action) {
  try {
    console.log('장바구니 가져오기');
    const result = yield call(wishListAPI, action.data);
    console.log(result);

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
export default function* cartSaga() {
  yield all([fork(watchWishList)]);
}
