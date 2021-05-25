import React, { useEffect } from 'react';

// import lottie from 'lottie-web';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { ShippingStyle } from '../../../style/OrderSheetStyle';
import OrderStep from '../../orderStep';

const shippingScreen = () => {
  const { me } = useSelector((state) => state.user);
  const router = useRouter();
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
    const address = {
      address: data.address,
      name: data.name,
      phoneNumber: data.phoneNumber,
    };

    router.push({
      pathname: `/order/paymentStep/${2}`,
      query: address,
    });
  };

  // useEffect(() => {
  //   loadLottie();
  // }, []);

  // const loadLottie = () => {
  //   const scrollAnimation = lottie.loadAnimation({
  //     container: document.getElementById('lottie'), // Required
  //     path: 'https://assets1.lottiefiles.com/packages/lf20_yr6zz3wv.json', // Required
  //     renderer: 'svg', // Required
  //     loop: true, // Optional
  //     autoplay: true, // Optional
  //   });
  // };

  return (
    <div>
      <OrderStep />
      <ShippingStyle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="shipping_title">
            <h2>SHIPPING</h2>
          </div>
          <div className="shipping_info">
            <div className="shipping_content">
              <div>
                <p>주소</p>
                <input
                  type="text"
                  placeholder="주소를 입력해주세요"
                  {...register('address', {
                    required: true,
                  })}
                />
                {errors.name && errors.name.type === 'required' && (
                  <p>필수항목입니다.</p>
                )}
              </div>
              <div>
                <p>성함</p>
                <input
                  type="text"
                  placeholder="받으실분의 성함을 입력해주세요."
                  {...register('name', {
                    required: true,
                  })}
                />
                {errors.name && errors.name.type === 'required' && (
                  <p>필수항목입니다.</p>
                )}
              </div>
              <div>
                <p>전화번호</p>
                <input
                  type="text"
                  placeholder="전화번호를 입력해주세요."
                  {...register('phoneNumber', {
                    required: true,
                  })}
                />
                {errors.name && errors.name.type === 'required' && (
                  <p>필수항목입니다.</p>
                )}
              </div>
              {/* <Link href={`/order/paymentStep/${123}`}>
                <a href="#">
                  <button type="button" className="btn">
                    결제하기
                  </button>
                </a>
              </Link> */}

              <button type="submit" className="btn">
                결제하기
              </button>
            </div>
          </div>
        </form>
        <div id="lottie" />
      </ShippingStyle>
    </div>
  );
};

export default shippingScreen;
