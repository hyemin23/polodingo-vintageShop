import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react/cjs/react.development';
import { END } from 'redux-saga';
import {
  LOAD_USER_INFO_REQUEST,
  ORDER_DETAIL_REQUEST,
} from '../../../reducers/action';
import wrapper from '../../../store/configureStore';
import { OrderSheetStyle } from '../../../style/OrderSheetStyle';
import OrderStep from '../../orderStep';

const orderSheetScreen = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const paymentInfo = router.query;
  const { me } = useSelector((state) => state.user);
  const { wishList } = useSelector((state) => state.cart);
  const { address, payment } = router.query;
  useEffect(() => {
    if (me === null) {
      router.push('/');
    }
  }, [me]);

  const onClick = () => {
    // 결제가 되면 사용자의 장바구니에서 모든 상품이 안보여야한다.
    // 그러려면, wishList에서 detailId 컬럼을 채워주고
    // 장바구니를 불러올 때 detailId가 없는 애들만 불러오도록 해야한다.

    const totalPrice =
      wishList.reduce((acc, cur) => acc + cur.productPrice, 3000) * 0.11;

    delete paymentInfo.id;
    paymentInfo.totalPrice = parseInt(totalPrice, 10);

    paymentInfo.userId = me.id;
    console.log('insert전 정보 : ', paymentInfo);

    dispatch({
      type: ORDER_DETAIL_REQUEST,
      data: paymentInfo,
    });

    alert('결제가 완료되었습니다!');

    router.push({
      pathname: '/',
      query: '',
    });
  };

  return (
    <div>
      <OrderStep />
      <OrderSheetStyle>
        <div className="order_title">
          <h2>주문서 확인</h2>
        </div>
        <div className="order_contents">
          <div className="order_info">
            <h3>SHIPPING</h3>
            <p>Address : {address}</p>
            <h3>지불방법</h3>
            <p>{payment === '1' ? '신용카드' : '지불오류'} </p>
            <div className="order_items">
              <h3>주문목록</h3>
              {wishList &&
                wishList.map((wish) => (
                  <div className="order_item_list" key={wish.id}>
                    <img src={wish.thumbnailPath} />
                    <div>
                      <span>{wish.productName}</span>
                    </div>
                    <div>
                      <span>{wish.productPrice} 원</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="order_summary">
            <div>
              <h2>ORDER SUMMARY</h2>
            </div>
            <div className="order_summary_contents">
              <p>
                총 상품금액 :
                {wishList &&
                  wishList.reduce((acc, cur) => acc + cur.productPrice, 0)}
                원
              </p>
              <p>배송비 : 3000원</p>
              <p>수수료 : 11% </p>
              <p>
                총 주문가격 :
                {wishList &&
                  wishList.reduce((acc, cur) => acc + cur.productPrice, 3000) *
                    0.11}
                원
              </p>
            </div>
            <button type="button" className="btn" onClick={onClick}>
              결제하기
            </button>
          </div>
        </div>
      </OrderSheetStyle>
    </div>
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

export default orderSheetScreen;
