import React from 'react';
import { END } from 'redux-saga';
import Product from '../../components/Product';
import CategoryLayout from '../../layout/CategoryLayout';
import { LOAD_USER_INFO_REQUEST } from '../../reducers/action';
import wrapper from '../../store/configureStore';
import { ProductStyle } from '../../style/ProductStyle';

const { useRouter } = require('next/router');

// 카테고리별로 상품을 뿌려주는곳
const Category = () => {
  const router = useRouter();
  const productType = router.query.id;

  return (
    <div>
      <CategoryLayout />
      <div className="container" style={{ padding: '60px 5%' }}>
        <ProductStyle column="4">
          <Product productType={productType} />
        </ProductStyle>
      </div>
    </div>
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

export default Category;
