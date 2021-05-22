import Head from 'next/head';
import React, { useEffect } from 'react';
import { END } from 'redux-saga';
import MainSection from '../components/MainSection';
import { LOAD_USER_INFO_REQUEST } from '../reducers/action';
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
    // 1.index js의 리듀서 구조를 바꿔야함 중첩되게 끔

    const { req } = context;
    const { cookie } = req.headers;

    // console.log('쿠ㅋㅣ ', cookie.split('=')[1]);

    context.store.dispatch({
      type: LOAD_USER_INFO_REQUEST,
      data: cookie,
    });

    // 위에 REQUEST가 SUCCESS로 바뀔 때 까지 기다려주는 장치임
    // 공식문서에 나옴
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise(); // store.sagatask에서 등록해놓음(index.js에서)
    /// /////////////////////////////////////////////////
  }
);

export default index;
