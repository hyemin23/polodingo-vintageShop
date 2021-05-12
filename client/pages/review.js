import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { StarFilled } from '@ant-design/icons';
import { ReviewStyle } from '../style/ReviewStyle';

const review = () => {
  return (
    <ReviewStyle>
      <div className="review_main_title">
        <h2>REVIEW</h2>
      </div>
      <Head>
        <title>REVIEW - 폴로딩고</title>
      </Head>
      <div className="review_contents">
        <div className="review_section">
          <div>
            <Link
              href="/product/product_review/[id]"
              as="/product/product_review/1"
            >
              <a>
                <img src="/images/review1.jpg" />
              </a>
            </Link>
          </div>
          <div className="des_zone">
            <div className="des_title">
              <p>정말예뻐요</p>
            </div>
            <div className="des_content">
              <p>만족합니당</p>
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

        <div className="review_section">
          <div>
            <Link
              href="/product/product_review/[id]"
              as="/product/product_review/1"
            >
              <img src="/images/review2.jpg" />
            </Link>
          </div>
          <div className="des_zone">
            <div className="des_title">
              <p>정말예뻐요</p>
            </div>
            <div className="des_content">
              <p>만족합니당</p>
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

        <div className="review_section">
          <Link
            href="/product/product_review/[id]"
            as="/product/product_review/1"
          >
            <a>
              <img src="/images/review3.jpg" />
            </a>
          </Link>
          <div className="des_zone">
            <div className="des_title">
              <p>정말예뻐요</p>
            </div>
            <div className="des_content">
              <p>만족합니당</p>
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

        <div className="review_section">
          <Link
            href="/product/product_review/[id]"
            as="/product/product_review/1"
          >
            <a>
              <img src="/images/review4.jpg" />
            </a>
          </Link>
        </div>

        <div className="review_section">
          <Link
            href="/product/product_review/[id]"
            as="/product/product_review/1"
          >
            <a>
              <img src="/images/review5.jpg" />
            </a>
          </Link>
        </div>

        <div className="review_section">
          <Link
            href="/product/product_review/[id]"
            as="/product/product_review/1"
          >
            <a>
              <img src="/images/review6.jpg" />
            </a>
          </Link>
          <div className="des_zone">
            <div className="des_title">
              <p>정말예뻐요</p>
            </div>
            <div className="des_content">
              <p>만족합니당</p>
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

        <div className="review_section">
          <Link
            href="/product/product_review/[id]"
            as="/product/product_review/1"
          >
            <a>
              <img src="/images/review7.jpg" />
            </a>
          </Link>
          <div className="des_zone">
            <div className="des_title">
              <p>정말예뻐요</p>
            </div>
            <div className="des_content">
              <p>만족합니당</p>
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

        <div className="review_section">
          <Link
            href="/product/product_review/[id]"
            as="/product/product_review/1"
          >
            <a>
              <img src="/images/review8.jpg" />
            </a>
          </Link>
        </div>

        <div className="review_section">
          <Link
            href="/product/product_review/[id]"
            as="/product/product_review/1"
          >
            <a>
              <img src="/images/review9.jpg" />
            </a>
          </Link>
          <div className="des_zone">
            <div className="des_title">
              <p>정말예뻐요</p>
            </div>
            <div className="des_content">
              <p>만족합니당</p>
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

        <div className="review_section">
          <Link
            href="/product/product_review/[id]"
            as="/product/product_review/1"
          >
            <a>
              <img src="/images/review10.jpg" />
            </a>
          </Link>
        </div>
      </div>
    </ReviewStyle>
  );
};
export default review;
