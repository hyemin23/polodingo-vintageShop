import Head from 'next/head';
import React from 'react';
import { useEffect } from 'react/cjs/react.development';
import styled from 'styled-components';

const notice = () => {
  useEffect(() => {
    const container = document.getElementById('map'); // 지도를 담을 영역의 DOM 레퍼런스
    const options = {
      // 지도를 생성할 때 필요한 기본 옵션

      center: new window.kakao.maps.LatLng(
        37.68665392687055,
        126.8670047981437
      ), // 지도의 중심좌표.
      level: 4, // 지도의 레벨(확대, 축소 정도)
    };
    const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

    const imageSrc = 'http://localhost:3000/marker.png';
    const imageSize = new window.kakao.maps.Size(64, 69);
    const imageOption = { offset: new window.kakao.maps.Point(27, 69) };

    // 마커 이미지 정보 생성
    const markerImage = new window.kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );

    // 마커가 표시되는 위치 값
    const markerPosition = new window.kakao.maps.LatLng(
      37.68665392687055,
      126.8670047981437
    );

    // 마커 생성
    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
    });
    // 마커표시
    marker.setMap(map);

    // 커스텀 오버레이
    const position = new window.kakao.maps.LatLng(
      37.68665392687055,
      126.8670047981437
    );

    const content = `<div class= customoverlay>
    <a href=# target=_blank>
      <span class="title">폴로딩고 본사</span>
      </a>
    </div > `;

    // 커스텀 오버레이 생성
    const customOverlay = new window.kakao.maps.CustomOverlay({
      map,
      position,
      content,
      yAnchor: 1,
    });
  }, []);

  return (
    <>
      <Head>
        <title>폴로딩고 | 위치</title>
      </Head>
      <KakaoMapDiv>
        <div className="location_title">
          <h2>LOCATION</h2>
        </div>
        <div className="location_contents">
          <p>회사명 : 폴로딩고</p>
          <p>주소 : 경기도 고양시 덕양구 관산동</p>
        </div>
        <div id="map" style={{ width: '100%', height: '400px' }} />
      </KakaoMapDiv>
    </>
  );
};

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
`;
export default notice;
