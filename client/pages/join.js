import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { USER_REGISTER_REQUEST } from '../reducers/action';
// eslint-disable-next-line import/no-extraneous-dependencies
// import Swal from 'sweetalert2';
import { SignFormStyle } from '../style/FormStyle';

const join = () => {
  const dispatch = useDispatch();
  const { isJoinDone, userInfo } = useSelector((state) => state.user);
  const password = useRef();
  const router = useRouter();
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
      // id값 추가로 전달해야함
      roleType: 'ROLE_USER',
    };

    Object.assign(result, data);
    delete result.userRpw;

    dispatch({
      type: USER_REGISTER_REQUEST,
      data: result,
    });
  };

  useEffect(() => {
    if (isJoinDone) {
      alert('회원가입 되었습니다!');
      router.push('/');
    }
  }, [isJoinDone === true && userInfo]);

  return (
    <SignFormStyle>
      <div className="signForm_div">
        <h2>JOIN</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form__content">
            <p>아이디</p>
            <input
              type="name"
              placeholder="아이디를 입력해주세요."
              {...register('userId', {
                required: validation,
                minLength: {
                  value: 4,
                  message: '4글자 이상 입력해주세요.',
                },
              })}
            />
          </div>
          {errors.id && errors.id.type === 'required' && (
            <p>{errors.id.message}</p>
          )}
          {errors.id && errors.id.type === 'minLength' && (
            <p>{errors.id.message}</p>
          )}
          <div className="form__content">
            <p>이름</p>
            <input
              type="text"
              placeholder="이름을 입력해주세요."
              {...register('name', {
                required: true,
                maxLength: 5,
              })}
            />
            {errors.name && errors.name.type === 'required' && (
              <p>필수항목입니다</p>
            )}
            {errors.name && errors.name.type === 'maxLength' && (
              <p>5자 내외로 입력해주세요.</p>
            )}
          </div>

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
