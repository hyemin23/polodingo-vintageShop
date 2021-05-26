import React, { useState } from 'react';
import router from 'next/router';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react/cjs/react.development';
import Head from 'next/head';
import { END } from 'redux-saga';
import { LOAD_USER_INFO_REQUEST, UPLOAD_IMG_REQUEST } from '../reducers/action';
import { ReviewDetailStyles } from '../style/ReviewStyle';
import wrapper from '../store/configureStore';

const writeReview = () => {
  const dispatch = useDispatch();

  const { me } = useSelector((state) => state.user);
  const { isImgDone } = useSelector((state) => state.review);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    shouldFocusError: true,
  });
  const [imgPath, setImgPath] = useState();

  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append('images', imgPath);
    formData.append('reviewTitle', data.reviewTitle);
    formData.append('reviewContent', data.reviewContent);
    formData.append('userId', me.id);

    dispatch({
      type: UPLOAD_IMG_REQUEST,
      data: formData,
    });

    setImgPath('');
  };

  const onChange = (e) => {
    setImgPath(e.target.files[0]);

    // dispatch({
    //   type: UPLOAD_IMG_REQUEST,
    //   data: formData,
    // });
  };

  useEffect(() => {
    if (isImgDone) {
      alert('등록되었습니다!');
      router.push('/review');
    }
  }, [isImgDone]);
  return (
    <ReviewDetailStyles>
      <Head>
        <title>폴로딩고 | 리뷰작성</title>
      </Head>
      <div className="writer_container">
        <div className="writer_title">
          <h2>리뷰작성</h2>
        </div>
        <div className="writer_content">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="title_input">
              <p>제목</p>
              <input
                type="text"
                {...register('reviewTitle', {
                  required: {
                    value: true,
                    message: '제목을 입력해주세요.',
                  },
                })}
              />

              {errors.reviewTitle?.message && (
                <p style={{ color: 'red' }}>{errors.reviewTitle.message}</p>
              )}
            </div>
            <div className="content_input">
              <p>내용</p>
              <textarea
                name=""
                {...register('reviewContent', {
                  required: {
                    value: true,
                    message: '내용을 입력해주세요.',
                  },
                })}
              />
              {errors.reviewContent?.message && (
                <p style={{ color: 'red' }}>{errors.reviewContent.message}</p>
              )}
            </div>
            <div className="file_input">
              <input type="file" onChange={onChange} />
            </div>
            <div className="button_div">
              <button type="submit" className="btn">
                작성
              </button>
            </div>
          </form>
        </div>
      </div>
    </ReviewDetailStyles>
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

export default writeReview;
