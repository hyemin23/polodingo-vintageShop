import React from 'react';
import Link from 'next/link';
import { PaymentStyle } from '../../../style/OrderSheetStyle';
import OrderStep from '../../orderStep';

const paymentScreen = () => {
  return (
    <div>
      <OrderStep />
      <PaymentStyle>
        <form>
          <div className="payment_title">
            <h2>지불방법</h2>
          </div>
          <div className="payment_info">
            <div className="payment_content">
              <div className="form__checkout__content">
                <input type="radio" id="PayPal" name="paymentMethod" value="" />
                <label htmlFor="PayPal"> 신용카드</label>
              </div>
              <Link
                href="/order/orderSheet/[id]/"
                as={`/order/orderSheet/${123}`}
              >
                <a href="/order">
                  <button type="button" className="btn">
                    주문
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </form>
      </PaymentStyle>
    </div>
  );
};

export default paymentScreen;
