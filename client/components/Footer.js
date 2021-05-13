import React from 'react';
import { FooterStyle } from '../style/Footer';

const Footer = () => {
  return (
    <FooterStyle>
      <div>
        <div className="title">
          <h2>C/S</h2>
        </div>
        <div>
          <h4>010-4133-5973</h4>
        </div>
        <div>
          <p>AM 11:00 ~ PM 18:00 (주말 및 공휴일 휴무)</p>
        </div>
      </div>

      <div>
        <h2>COMPANY</h2>
        <div>
          <p>대표:박혜민</p>
          <p>사업자 등록번호:</p>
          <p>Copright @2021 PLODINGO</p>
        </div>
      </div>
      <div>
        <h2>BANK</h2>
        <div>
          <p>국민은행:244002-04-251093</p>
          <p>예금주:박혜민</p>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
