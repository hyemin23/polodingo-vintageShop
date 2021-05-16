import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import {
  ProductDetailContnets,
  ProductDetailMainStyle,
} from '../../style/ProductDetailStyles';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const productPathId = parseInt(router.query.id, 10);

  const { products } = useSelector((state) => state.product);
  const wishList = useSelector((state) => state.me?.wishList);

  console.log(wishList);
  // async await
  const addCart = useCallback(() => {
    // 상품이 장바구니에 존재하지 않으면
    if (wishList) {
      if (!wishList.includes(productPathId)) {
        dispatch({
          type: 'ADD_WISH_LIST',
          data: productPathId,
        });
        alert('장바구니에 추가되었습니다.');
      }
      // 상품이 장바구니에 있다면
      else {
        alert('장바구니에 존재합니다');
      }
    }
  }, [wishList]);

  return (
    <ProductDetailMainStyle>
      {/* 상품 기본정보 */}
      {products.map((p) =>
        p.id === productPathId ? (
          <div className="productDetail">
            <div className="thumbnailImg">
              <img src={p.Thumbnail[0].src} alt="WOOL MIX BELTED COAT" />
            </div>

            <div className="infoArea">
              <div className="infoTitle">
                <span>{p.productName}</span>
              </div>
              <div className="information">
                <p>상품 색상:{p.productColor} </p>
                <p>로고색상 : {p.productLogoColor}</p>
                <p>상품 재질 : {p.productMaterial}</p>
                <p>상품 사이즈 :{p.productSize}</p>
                <p>추천 사이즈 :{p.productRsize}</p>
              </div>
              <div className="total_price">
                <span>₩{p.productPrice}</span>
              </div>
              <div className="total_product">
                <span>{p.productName}</span>
              </div>
              <div className="final_price">
                <span>TOTAL : ₩{p.productPrice}(원)</span>
              </div>
              <div className="shop_btn">
                <div className="shop_btn_save">
                  <button type="button" className="btn" onClick={addCart}>
                    장바구니 담기
                  </button>
                </div>
                <div className="btn_info">
                  <button type="button">바로결제</button>
                  <button type="button">관심상품</button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ''
        )
      )}

      {/* 상품 상세 정보 */}
      <ProductDetailContnets>
        {products.map((p) =>
          p.id === productPathId ? (
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
                <p>{p.productMsize}</p>
                {/* 제품 관련 이미지 */}
                <p>
                  <img src={p.Images[0].src} />
                  <img src={p.Images[1].src} />
                  <img src={p.Images[2].src} />
                </p>
              </div>
              <div className="product_detail_bottom_img">
                <p>
                  <img src="/images/productdetail_content2.jpg" />
                </p>
              </div>
            </div>
          ) : (
            ''
          )
        )}
      </ProductDetailContnets>
    </ProductDetailMainStyle>
  );
};

export default ProductDetail;
