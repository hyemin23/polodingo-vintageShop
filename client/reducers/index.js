import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import { userReducer as user } from './user/userReducer';
import product from './product/productReducer';
import review from './review/reviewReducer';
import cart from './cart/cartReducer';
// 인자 : (이전상태, 액션) => return : 다음상태 만들어줌
// 서버사이드 렌더링을 위해  HYDRATE에 index reducer 추가
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log('하이드레이트', action);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  product,
  cart,
  review,
});
export default rootReducer;
