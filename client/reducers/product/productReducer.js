import {
  LOAD_PRODUCT_TYPE_FAILURE,
  LOAD_PRODUCT_TYPE_REQUEST,
  LOAD_PRODUCT_TYPE_SUCCESS,
} from '../action';
import { ADD_POST } from './productAction';

// 가짜 객체 (테스트용)
const dummyData = {
  id: 2,
  productName: '폴로 테스트 데이터2',
  productColor: 'black',
  productSize: '105',
  productRsize: 'XL',
  productMsize: '58/33/20',
  productMaterial: 'carbon',
  productLogoColor: 'red',
  productPrice: 40000,
  productCount: 1,
  // 상품 종류 1: Outer , 2: Top 3:Pants, 4:acc
  productType: 1,

  User: {
    id: 1,
    userId: 'admin',
  },
  Thumbnail: [
    {
      src: '/images/product2.jpg',
    },
  ],
  Images: [
    {
      src: '/images/product_content1.jpg',
    },
    {
      src: '/images/product_content2.jpg',
    },
    {
      src: '/images/product_content3.jpg',
    },
  ],
};

// 상품
export const init = {
  isPostLoading: false,
  isPostDone: false,
  isPostError: null,
  products: [],
};

const postReducer = (state = init, action) => {
  switch (action.type) {
    case LOAD_PRODUCT_TYPE_REQUEST:
      return {
        isPostLoading: true,
        isPostDone: false,
        isPostError: null,
      };
    case LOAD_PRODUCT_TYPE_SUCCESS:
      // 추가가 아니라 불러오는것이므로
      return {
        ...state,
        isPostLoading: false,
        isPostDone: true,
        products: [...action.data],
      };
    case LOAD_PRODUCT_TYPE_FAILURE:
      return {
        isPostLoading: false,
        isPostDone: false,
        isPostError: action.data,
      };
    case ADD_POST:
      return {
        ...state,
        products: [dummyData, ...state.products],
      };
    default:
      return state;
  }
};

export default postReducer;
