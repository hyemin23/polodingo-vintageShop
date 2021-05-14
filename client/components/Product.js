import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

// 나중에 div -> Link로 수정하기
const Product = ({ id }) => {
  const { products } = useSelector((state) => state.product);
  // useEffect로 id를 받아와서 분기

  // id값으로 product 페이지에 뿌려주기

  return (
    <>
      {products.map((product) => (
        <Link href={`/product/${product.id}`} key={product.id}>
          <a>
            <div>
              <img src={`${product.Images[0]?.src}`} />
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
