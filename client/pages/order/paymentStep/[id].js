import Link from "next/link"
import styled from "styled-components"
import { isMobile } from "../../../style/theme"
import OrderStep from "../../orderStep"

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
                  <button className="btn">주문</button>
                </a>
              </Link>
            </div>
          </div>
        </form>
      </PaymentStyle>
    </div>
  )
}

const PaymentStyle = styled.div`
  padding: 5rem 0;
  display: flex;
  justify-content: center;
  margin: auto;
  width: 100%;
  text-align: center;

  .payment_title {
    h2 {
      font-size: 18px;
      font-wight: 400;
      margin-bottom: 4rem;
    }
  }

  .form__checkout__content {
    padding: 2rem 0;
  }

  .btn {
    width: 100%;
  }

  ${isMobile} {
  }
`

export default paymentScreen
