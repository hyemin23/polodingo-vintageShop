import styled from "styled-components"

const { useRouter } = require("next/router")

const ProductDetail = () => {
  const router = useRouter()

  console.log(router.query)
  return (
    <ProductDetailStyle>
      {/*상품 기본정보 */}
      <div className="productDetail">
        <div className="thumbnailImg">
          <img src="/images/product1.jpg" alt="WOOL MIX BELTED COAT" />
        </div>

        <div className="InfoArea">
          <div>
            <span>제품타이틀</span>
          </div>
          <div>
            <span>제품 설명</span>
          </div>
          <div>
            <span>제품 가격</span>
          </div>
          <div>
            <span>제품 옵션</span>
            <div>
              <span>제품 총 가격</span>
            </div>
          </div>
          <div>
            <span>제품버튼</span>
            <button>장바구니 담기</button>
            <div>
              <button>바로결제</button>
              <button>관심상품</button>
            </div>
          </div>
        </div>
      </div>

      {/* 상품 상세 정보 */}
    </ProductDetailStyle>
  )
}

const ProductDetailStyle = styled.div`
  padding: 10rem 0;
  margin: auto;

  .productDetail {
    display: flex;
    text-align: left;
    justify-content: center;

    & .thumbnailImg {
      img {
        width: 100%;
        height: auto;
      }
    }

    & .InfoArea {
    }
  }
`

export default ProductDetail
