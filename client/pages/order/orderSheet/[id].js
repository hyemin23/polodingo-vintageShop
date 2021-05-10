import OrderSheetStyle from "../../../style/OrderSheetStyle"
import OrderStep from "../../orderStep"

const orderSheetScreen = () => {
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

export default orderSheetScreen
