import Head from 'next/head';
import React, { useCallback, useEffect } from 'react';
import Link from 'next/link';

import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { END } from 'redux-saga';
import { StockStyle } from '../style/StockStyle';
import {
  LOAD_USER_INFO_REQUEST,
  LOAD_WISH_REQUEST,
  REMOVE_WISH_REQUSET,
} from '../reducers/action';
import wrapper from '../store/configureStore';

const myshop = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  // wishInfo 에서 상품 정보들 가져와서 뿌려주기
  const { me } = useSelector((state) => state.user);
  const { wishList, isWishRemoveSuccess, isWishDone } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    if (me && me.id && wishList) {
      // 해당 유저의 장바구니 리스트 가져오기
      dispatch({
        type: LOAD_WISH_REQUEST,
        data: me.id,
      });
    }

    if (me === null) {
      router.push('/');
    }
  }, [me, isWishDone]);

  useEffect(() => {
    if (isWishRemoveSuccess) {
      dispatch({
        type: LOAD_WISH_REQUEST,
        data: me.id,
      });
    }

    if (isWishDone === true) {
      dispatch({
        type: LOAD_WISH_REQUEST,
        data: me.id,
      });
    }
  }, [isWishRemoveSuccess, isWishDone]);

  // 사용자 id와
  // 상품 id 를 전달받음
  const onRemove = useCallback((userId, productId) => {
    const data = {
      userId,
      productId,
    };
    dispatch({
      type: REMOVE_WISH_REQUSET,
      data,
    });

    alert('삭제되었습니다!');
  }, []);

  return (
    <StockStyle>
      <Head>
        <title>폴로딩고 | 장바구니</title>
      </Head>
      <div className="title">
        <h2>CART</h2>
      </div>
      <div>
        {wishList && wishList.length !== 0 && (
          <>
            {wishList.map((wish) => (
              <div className="cart_container" key={wish.id}>
                <Link href="#">
                  <a>
                    <img src={`${wish.thumbnailPath}`} />
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
                  <button
                    type="button"
                    className="btn"
                    onClick={() => onRemove(me.id, wish.id)}
                  >
                    REMOVE
                  </button>
                </div>
              </div>
            ))}

            <div className="cart_finall">
              <p>
                총 금액 :
                {wishList.reduce((acc, cur) => acc + cur.productPrice, 0)} 원
              </p>
              <p>
                주문수량 :
                {wishList.reduce((acc, cur) => acc + cur.productCount, 0)} 개
              </p>
              <p>배송비 : 3000원</p>
              {/* <p className="cart_total">
                총 구매 금액:
                {wishList.map((wish) => (
                  <>{wish.productPrice} </>
                ))}
              </p> */}

              {/* 매개변수로 주문번호 Or 회원아이디 */}
              <Link href={`/order/shippingStep/${me.id}`}>
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

      {(wishList === undefined || (wishList && wishList.length === 0)) && (
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

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    context.store.dispatch({
      type: LOAD_USER_INFO_REQUEST,
    });

    context.store.dispatch(END);
    await context.store.sagaTask.toPromise(); // store.
  }
);

export default myshop;
