import Link from "next/link"
import styled from "styled-components"
import { isMobile } from "../../../style/theme"
import OrderStep from "../../orderStep"

const orderSheetScreen = () => {
  return (
    <div style={{ margin: "auto", width: "100%" }}>
      <OrderStep />
      <OrderSheetStyle>
        <div className="order_title">
          <h2>주문서 확인</h2>
        </div>
        <div className="order_contents">
          <div className="order_info">
            <h3>SHIPPING</h3>
            <p>Address : </p>
            <h3>지불방법</h3>
            <p>신용카드</p>
            <div className="order_items">
              <h3>주문목록</h3>
              <div className="order_item_list">
                <img src="/images/product1.jpg" />
                <div>
                  <span>1번 상품</span>
                </div>
                <div>
                  <span>수량X가격 = 400원</span>
                </div>
              </div>
              <div className="order_item_list">
                <img src="/images/product2.jpg" />
                <div>
                  <span>1번 상품</span>
                </div>
                <div>
                  <span>수량X가격 = 400원</span>
                </div>
              </div>
              <div className="order_item_list">
                <img src="/images/product3.jpg" />
                <div>
                  <span>1번 상품</span>
                </div>
                <div>
                  <span>수량X가격 = 400원</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order_summary">
            <div>
              <h2>ORDER SUMMARY</h2>
            </div>
            <div className="order_summary_contents">
              <p>총 상품금액 : 2000 원</p>
              <p>배송비 : 무료</p>
              <p>수수료 : 10% </p>
              <p>총 주문가격 : 원</p>
            </div>
            <button className="btn">결제하기</button>
          </div>
        </div>
      </OrderSheetStyle>
    </div>
  )
}

const OrderSheetStyle = styled.div`
  max-width: 1500px;
  margin: auto;
  padding: 5rem 1rem;
  text-align: center;

  .order_title {
    margin-bottom: 5rem;
  }
  .order_contents {
    display: flex;
    & > * {
      flex-grow: 1;
      flex-basis: 0;
    }

    h2 {
      font-size: 16px;
      font-weight: 400;
    }

    h3,
    p {
      text-align: start;
    }

    h3 {
      font-weight: 400;
      font-size: 16px;
      border-bottom: 1px solid #ececec;
    }

    p {
      padding: 30px;
    }
    .order_info {
      & .order_items {
        & .order_item_list {
          display: flex;
          align-items: center;
          border-bottom: 1px solid #ececec;

          & > *:not(img) {
            flex-grow: 2;
            flex-basis: 0;
          }

          img {
            max-width: 100px;
            margin: 1rem;
          }
        }
      }
    }
  }

  .order_summary {
    h2 {
      margin: 2rem 0;
      color: #f3885f;
    }
    p {
      font-size: 16px;
      font-wight: 400;
    }

    & .order_summary_contents {
      p {
        padding: 0;
        margin-bottom: 1rem;
        text-align: center;
      }
    }
    .btn {
      width: 500px;
    }
  }

  ${isMobile} {
  }
`

export default orderSheetScreen
