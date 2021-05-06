import styled from "styled-components"
import { isMobile } from "./theme"

export const ProductDetailMainStyle = styled.div`
  padding: 10rem 0;
  margin: auto;

  .productDetail {
    display: flex;
    text-align: left;
    justify-content: center;

    & .thumbnailImg {
      img {
        width: 500px;
        height: auto;
      }
    }

    & .infoArea {
      margin: 50px;
      width: 400px;

      .infoTitle {
        font-size: 1.5rem;
        font-weight: 500;
        padding-bottom: 4rem;
      }

      .information {
        font-size: 1rem;
      }

      .total_price {
        padding: 40px 0;
        widh: 100%;
        font-size: 20px;
        font-weight: 800;
      }

      .final_price {
        padding: 10px;
        font-size: 20px;
        font-weight: 400;
        text-align: right;
      }

      .total_product {
        display: flex;
        border: 1px solid #000;
        margin: 10px 0;
        padding: 10px;
      }

      & .shop_btn {
        button {
          height: 50px;
        }

        & .shop_btn_save button {
          margin: 2rem 0;
          width: 100%;
        }
        .btn_info button {
          width: 49%;
          margin-right: 2%;
          text-align: center;
          boxsizing: borderbox;
          background-color: white;
          outline: none;
          border: 1px solid #ccc;
        }
        .btn_info button:last-child {
          margin: 0;
        }
      }
    }
  }

  ${isMobile} {
    padding: 6rem 2rem;
    width: 100%;

    .productDetail {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      & .thumbnailImg {
        img {
          width: 100%;
        }
      }

      .infoArea {
        width: 100%;
        margin: 0;

        .infoTitle {
          font-size: 1.2rem;
          padding: 1rem 0;
        }
        .information {
          font-size: 0.8rem;
        }
        .total_price {
          display: none;
        }
        .total_product {
          display: none;
        }
        .final_price {
          text-align: center;
        }
      }
    }
  }
`

export const ProductDetailContnets = styled.div`
  width: 100%;
  padding: 0 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .product_detail_content {
    text-align: center;

    img {
      display: block;
      width: 800px;
      height: auto;
    }

    .detail_content_title {
      font-size: 2rem;
      font-weight: 800;
      padding: 5rem 0;
    }
  }
`
