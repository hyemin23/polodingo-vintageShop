import React from "react";
import {
  ProductDetailContnets,
  ProductDetailMainStyle,
} from "../../style/ProductDetailStyles";

const { useRouter } = require("next/router");

const ProductDetail = () => {
  const router = useRouter();

  return (
    <ProductDetailMainStyle>
      {/* 상품 기본정보 */}
      <div className="productDetail">
        <div className="thumbnailImg">
          <img src="/images/product1.jpg" alt="WOOL MIX BELTED COAT" />
        </div>

        <div className="infoArea">
          <div className="infoTitle">
            <span>[ L ] Polo Ralph Lauren Sweater (5119)</span>
          </div>
          <div className="information">
            <p>연두 컬러 </p>
            <p>블루로고</p>
            <p>100%피마코튼</p>
            <p>표기사이즈L</p>
            <p>추천사이즈 100</p>
          </div>
          <div className="total_price">
            <span>₩34,000</span>
          </div>
          <div className="total_product">
            <span>[ L ] Polo Ralph Lauren Sweater (5119)</span>
          </div>
          <div className="final_price">
            <span>TOTAL : ₩34,000(원)</span>
          </div>
          <div className="shop_btn">
            <div className="shop_btn_save">
              <button className="btn">장바구니 담기</button>
            </div>
            <div className="btn_info">
              <button>바로결제</button>
              <button>관심상품</button>
            </div>
          </div>
        </div>
      </div>

      {/* 상품 상세 정보 */}
      <ProductDetailContnets>
        <div className="product_detail_content">
          <div className="detail_content_title">
            <p>DETAIL</p>
          </div>

          <div className="product_detail_main_img">
            <p>
              <img src="/images/productdetail_content.jpg" />
            </p>
          </div>
          <div className="product_detail_main_content">
            <p>총기장 및 사이즈 </p>
            {/* 제품 관련 이미지 */}
            <p>
              <img src="/images/product_content1.jpg" />
              <img src="/images/product_content2.jpg" />
              <img src="/images/product_content3.jpg" />
            </p>
          </div>
          <div className="product_detail_bottom_img">
            <p>
              <img src="/images/productdetail_content2.jpg" />
            </p>
          </div>
        </div>
      </ProductDetailContnets>
    </ProductDetailMainStyle>
  );
};

export default ProductDetail;
