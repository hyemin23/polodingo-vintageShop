import {
  ADD_WISH_FAILURE,
  ADD_WISH_REQUEST,
  ADD_WISH_SUCCESS,
  LOAD_WISH_FAILURE,
  LOAD_WISH_REQUEST,
  LOAD_WISH_SUCCESS,
  ORDER_DETAIL_FAILURE,
  ORDER_DETAIL_REQUEST,
  ORDER_DETAIL_SUCCESS,
  REMOVE_WISH_FAILURE,
  REMOVE_WISH_REQUSET,
  REMOVE_WISH_SUCCESS,
} from '../action';

const init = {
  isWishRemoveLoading: false,
  isWishRemoveSuccess: false,
  isWishRemoveError: null,

  isWishLoading: false,
  isWishDone: false,
  isWishError: null,

  isCartLoading: false,
  isCartError: null,
  isCartDone: false,

  isOrderDeatilLoading: false,
  isOrderDeatilDone: false,
  isOrderDeatilError: null,

  userInfo: null,
  wishList: [],
  wishInfo: {},
};

export const cartReducer = (state = init, action) => {
  switch (action.type) {
    case ORDER_DETAIL_REQUEST:
      return {
        isOrderDeatilLoading: true,
        isOrderDeatilDone: false,
        isOrderDeatilError: null,
      };
    case ORDER_DETAIL_SUCCESS:
      return {
        ...state,
        isOrderDeatilLoading: false,
        isOrderDeatilDone: true,
      };
    case ORDER_DETAIL_FAILURE:
      return {
        isOrderDeatilLoading: false,
        isOrderDeatilDone: false,
        isOrderDeatilError: action.data,
      };

    case ADD_WISH_REQUEST:
      return {
        isWishLoading: true,
        isWishDone: false,
        isWishError: null,
      };
    case ADD_WISH_SUCCESS:
      return {
        ...state,
        isWishLoading: false,
        isWishDone: action.data,
      };
    case ADD_WISH_FAILURE:
      return {
        isWishLoading: false,
        isWishError: action.error,
      };
    case LOAD_WISH_REQUEST:
      return {
        isCartLoading: true,
        isCartError: null,
        isCartDone: false,
      };
    case LOAD_WISH_SUCCESS:
      return {
        ...state,
        isCartLoading: false,
        isCartDone: true,
        wishList: action.data,
        // wishList: (action.data && action.data.map((p) => p.product)) || null,
      };
    case LOAD_WISH_FAILURE:
      return {
        isCartLoading: false,
        isCartError: action.error,
      };

    case REMOVE_WISH_REQUSET:
      return {
        isWishRemoveLoading: true,
        isWishRemoveSuccess: false,
        isWishRemoveError: null,
      };
    case REMOVE_WISH_SUCCESS:
      return {
        isWishRemoveLoading: false,
        isWishRemoveSuccess: action.data,
      };
    case REMOVE_WISH_FAILURE:
      return {
        isWishRemoveLoading: false,
        isWishRemoveSuccess: false,
        isWishRemoveError: action.data,
      };
    default:
      return state;
  }
};

export default cartReducer;
