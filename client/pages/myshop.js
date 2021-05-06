import Head from "next/head"
import React from "react"
import Link from "next/link"
import { useState } from "react/cjs/react.development"
import { StockStyle, NotStockStyle } from "../style/StockStyle"

const myshop = () => {
  const [stock, setStock] = useState(false)

  return (
    <>
      <Head>
        <title>장바구니</title>
      </Head>

      {stock && stock ? (
        <StockStyle>
          <div>장바구니</div>
        </StockStyle>
      ) : (
        <NotStockStyle>
          <div className="title">
            <h2>CART</h2>
          </div>
          <div className="contents">
            <h3>장바구니가 비어있습니다.</h3>
            <div>
              <Link href="/category/all">
                <a>
                  <h3>상품 둘러보기</h3>
                </a>
              </Link>
            </div>
          </div>
        </NotStockStyle>
      )}
    </>
  )
}

export default myshop
