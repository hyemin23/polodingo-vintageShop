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
  Images: [
    {
      src: '/images/product2.jpg',
    },
  ],
};

// 상품
export const init = {
  products: [
    {
      id: 1,
      productName: '폴로 테스트 데이터1',
      productColor: 'red',
      productSize: '100',
      productRsize: 'L',
      productMsize: '58/43/28',
      productMaterial: 'carbon',
      productLogoColor: 'black',
      productPrice: 10000,
      productCount: 1,

      // 상품 올린사람 정보
      User: {
        id: 1,
        userId: 'admin',
      },
      Thumbnail: [
        {
          src: '/images/product1.jpg',
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
    },
  ],
};

const postReducer = (state = init, action) => {
  switch (action.type) {
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
