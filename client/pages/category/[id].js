import React from 'react';
import Product from '../../components/Product';
import CategoryLayout from '../../layout/CategoryLayout';
import { ProductStyle } from '../../style/ProductStyle';

const { useRouter } = require('next/router');

const Category = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <CategoryLayout />
      <div className="container" style={{ padding: '60px 5%' }}>
        <ProductStyle column="4">
          <Product id={id} />
        </ProductStyle>
      </div>
    </div>
  );
};
export default Category;
