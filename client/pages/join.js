import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { USER_REGISTER_REQUEST } from '../reducers/action';
// eslint-disable-next-line import/no-extraneous-dependencies
// import Swal from 'sweetalert2';
import { SignFormStyle } from '../style/FormStyle';

const join = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const password = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  password.current = watch('password');
  const [validation, setValidation] = useState({
    value: true,
    message: '필수항목입니다.',
  });

  const onSubmit = (data) => {
    const result = {
      roleType: 'ROLE_USER',
    };
    Object.assign(result, data);
    delete result.userRpw;

    dispatch({
      type: USER_REGISTER_REQUEST,
      data: result,
    });
  };

  return (
    <SignFormStyle>
      <div className="signForm_div">
        <h2>JOIN</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form__content">
            <p>아이디</p>
            <input
              type="name"
              name="name"
              placeholder="Enter name"
              {...register('name', {
                required: validation,
                minLength: {
                  value: 4,
                  message: '4글자 이상 입력해주세요.',
                },
              })}
            />
          </div>
          {errors.userId && errors.userId.type === 'required' && (
            <p>{errors.userId.message}</p>
          )}
          {errors.userId && errors.userId.type === 'minLength' && (
            <p>{errors.userId.message}</p>
          )}
          <div className="form__content">
            <p>이메일</p>
            <input
              type="email"
              placeholder="Enter email"
              {...register('email', {
                required: true,
                maxLength: 30,
              })}
            />
            <p>
              {errors.email && errors.email.type === 'required' && (
                <p>필수항목입니다</p>
              )}
              {errors.email && errors.email.type === 'maxLength' && (
                <p>30자 내외로 입력해주세요.</p>
              )}
            </p>
          </div>
          <div className="form__content">
            <p>비밀번호</p>
            <input
              type="password"
              placeholder="Enter password"
              {...register('password', {
                required: validation,
                minLength: {
                  value: 4,
                  message: '4글자 이상 입력해주세요.',
                },
              })}
            />
            {errors.password && errors.password.type === 'minLength' && (
              <p>{errors.password.message}</p>
            )}
          </div>
          <div className="form__content">
            <p>비밀번호 확인</p>
            <input
              type="password"
              name="password2"
              placeholder="Confirm password"
              {...register('userRpw', {
                required: true,
                validate: (value) => {
                  return value === password.current;
                },
              })}
            />
            {errors.userRpw && errors.userRpw.type === 'validate' && (
              <p>비밀번호가 일치하지 않습니다.</p>
            )}
          </div>
          <div className="register_btn">
            <button type="submit" className="btn">
              REGISTER
            </button>
          </div>
        </form>
      </div>
    </SignFormStyle>
  );
};

export default join;
