import { useRouter } from 'next/router';
import React from 'react';
import Product from '../components/Product';
import CategoryLayout from '../layout/CategoryLayout';
import { ProductStyle } from '../style/ProductStyle';

export const product = () => {
  console.log('SEARCH');

  const router = useRouter();
  const searchInfo = decodeURIComponent(router.query.searchInfo);

  // 검색 컴포넌트에서는 Product를 불러와서 뿌려주기만 하면 되나 ?
  return (
    <div>
      <CategoryLayout />
      <div className="container" style={{ padding: '60px 5%' }}>
        <ProductStyle column="5">
          <Product searchInfo={searchInfo} />
        </ProductStyle>
      </div>
    </div>
  );
};

export default product;
