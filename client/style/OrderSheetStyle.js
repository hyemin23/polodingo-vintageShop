import styled from "styled-components"
import { isMobile } from "./theme"

const orderSheetStyle = styled.div`
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
`

export default orderSheetStyle
