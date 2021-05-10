import styled from "styled-components"
import { isMobile } from "./theme"

export const LoginformStyle = styled.div`
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

export const SignFormStyle = styled.div`
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
