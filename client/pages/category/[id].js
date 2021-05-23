import React from 'react';
import Product from '../../components/Product';
import CategoryLayout from '../../layout/CategoryLayout';
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
export default Category;
