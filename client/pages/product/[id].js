import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { END } from 'redux-saga';
import {
  ProductDetailContnets,
  ProductDetailMainStyle,
} from '../../style/ProductDetailStyles';
import {
  ADD_WISH_REQUEST,
  LOAD_PRODUCT_ID_REQUEST,
  LOAD_PRODUCT_TITLE_REQUEST,
  LOAD_PRODUCT_TYPE_REQUEST,
  LOAD_USER_INFO_REQUEST,
  LOAD_WISH_REQUEST,
} from '../../reducers/action';
import wrapper from '../../store/configureStore';

const ProductDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const productTitle = router.query.id;
  const productPathId = parseInt(router.query.productPathId, 10);
  const productCount = parseInt(router.query.productCount, 10);

  const { products } = useSelector((state) => state.product);
  const { me } = useSelector((state) => state.user);
  const { wishList } = useSelector((state) => state.cart);

  // 로그인 했을 경우에만 장바구니 불러오기
  useEffect(() => {
    console.log(productTitle, productPathId);

    // 상품 정보 불러오기
    if (productPathId) {
      dispatch({
        type: LOAD_PRODUCT_ID_REQUEST,
        data: productPathId,
      });
    }

    // 로그인한 유저라면 장바구니 가져오기
    if (me && me !== null) {
      dispatch({
        type: LOAD_WISH_REQUEST,
        data: me.id,
      });
    }
  }, [me, productPathId]);

  const addCart = useCallback(() => {
    if (productCount === 0) {
      alert('품절된 상품입니다!');
    } else {
      // 비로그인 유저
      if (me === null) {
        alert('회원만 가능한 기능입니다.');
        router.push('/login');
      }

      // 로그인 유저
      if (me) {
        const data = {
          productId: productPathId,
          userId: me.id,
        };

        // 장바구니가 없는 유저라면
        if (wishList === null && me !== null) {
          // 장바구니에 상품 추가
          dispatch({
            type: ADD_WISH_REQUEST,
            data,
          });
          alert('장바구니에 추가되었습니다!1');
          router.push('/myshop');
        }
        // 장바구니가 있는 유저라면
        else if (wishList !== null && me !== null && wishList !== undefined) {
          // 로그인한 유저의 장바구니에 해당 상품이 존재하는지 먼저 확인
          const existId = wishList.filter((wish) => wish.id === productPathId);

          // 장바구니에 상품이 존재하면
          if (existId.length > 0) {
            alert('장바구니에 상품이 존재합니다!');
          }
          // 장바구니에 상품이 없다면
          else {
            dispatch({
              type: ADD_WISH_REQUEST,
              data,
            });
            alert('장바구니에 추가되었습니다!');
            router.push('/myshop');
          }
        } else {
          alert('장바구니에 상품이 존재합니다!');
        }
      }
    }
  }, [wishList]);

  return (
    <ProductDetailMainStyle>
      {/* 상품 기본정보 */}
      {products &&
        products.map((p) =>
          p.id === productPathId ? (
            <div className="productDetail" key={p.id}>
              <div className="thumbnailImg">
                <img src={p.thumbnailPath} alt="WOOL MIX BELTED COAT" />
              </div>

              <div className="infoArea">
                <div className="infoTitle">
                  <span>{p.productName}</span>
                </div>
                <div className="information">
                  <p>상품 색상:{p.productColor} </p>
                  <p>로고색상 : {p.procutLogoColor}</p>
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
        {products &&
          products.map((p) =>
            p.id === productPathId ? (
              <div className="product_detail_content" key={p.id}>
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
                    <img src={p.imgPath1} />
                    <img src={p.imgPath2} />
                    <img src={p.imgPath3} />
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

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    context.store.dispatch({
      type: LOAD_USER_INFO_REQUEST,
    });

    context.store.dispatch(END);
    await context.store.sagaTask.toPromise(); // store.
  }
);
export default ProductDetail;
