import Link from "next/link";
import { LoginformStyle } from "../style/FormStyle";

const login = () => {
  return (
    <LoginformStyle>
      <h2>Sign In</h2>
      <form>
        <div className="form__content">
          <div>Email Address</div>
          <input type="email" placeholder="Enter email" />
        </div>
        <div className="form__content">
          <div>Password</div>
          <input type="password" placeholder="Enter password" />
        </div>
        <button className="btn">SIGN IN</button>
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
