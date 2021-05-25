import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_PRODUCT_TYPE_REQUEST } from '../reducers/action';

// 나중에 div -> Link로 수정하기
const Product = ({ productType }) => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  // id값으로 product 페이지에 뿌려주기
  useEffect(() => {
    dispatch({
      type: LOAD_PRODUCT_TYPE_REQUEST,
      data: productType,
    });
  }, [productType]);

  return (
    <>
      {products &&
        products.map((product) => (
          <Link
            href={{
              pathname: `/product/${product.id}`,
              query: { productCount: product.productCount },
            }}
            key={product.id}
          >
            <a href={`/product/${product.id}`}>
              <div key={product.id}>
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
