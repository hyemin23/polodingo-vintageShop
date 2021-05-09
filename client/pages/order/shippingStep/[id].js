import styled from "styled-components"
import { isMobile } from "../../../style/theme"
import OrderStep from "../../orderStep"

const shippingScreen = () => {
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
              <button className="btn">결제하기</button>
            </div>
          </div>
        </form>
      </ShippingStyle>
    </div>
  )
}

const ShippingStyle = styled.div`
  padding: 10rem 0;
  display: flex;
  justify-content: center;
  margin: auto;
  width: 100%;
  text-align: center;

  .shipping_title h2 {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 1rem;
  }
  .shipping_info {
    .shipping_content {
      width: 100%;

      input {
        width: 500px;
        height: 30px;
        padding: 10px;
        outline: none;
        border: 1px solid #b2b2b2;
      }

      p {
        font-size: 16px;
        padding: 10px 0;
      }

      button {
        margin-top: 20px;
      }
    }
  }

  ${isMobile} {
    padding: 5rem 0;
    .shipping_info {
      input {
        width: 280px !important;
      }
    }
  }
`

export default shippingScreen
