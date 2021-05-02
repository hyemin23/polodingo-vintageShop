import styled from "styled-components"
import { isMobile } from "./theme"

export const SectionOne = styled.section`
  position: relative;
  height: 100vh;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  .showcase_contents {
    text-align: center;
    z-index: 10;

    & h1 {
      display: block;
      font-size: 90px;
      paddding: 0 90px;
      color: ${(prop) => prop.theme.palette.$whitecolor};
    }

    & span {
      padding: 0 90px;
      font-size: 30px;
      color: ${(prop) => prop.theme.palette.$whitecolor};
    }

    ${isMobile} {
      h1 {
        font-size: 3rem;
      }
      span {
        padding: 0;
        font-size: 1rem;
      }
    }
  }

  .section__image {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;

    &:after {
      content: "";
      position: absolute;
      z-index: 1;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      background: rgba(19, 18, 18, 0.5);
    }

    &--a {
      background-image: url("images/mainfirst.jpg");
    }
  }
`

export const SectionTwo = styled.section`
  height: 100vh;
  overflow: hidden;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  .showcase_contents {
    position: absolute;
    width: 100%;
    hegith: 100%;
    background-color: rgb(239, 239, 239);
  }

  .main_banner_lists {
    height: 100vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
    align-content: center;
    width: 100%;
    padding: 10%;

    li {
      width: 33.3333%;
      padding: 1%;
      box-sizing: border-box;
      font-size: 12px;
      text-align: cetner;
    }

    img {
      display: block;
      width: 100%;
    }

    .title {
      margin-top: 10px;
      color: #000;
    }
    span {
      display: inline-block;
      line-height: 1.5;
      font-size: 14px;
      padding-top: 10px;
      padding-bottom: 15px;
      margin-bottom: 10px;
      position: relative;
      font-family: "Libre Baskerville", "Georgia", Times, serif;

      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        left: 0;
        bottom: 0;
        background: #aaa;
      }
    }
  }

  ${isMobile} {
    .main_banner_lists {
      height: 100vh;
      li {
        width: 49.9999%;
        padding: 4px;
        margin-bottom: 25px;
      }
      p {
        font-size: 10px;
      }
      span {
        font-size: 13px;
      }
    }
  }
`
