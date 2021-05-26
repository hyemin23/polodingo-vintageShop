import Head from 'next/head';
import React from 'react';
import { END } from 'redux-saga';
import { LOAD_USER_INFO_REQUEST } from '../reducers/action';
import wrapper from '../store/configureStore';
import { AboutStyle } from '../style/AboutStyle';

const consignment = () => {
  return (
    <>
      <Head>
        <title>폴로딩고 | 소개</title>
      </Head>

      <AboutStyle>
        <div className="wrap">
          <div className="container">
            <div className="titleArea">
              <h2>STORY</h2>
            </div>
            <div className="company">
              <ul>
                <li className="text">
                  <h2 className="scroll-fade motion4">솔직한 빈티지 스토어</h2>
                  <h2 className="title">폴로딩고</h2>
                  <p className="scroll-fade motion1">
                    우리에게 소중한 것은 돈을 버는 것이 아닙니다.
                  </p>
                  <p> 당신에게 행복함을 나눠드리고</p>
                  <p> 삶의 일부가 되길 원합니다.</p>
                  <p> 또 속지 않고 구매하시길 원합니다.</p>

                  <p>
                    <b>SAVE THE EARTH</b>
                  </p>
                  <p>당신이 이곳에서 소비한다면,</p>
                  <p> 당신을 위한 소비일뿐만 아니라</p>
                  <p>지구를 위한 소비입니다.</p>
                </li>
                <li className="img_zone">
                  <img src="/images/company_img.jpg" alt="이미지" />
                </li>
                <li className="text">
                  <p className="scroll-fade motion2">
                    당신과 지구를 위한 소비를 하고 싶다면,
                  </p>
                  <p> 지금 바로 폴로디움의 아이템들을 만나보세요.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </AboutStyle>
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

export default consignment;
