import styled from 'styled-components';
import { isMobile } from './theme';

export const ShippingStyle = styled.div`
  padding: 5rem 20rem;
  display: flex;
  justify-content: center;
  margin: auto;
  width: 100%;
  text-align: center;

  #lottie {
    width: 28rem;
    margin-left: 3.5rem;
  }
  //브라우저 가로크기에 따라 로티이미지가 사라지는 문제

  .shipping_title h2 {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 1rem;
  }
  .shipping_info {
    .shipping_content {
      width: 100%;

      input {
        width: 500px;
        height: 30px;
        padding: 10px;
        outline: none;
        border: 1px solid #b2b2b2;
      }

      p {
        font-size: 16px;
        padding: 10px 0;
      }

      button {
        margin-top: 20px;
      }
    }
  }

  ${isMobile} {
    padding: 5rem 0;
    .shipping_info {
      input {
        width: 280px !important;
      }
    }
  }
`;

export const PaymentStyle = styled.div`
  padding: 5rem 0;
  display: flex;
  justify-content: center;
  margin: auto;
  width: 100%;
  text-align: center;

  .payment_title {
    h2 {
      font-size: 18px;
      font-wight: 400;
      margin-bottom: 4rem;
    }
  }

  .form__checkout__content {
    padding: 2rem 0;
  }

  .btn {
    width: 100%;
  }

  ${isMobile} {
  }
`;

export const OrderSheetStyle = styled.div`
  max-width: 1500px;
  margin: auto;
  padding: 5rem 1rem;
  text-align: center;

  .order_title {
    margin-bottom: 5rem;
  }
  .order_contents {
    display: flex;
    & > * {
      flex-grow: 1;
      flex-basis: 0;
    }

    h2 {
      font-size: 16px;
      font-weight: 400;
    }

    h3,
    p {
      text-align: start;
    }

    h3 {
      font-weight: 400;
      font-size: 16px;
      border-bottom: 1px solid #ececec;
    }

    p {
      padding: 30px;
    }
    .order_info {
      & .order_items {
        & .order_item_list {
          display: flex;
          align-items: center;
          border-bottom: 1px solid #ececec;

          & > *:not(img) {
            flex-grow: 2;
            flex-basis: 0;
          }

          img {
            max-width: 100px;
            margin: 1rem;
          }
        }
      }
    }
  }

  .order_summary {
    & .btn {
      width: 500px;
    }

    h2 {
      margin: 2rem 0;
      color: #f3885f;
    }
    p {
      font-size: 16px;
      font-wight: 400;
    }

    & .order_summary_contents {
      p {
        padding: 0;
        margin-bottom: 1rem;
        text-align: center;
      }
    }
  }

  ${isMobile} {
    .order_contents {
      flex-direction: column;
    }

    .order_summary {
      & .btn {
        width: 280px;
      }

      & .order_summary_contents {
        p {
          font-size: 16px;
          margin-bottom: 1rem;
          text-align: center;
        }
      }
    }
  }
`;
