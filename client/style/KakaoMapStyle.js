import styled from 'styled-components';
import { isMobile } from './theme';

export const KakaoMapDiv = styled.div`
  padding: 10rem 20rem;
  width: 100%;
  margin: auto;

  .location_title {
    text-align: center;

    h2 {
      padding: 10px;
    }
  }
  .location_contents {
    font-size: 16px;
    font-weight: 500;
    padding: 10px 0;
  }
  .customoverlay {
    position: relative;
    bottom: 85px;
    border-radius: 6px;
    border: 1px solid #ccc;
    border-bottom: 2px solid #ddd;
    float: left;
  }
  .customoverlay:nth-of-type(n) {
    border: 0;
    box-shadow: 0px 1px 2px #888;
  }
  .customoverlay a {
    display: block;
    text-decoration: none;
    color: #000;
    text-align: center;
    border-radius: 6px;
    font-size: 14px;
    font-weight: bold;
    overflow: hidden;
    background: #d95050;
    background: #d95050
      url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png)
      no-repeat right 14px center;
  }
  .customoverlay .title {
    display: block;
    text-align: center;
    background: #fff;
    margin-right: 35px;
    padding: 10px 15px;
    font-size: 14px;
    font-weight: bold;
  }
  .customoverlay:after {
    content: '';
    position: absolute;
    margin-left: -12px;
    left: 50%;
    bottom: -12px;
    width: 22px;
    height: 12px;
    background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png');
  }

  ${isMobile} {
    padding: 5rem 1rem;

    .location_title {
      text-align: center;

      h2 {
        padding: 10px;
      }
    }
    .location_contents {
      font-size: 13px;
      font-weight: 500;
      padding: 10px 0;
    }
  }
`;
