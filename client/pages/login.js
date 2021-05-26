import React, { useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';

import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import Head from 'next/head';
import { LoginformStyle } from '../style/FormStyle';
import { LOG_IN_REQUEST } from '../reducers/action';

const login = () => {
  const dispatch = useDispatch();
  const { isLoginDone, me } = useSelector((state) => state.user);
  const token = me?.accessToken || null;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // dispatch(loginAction(data));
    dispatch({
      type: LOG_IN_REQUEST,
      data,
    });
  };

  // 로그인 성공시 쿠키에 저장하도록 해야함
  useEffect(() => {
    if (isLoginDone === true) {
      localStorage.setItem(
        'vintage-info-user',
        JSON.stringify({
          token,
        })
      );
      Router.push('/');
    }
  }, [isLoginDone]);

  return (
    <LoginformStyle>
      <Head>
        <title>폴로딩고 | 로그인</title>
      </Head>

      <h2>Sign In</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form__content">
          <div>Email Address</div>
          <input
            type="text"
            placeholder="Enter Id"
            {...register('userId', {
              required: { value: true, message: '아이디를 입력해주세요' },
            })}
          />
        </div>
        {errors && errors.userId && (
          <p role="alert" style={{ color: 'red' }}>
            {errors.userId.message}
          </p>
        )}
        <div className="form__content">
          <div>Password</div>
          <input
            type="password"
            placeholder="Enter password"
            {...register('password', {
              required: {
                value: true,
                message: '비밀번호를 입력해주세요.',
              },
            })}
          />
        </div>
        {errors && errors.userPw && (
          <p role="alert" style={{ color: 'red' }}>
            {errors.userPw.message}
          </p>
        )}

        <button type="submit" className="btn">
          SIGN IN
        </button>
      </form>
      <div className="form__content__subtitle">
        New Customer?
        <Link href="/join">
          <a> REGISTER</a>
        </Link>
      </div>
    </LoginformStyle>
  );
};

export default login;
