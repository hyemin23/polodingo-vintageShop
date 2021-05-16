import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { useDispatch, useSelector } from 'react-redux';
import { StockStyle } from '../style/StockStyle';

const myshop = () => {
  const dispatch = useDispatch();
  const [stock, setStock] = useState(true);
  const { wishList, me } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.product);

  // 장바구니 data 미리 가져오기
  useEffect(() => {
    dispatch({
      type: 'LOAD_WISHLIST',
      name: me.name,
    });
  }, []);

  return (
    <StockStyle>
      <Head>
        <title>장바구니</title>
      </Head>

      <div className="title">
        <h2>CART</h2>
      </div>

      {wishList && wishList ? (
        <div>
          <div className="cart_container">
            <Link href="#">
              <a>
                <img src="/images/product1.jpg" />
              </a>
            </Link>
            <div className="cart_product_title">
              <h4>폴로 No.1 제품명</h4>
            </div>
            <div>
              <h4>₩34,0000원</h4>
            </div>
            <div>
              <select>
                <option value="1">1</option>
              </select>
            </div>
            <div>
              <button type="button" className="btn">
                REMOVE
              </button>
            </div>
          </div>

          <div className="cart_container">
            <Link href="#">
              <a>
                <img src="/images/product1.jpg" />
              </a>
            </Link>
            <div className="cart_product_title">
              <h4>폴로 No.1 제품명</h4>
            </div>
            <div>
              <h4>₩34,0000원</h4>
            </div>
            <div>
              <select>
                <option value="1">1</option>
              </select>
            </div>
            <div>
              <button type="button" className="btn">
                REMOVE
              </button>
            </div>
          </div>

          <div className="cart_finall">
            <p>주문수량 : 개</p>
            <p>배송비 : 3000원</p>
            <p className="cart_total">총 구매 금액:₩34,000원</p>

            {/* 매개변수로 주문번호 Or 회원아이디 */}
            <Link href={`/order/shippingStep/${12}`}>
              <a>
                <button type="button" className="btn">
                  주문하기
                </button>
              </a>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="contents">
            <h3>장바구니가 비어있습니다.</h3>
            <div>
              <Link href="/category/all">
                <a>
                  <h4>상품 구경하기</h4>
                </a>
              </Link>
            </div>
          </div>
        </>
      )}
    </StockStyle>
  );
};

export default myshop;
