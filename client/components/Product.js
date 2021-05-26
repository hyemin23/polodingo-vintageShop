import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  LOAD_PRODUCT_TITLE_REQUEST,
  LOAD_PRODUCT_TYPE_REQUEST,
} from '../reducers/action';

// 나중에 div -> Link로 수정하기
const Product = ({ productType, searchInfo }) => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  console.log('Product 중간과정');

  // id값으로 product 페이지에 뿌려주기
  useEffect(() => {
    if (productType) {
      console.log('productType', productType);
      dispatch({
        type: LOAD_PRODUCT_TYPE_REQUEST,
        data: productType,
      });
    }

    // 검색어가 있을 경우에
    if (searchInfo) {
      console.log('searchInfo', searchInfo);
      dispatch({
        type: LOAD_PRODUCT_TITLE_REQUEST,
        data: searchInfo,
      });
    }
  }, [productType, searchInfo]);

  return (
    <>
      {products &&
        products.map((product) => (
          <Link
            href={{
              pathname: `/product/${encodeURIComponent(
                product?.productName.replace(/(\s*)/g, '')
              )}`,
              query: {
                productCount: product.productCount,
                productPathId: product.id,
              },
            }}
            key={product.id}
          >
            <a
              href={`/product/${encodeURIComponent(
                product?.productName.replace(/(\s*)/g, '')
              )}`}
            >
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
