import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// eslint-disable-next-line import/no-extraneous-dependencies
import Swal from 'sweetalert2';
import { SignFormStyle } from '../style/FormStyle';

const join = () => {
  const { register, handleSubmit, errors } = useForm({ mode: 'onChange' });

  const [validation, setValidation] = useState({
    value: true,
    message: '필수항목입니다.',
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const msg = (_icon, _title, _timeSpeed) => {
    Swal.fire({
      icon: _icon,
      titleText: _title,
      customClass: {
        popup: 'alrtForm',
      },
      timer: _timeSpeed,
      timerProgressBar: true,
    });
  };

  const onError = (e) => {
    msg('error', e.userId.message, 2000);
    console.log('onError 함수의 에러 내용');
    console.log(e);
  };
  return (
    <SignFormStyle>
      <div className="signForm_div">
        <h2>JOIN</h2>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <div className="form__content">
            <p>아이디</p>
            <input
              type="name"
              placeholder="Enter name"
              {...register('userId', {
                required: validation,
                minLength: {
                  value: 4,
                  message: '4글자 이상 입력해주세요.',
                },
              })}
            />
          </div>
          <div className="form__content">
            <p>이메일</p>
            <input
              type="email"
              placeholder="Enter email"
              {...register('userEmail')}
            />
          </div>
          <div className="form__content">
            <p>비밀번호</p>
            <input
              type="password"
              placeholder="Enter password"
              {...register('userPw', {
                required: validation,
                minLength: {
                  value: 4,
                  message: '4글자 이상 입력해주세요.',
                },
              })}
            />
          </div>
          <div className="form__content">
            <p>비밀번호 확인</p>
            <input
              type="password"
              placeholder="Confirm password"
              {...register('userRpw')}
            />
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
