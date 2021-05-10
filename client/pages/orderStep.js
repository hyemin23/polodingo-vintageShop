import React from "react";
import { useState } from "react/cjs/react.development";
import ActiveLink from "../components/ActiveLink";
import CategoryStyle from "../style/CategoryStyle";

const orderStep = () => {
  // store에 저장 후 useSelector로 뽑아와서 각 단계 판단 및 컴포넌트 활성화 나누기
  const [shipping, setShipping] = useState(true);
  const [payment, setPayment] = useState(true);
  const [placeOrder, setPlaceOrder] = useState(true);

  // clientId값으로 shipping보내기
  // 즉, 주문번호로 판별

  return (
    <CategoryStyle>
      <div>
        <ul className="productLanding_filter">
          <li>
            {/* 1단계를 완료했을 경우 2단계에 주문번호 매개변수 전달 */}
            {shipping && shipping === true ? (
              <ActiveLink
                href="/order/shippingStep/[id]"
                as={`/order/shippingStep/${123}`}
                activeClassName="shippingStep"
              >
                <a>배송지 입력</a>
              </ActiveLink>
            ) : (
              <ActiveLink href="/" as="" activeClassName="">
                <a>Shipping</a>
              </ActiveLink>
            )}
          </li>

          <li>
            <ActiveLink
              href="/order/paymentStep/[id]"
              as={`/order/paymentStep/${123}`}
              activeClassName="paymentStep"
            >
              <a>지불방법</a>
            </ActiveLink>
          </li>

          <li>
            <ActiveLink
              href="/order/orderSheet/[id]"
              as={`/order/orderSheet/${123}`}
              activeClassName="orderSheet"
            >
              <a>주문서 확인</a>
            </ActiveLink>
          </li>
        </ul>
      </div>
    </CategoryStyle>
  );
};

export default orderStep;
