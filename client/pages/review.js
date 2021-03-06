import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { StarFilled } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';
import { ReviewStyle } from '../style/ReviewStyle';
import {
  LOAD_REVIEW_LIST_REQUEST,
  LOAD_USER_INFO_REQUEST,
} from '../reducers/action';
import wrapper from '../store/configureStore';

const review = () => {
  const { reviews, isReviewDone } = useSelector((state) => state.review);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LOAD_REVIEW_LIST_REQUEST,
    });
  }, []);

  return (
    <ReviewStyle>
      <Head>
        <title>폴로딩고 | 리뷰</title>
      </Head>

      <div className="review_main_title">
        <h2>REVIEW</h2>
      </div>
      <Head>
        <title>REVIEW - 폴로딩고</title>
      </Head>
      <div className="writebtn">
        <Link href="/writeReview">
          <a>
            <button type="button" className="btn">
              글쓰기
            </button>
          </a>
        </Link>
      </div>

      <div className="review_contents">
        {isReviewDone &&
          reviews.map((r) => (
            <div className="review_section" key={r.id}>
              <div>
                <Link href={`/product/product_review/${r.id}`}>
                  <a>
                    <img src={r.src} />
                  </a>
                </Link>
              </div>
              <div className="des_zone">
                <div className="des_title">
                  <p>{r.reviewTitle}</p>
                </div>
                <div className="des_content">
                  <p>{r.reviewContent}</p>
                </div>
                <div>
                  <StarFilled
                    style={{ color: 'orangered', padding: '0 0 10px 0' }}
                  />
                  <StarFilled style={{ color: 'orangered' }} />
                  <StarFilled style={{ color: 'orangered' }} />
                  <StarFilled style={{ color: 'orangered' }} />
                  <StarFilled style={{ color: 'orangered' }} />
                </div>
              </div>
            </div>
          ))}
      </div>
    </ReviewStyle>
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

export default review;
