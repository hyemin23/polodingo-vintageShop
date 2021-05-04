import styled from "styled-components"
import { isMobile } from "./theme"

export const ProductStyle = styled.div`
  display: grid;
  text-align: center;

  //홈,shop,모바일 조건처리
  ${(props) =>
    props.column === `4`
      ? `grid-template-columns: repeat(${props.column}, 1fr);
    column-gap: 40px;
    row-gap: 60px;    
    `
      : `grid-template-columns: repeat(${props.column}, 1fr);
    column-gap: 10px;
    row-gap: 60px;     
    `}

  img {
    width: 100%;
    height: auto;
  }

  .product {
    padding: 0 1rem 2rem 0;
  }

  .name {
    padding: 5px 0 12px;
    margin: 12px 0 2px;
    display: block;
    border-bottom: 1px solid #ececec;

    span {
      color: #222 !important;
      font-size: 16px !important;
      letter-spacing: -0.03em;
      font-weight: 400;
      white-space: pre-line;
    }
  }

  .promotion {
    img {
      padding: 10px 0 0 0;
      width: 10%;
      height: auto;
    }
  }

  .price_all {
    padding: 10px 0 0 0;
  }

  .price_all span {
    display: inline-block;
    padding: 0 3px;
    font-size: 16px;
    font-weight: 700;
    color: #222222;
  }

  .price_all .price {
    color: #bbb;
    text-decoration: line-through;
  }

  ${isMobile} {
    grid-template-columns: repeat(auto-fill, minmax(40%, auto));
    column-gap: 10px;
  }
`

export const asd = () => {}
