import styled from 'styled-components';
import { isMobile } from './theme';

export const AboutStyle = styled.div`
  padding: 10rem 0rem;
  text-align: center;

  .titleArea {
    min-height: 30px;
    padding: 0 0 34px;
    transition: all 0.5s;
    animation: dj-mov-left-right 2s 1;
    animation-timing-function: ease;
    animation-direction: normal;

    h2 {
      font-size: 25px;
      letter-spacing: 0.08em;
      font-weight: normal;
      padding: 0 0 50 0px;
    }
  }

  .company {
    width: 100%;
    margin: 0 auto;

    img {
      width: 100%;
    }

    h2 {
      font-weight: 100;
      font-size: 40px;
    }

    .motion4 {
      transition: transform 1s ease-in-out, opacity 0.5s ease-in-out;
      animation-delay: 3s;
      letter-spacing: -0.05em;
    }

    .title {
      padding: 0 0 50px 0;
    }

    p {
      line-height: 1.5;
      padding: 10px 0 10px;
      font-size: 20px;
      font-weight: 300;
      letter-spacing: -0.03em;
    }
  }

  ${isMobile} {
    padding: 10rem 0rem;

    .titleArea {
      h2 {
        font-size: 25px;
      }
    }

    .company {
      h2 {
        font-weight: 100;
        font-size: 30px;
      }

      p {
        line-height: 1.3;
        padding: 10px 0 10px;
        font-size: 18px;
        font-weight: 300;
        letter-spacing: -0.03em;
      }
    }
  }
`;
