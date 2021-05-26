import Head from 'next/head';
import React from 'react';
import { useEffect } from 'react/cjs/react.development';
import { END } from 'redux-saga';
import { LOAD_USER_INFO_REQUEST } from '../reducers/action';
import wrapper from '../store/configureStore';
import { KakaoMapDiv } from '../style/KakaoMapStyle';

const location = () => {
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

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    context.store.dispatch({
      type: LOAD_USER_INFO_REQUEST,
    });

    context.store.dispatch(END);
    await context.store.sagaTask.toPromise(); // store.
  }
);

export default location;
