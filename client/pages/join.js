import styled from "styled-components"
import { isMobile } from "../style/theme"

const join = () => {
  return (
    <SignForm>
      <div className="signForm_div">
        <h2>JOIN</h2>
        <form>
          <div className="form__content">
            <p>아이디</p>
            <input type="name" placeholder="Enter name" />
          </div>
          <div className="form__content">
            <p>이메일</p>
            <input type="email" placeholder="Enter email" />
          </div>
          <div className="form__content">
            <p>비밀번호</p>
            <input type="password" placeholder="Enter password" />
          </div>
          <div className="form__content">
            <p>비밀번호 확인</p>
            <input type="password" placeholder="Confirm password" />
          </div>
          <div className="register_btn">
            <button className="btn">REGISTER</button>
          </div>
        </form>
      </div>
    </SignForm>
  )
}

const SignForm = styled.div`
  display: flex;
  justify-content: center;
  flex-dirction: row;
  height: 1125px;
  padding: 15rem 0 20rem 0;

  .signForm_div {
    display :flex
    justify-content : center;
    text-align: center;
    width: 50%;
    
  }

  h2 {
    font-size: 26px;
    letter-spacing: 0.08em;
    font-weight: normal;
    margin-bottom : 100px;
  }
  
  input {
    width: 50%;
    height : 30px;
    padding: 10px;
    outline : none;
    border : 1px solid #b2b2b2;
  }
  p{
    color :#353535;
    font-weight :normal;
    font-size : 18px;
    padding : 0.5rem;
  }

  .register_btn {
    margin-top: 50px;
  }

  ${isMobile}{
    padding : 7rem 0 0 0;
    height : 100%;

    h2{
      margin-bottom : 50px;
    }
    .signForm_div {
      width: 100%;
    }
    .register_btn{
      margin-top: 30px;
      margin-bottom:10px;
    }

  }
`
export default join
