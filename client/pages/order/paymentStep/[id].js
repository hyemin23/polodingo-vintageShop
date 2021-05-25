import React from 'react';

import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react/cjs/react.development';
import { useSelector } from 'react-redux';
import { PaymentStyle } from '../../../style/OrderSheetStyle';
import OrderStep from '../../orderStep';

const paymentScreen = () => {
  const router = useRouter();
  const userAddressInfo = router.query;
  const { me } = useSelector((state) => state.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (me === null) {
      router.push('/');
    }
  }, [me]);

  const onSubmit = async (data) => {
    console.log(typeof Number(data.payment, 10));
    const finalInfo = {
      payment: Number(data.payment, 10),
      userId: parseInt(me.id, 10),
    };

    Object.assign(finalInfo, userAddressInfo);

    router.push({
      pathname: `/order/orderSheet/${3}`,
      query: finalInfo,
    });
  };

  return (
    <div>
      <OrderStep />
      <PaymentStyle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="payment_title">
            <h2>지불방법</h2>
          </div>
          <div className="payment_info">
            <div className="payment_content">
              <div className="form__checkout__content">
                <input
                  type="radio"
                  id="PayPal"
                  name="paymentMethod"
                  value="1"
                  {...register('payment', {
                    required: true,
                  })}
                />
                <label htmlFor="PayPal"> 신용카드</label>
              </div>

              <button type="submit" className="btn">
                주문
              </button>
            </div>
          </div>
        </form>
      </PaymentStyle>
    </div>
  );
};

export default paymentScreen;
