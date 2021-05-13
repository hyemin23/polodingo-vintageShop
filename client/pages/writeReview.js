import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { ReviewDetailStyles } from '../style/ReviewStyle';

const writeReview = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, error } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <ReviewDetailStyles>
      <div className="writer_container">
        <div>
          <h2>리뷰작성</h2>
        </div>
        <div className="writer_content">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <p>파일 첨부</p>
              <input type="file" />
            </div>
            <div>
              <p>제목</p>
              <input type="text" />
            </div>
            <div>
              <p>내용</p>
              <textarea name="" />
            </div>
            <button type="submit">작성</button>
          </form>
        </div>
      </div>
    </ReviewDetailStyles>
  );
};

export default writeReview;
