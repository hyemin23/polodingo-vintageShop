import axios from 'axios';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { END } from 'redux-saga';
import MainSection from '../components/MainSection';
import {
  LOAD_PRODUCT_TYPE_REQUEST,
  LOAD_USER_INFO_REQUEST,
} from '../reducers/action';
import wrapper from '../store/configureStore';

const index = () => {
  console.log('index 페이지 들어옴');

  // useEffect(() => {
  // localStorage.getItem('vintage-info-user');
  // }, []);

  return (
    <>
      <Head>
        <title>폴로딩고</title>
      </Head>
      {/* 섹션 */}
      <MainSection />
      {/* 상품페이지 */}
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    console.log('indexxxxxxxxxxxxxxx');
    // index js의 리듀서 구조를 바꿔야함 중첩되게 끔

    axios.defaults.headers.Cookie = '';

    // 로그인을 공유하는 상황을 막기 위해서
    const cookie = context.req ? context.req.headers.cookie : '';

    // console.log('쿠키 : ', cookie);
    // defaults 쿠기 설정 (로그인 했을 경우에만)
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }

    console.log('cookie', cookie);
    context.store.dispatch({
      type: LOAD_USER_INFO_REQUEST,
    });

    // 첫 파에지 랜딩에는  최근 등록된 상품 기준으로 보여주거나 업로드 날짜가 가장 최근인 애들을 보여줘야함
    context.store.dispatch({
      type: LOAD_PRODUCT_TYPE_REQUEST,
      data: 'all',
    });

    // 위에 REQUEST가 SUCCESS로 바뀔 때 까지 기다려주는 장치임
    // 공식문서에 나옴
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise(); // store.sagatask에서 등록해놓음(index.js에서)
    /// /////////////////////////////////////////////////
  }
);
export default index;
