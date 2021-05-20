import Head from 'next/head';
import React, { useEffect } from 'react';
import Link from 'next/link';

import { useDispatch, useSelector } from 'react-redux';
import { StockStyle } from '../style/StockStyle';
import { LOAD_WISH_REQUEST } from '../reducers/action';

const myshop = () => {
  const dispatch = useDispatch();

  // wishInfo 에서 상품 정보들 가져와서 뿌려주기
  const { me } = useSelector((state) => state.user);
  const { wishList } = useSelector((state) => state.cart);

  useEffect(() => {
    if (me && me.id) {
      // 해당 유저의 장바구니 리스트 가져오기
      dispatch({
        type: LOAD_WISH_REQUEST,
        data: me.id,
      });
    }
  }, []);

  return (
    <StockStyle>
      <Head>
        <title>장바구니</title>
      </Head>
      <div className="title">
        <h2>CART</h2>
      </div>
      <div>
        {wishList && wishList.length !== 0 && (
          <>
            {wishList.map((wish) => (
              <div className="cart_container">
                <Link href="#">
                  <a>
                    <img src="/images/product1.jpg" />
                  </a>
                </Link>
                <div className="cart_product_title">
                  <h4>{wish.productName}</h4>
                </div>
                <div>
                  <h4>{wish.productPrice} 원</h4>
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
            ))}

            <div className="cart_finall">
              <p>주문수량 : 개</p>
              <p>배송비 : 3000원</p>
              {/* <p className="cart_total">
                총 구매 금액:
                {wishList.map((wish) => (
                  <>{wish.productPrice} </>
                ))}
              </p> */}

              {/* 매개변수로 주문번호 Or 회원아이디 */}
              <Link href={`/order/shippingStep/${12}`}>
                <a>
                  <button type="button" className="btn">
                    주문하기
                  </button>
                </a>
              </Link>
            </div>
          </>
        )}
      </div>
      {wishList && wishList.length === 0 && (
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
      )}
    </StockStyle>
  );
};

export default myshop;
