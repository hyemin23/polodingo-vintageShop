import React from 'react';
import Head from 'next/head';
import { StockStyle } from '../style/StockStyle';

export default function Error404() {
  return (
    <>
      <StockStyle>
        <Head>
          <title>에러</title>
        </Head>
        <h2>404: 페이지를 찾을 수 없습니다.</h2>
      </StockStyle>
    </>
  );
}
