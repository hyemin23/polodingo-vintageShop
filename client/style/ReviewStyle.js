import styled from 'styled-components';
import { isMobile } from './theme';

export const ReviewStyle = styled.div`
  padding: 10rem 10rem;
  width: 100%;

  .writebtn {
    text-align: right;
    margin: 10px 0;
  }

  .review_main_title {
    font-size: 20px;
    text-align: center;
    padding: 0 0 2rem 0;
  }

  .review_contents {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 10px;
    row-gap: 60px;

    .review_section {
      display: flex;
      flex-direction: column;
      text-align: center;
      box-sizing: border-box;
      border: 1px solid #ececec;

      img {
        width: 100%;
        height: 300px;
        object-fit: cover;
      }

      .des_zone {
        font-weight: 200;
        .des_title {
          padding: 8px 0;
          font-size: 16px;
          font-weight: 400;
        }
        .des_content {
          font-size: 13px;
          padding: 10px 0;
        }
      }
    }
  }

  ${isMobile} {
    padding: 5rem 0.4rem;

    .review_contents {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 5px;
      row-gap: 10px;
      width: 100%;
    }

    .review_section {
      img {
        width: 100%;
        height: 150px !important;
        object-fit: cover;
      }
    }
  }
`;

export const ReviewDetailStyles = styled.div`
  padding: 10rem 0.4rem;
  display: flex;
  justify-content: center;

  .writer_title {
    text-align: center;
    margin-bottom: 5rem;
  }

  .writer_container {
    width: 100%;
    padding: 0 10rem 10rem 10rem;

    .writer_content {
      display: flex;
      justify-content: center;

      p {
        padding: 10px 0;
      }
      input,
      textarea {
        padding: 10px;
        width: 100%;
      }

      textarea {
        height: 300px;
      }
      .button_div {
        text-align: center;
      }
    }
  }
`;
