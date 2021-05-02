import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterStyle>
      <div>
        <div class="title">
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
  )
}

const FooterStyle = styled.div`
  border-top: 1px solid #ececec;
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 10px 0 50px 0;
  text-align: center;
`

export default Footer
