import { SignFormStyle } from "../style/FormStyle";

const join = () => {
  return (
    <SignFormStyle>
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
    </SignFormStyle>
  );
};

export default join;
