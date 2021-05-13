import React, { useEffect } from 'react';
import Link from 'next/link';
import { ShippingStyle } from '../../../style/OrderSheetStyle';
import OrderStep from '../../orderStep';
import lottie from 'lottie-web';

const shippingScreen = () => {
  useEffect(() => {
    loadLottie();
  }, []);

  const loadLottie = () => {
    const scrollAnimation = lottie.loadAnimation({
      container: document.getElementById('lottie'), // Required
      path: 'https://assets1.lottiefiles.com/packages/lf20_yr6zz3wv.json', // Required
      renderer: 'svg', // Required
      loop: true, // Optional
      autoplay: true, // Optional
    });
  };

  return (
    <div>
      <OrderStep />
      <ShippingStyle>
        <form>
          <div className="shipping_title">
            <h2>SHIPPING</h2>
          </div>
          <div className="shipping_info">
            <div className="shipping_content">
              <div>
                <p>주소</p>
                <input type="text" />
              </div>
              <div>
                <p>성함</p>
                <input type="text" />
              </div>
              <div>
                <p>전화번호</p>
                <input type="text" />
              </div>
              <Link
                href="/order/paymentStep/[id]"
                as={`/order/paymentStep/${123}`}
              >
                <a href="/order/paymentStep/">
                  <button type="button" className="btn">
                    결제하기
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </form>
        <div id="lottie" />
      </ShippingStyle>
    </div>
  );
};

export default shippingScreen;
