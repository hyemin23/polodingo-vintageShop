import axios from 'axios';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';
import {
  LOAD_PRODUCT_TYPE_REQUEST,
  LOAD_USER_INFO_REQUEST,
} from '../reducers/action';
import wrapper from '../store/configureStore';

// 나중에 div -> Link로 수정하기
const Product = ({ productType }) => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  console.log('products', products);
  console.log('productType', productType);

  // id값으로 product 페이지에 뿌려주기
  // useEffect(() => {
  //   dispatch({
  //     type: LOAD_PRODUCT_TYPE_REQUEST,
  //     data: productType,
  //   });
  // }, [productType]);

  // useEffect(() => {
  //   dispatch({
  //     type: LOAD_PRODUCT_TYPE_REQUEST,
  //     data: productType,
  //   });
  // }, [productType]);

  return (
    <>
      {products.map((product) => (
        <Link href={`/product/${product.id}`} key={product.id}>
          <a>
            <div>
              <img src={`${product.thumbnailPath || ''}`} />
              <div className="inner">
                <strong className="name">
                  <span>{product.productName}</span>
                </strong>

                <div className="spec">
                  <div className="price_all">
                    {/* <span className="price">{product.productPrice}</span> */}
                    <span className="sale ">{product.productPrice}원</span>
                  </div>
                </div>

                {product.productCount === 1 ? (
                  ''
                ) : (
                  <div className="promotion">
                    <img
                      src="/images/ico_product_soldout.gif"
                      className="icon_img"
                      alt="품절"
                    />
                  </div>
                )}
              </div>
            </div>
          </a>
        </Link>
      ))}
    </>
  );
};

export default Product;
