import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { StarFilled } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { ReviewStyle } from '../style/ReviewStyle';

const review = () => {
  const { reviews } = useSelector((state) => state.review);

  return (
    <ReviewStyle>
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
        {reviews.map((r) => (
          <div className="review_section" key={r.reviewId}>
            <div>
              <Link href={`/product/product_review/${r.reviewId}`}>
                <a>
                  <img src={r.reviewImage} />
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
export default review;
