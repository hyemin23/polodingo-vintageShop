import styled from "styled-components"
import { isMobile } from "./theme"

export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  paddding: 2rem 3rem;
  width: 100%;
  position: fixed;
  z-index: 2;

  .nav___toggle_btn {
    position: absolute;
    top: 0.5rem;
    right: 2rem;
    font-size: 30px;
    color: white;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    display: none;
  }

  ul {
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
  }

  li {
    padding: 0 1rem;
  }

  a {
    color: ${(props) =>
      props.router.pathname === "/"
        ? `${props.theme.palette.$whitecolor}`
        : `${props.theme.palette.$darkcolor}`} !important;
    font-size: 16px;
    font-weight: 400;
  }
  a:visited {
    color: transparent;
  }

  ${isMobile} {
    padding: 0.75rem 2rem;
    display: block;
    background-color: ${(props) => props.theme.palette.$darkcolor};
    width: 100%;

    a {
      color: ${(props) => props.theme.palette.$whitecolor} !important;
    }

    .nav___toggle_btn {
      display: block;
    }

    ul {
      margin: auto;
      display: block;
      text-align: center;
      display: none;
    }

    .open_items {
      display: block;
    }
  }
`

export const Logo = styled.div`
    display : flex;
    padding : 0.2rem 2rem;
    
    a{
        font-family: 'Cinzel', serif;
        font-size : 2rem;
    }

    ${isMobile}{
        padding : 0;
        
        a{
            font-size : 1.5rem;
            display : block;
        }

          .open_items{
            display;
        }

    }

`
export const SearchForm = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  width: 100%;
  z-index: -1;
  padding: 10rem 0;
  text-align: center;
  box-shadow: 0 15px 15px 1px rgb(0 0 0 /30%);

  input {
    font-size: 1rem;
    outlinle: 0;
    border-width: 0 0 2px;
    heigth: 2rem;
    width: 800px;
    margin-right: 1rem;
  }

  fieldset {
    border: none;
  }
  button {
    cursor: pointer;
    background-color: transparent;
    font-size: 1.2rem;
    border: none;
  }

  a {
    padding: 0 10px;
    color: black !important;
  }
  span {
    font-size: 20px !important;
    padding: 0 10px;
  }

  ${isMobile} {
    z-index: 2;
    width: 100%;

    input {
      border-width: 0 0 2px;
      width: 50%;
      margin: 0;
    }

    button {
      margin-left: 10px;
    }
  }
`
