import Link from "next/link"
import styled from "styled-components"
import { isMobile } from "../style/theme"

const login = () => {
  return (
    <Loginform>
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
    </Loginform>
  )
}

const Loginform = styled.div`
  padding: 15rem 0 20rem 0;
  width: 100%;
  height: 1125px;
  display: flex;
  flex-direction: column;
  text-align: center;

  h2 {
    display: block;
    font-size: 1.3em;
  }

  .form__content {
    margin: 1.6rem 0;

    input {
      width: 25%;
      padding: 0 10px;
    }
  }

  .form__content__subtitle {
    margin-top: 1rem;

    a {
      color: #cacaca;
    }
  }

  ${isMobile} {
    width: 100%;
    height: 650px;

    input {
      width: 50% !important;
    }
    button {
      font-size: 10px;
    }
  }
`

export default login
