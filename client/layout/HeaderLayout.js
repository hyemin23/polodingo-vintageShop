import React, { useState } from "react"
import Link from "next/link"
import styled from "styled-components"
import {
  BarsOutlined,
  CloseOutlined,
  InstagramOutlined,
  SearchOutlined,
} from "@ant-design/icons"
import { useRouter } from "next/router"
import { isMobile } from "../style/theme"

//children : 레이아웃으로 감싸진 당한 태그들 모두
const HeaderLayout = ({ children }) => {
  const router = useRouter()
  const [navToggleBtn, setNavToggleBtn] = useState(false)

  return (
    <header>
      <HeaderInner router={router}>
        <button
          className="nav___toggle_btn"
          onClick={() => setNavToggleBtn((prev) => !prev)}
        >
          {navToggleBtn ? <CloseOutlined /> : <BarsOutlined />}
        </button>

        <ul className={navToggleBtn ? "open_items" : "close_items"}>
          <li>
            <Link href="/help">
              <a>HELP</a>
            </Link>
          </li>
          <li>
            <Link href="/notice">
              <a>NOTICE</a>
            </Link>
          </li>
          <li>
            <Link href="/consignment">
              <a>CONSIGNMENT SALES</a>
            </Link>
          </li>
          <li>
            <Link href="/shop">
              <a>SHOP</a>
            </Link>
          </li>
        </ul>

        {/*로고*/}
        {!navToggleBtn ? (
          <Logo>
            <Link href="/">
              <a>POLODINGO</a>
            </Link>
          </Logo>
        ) : (
          ""
        )}

        <ul className={navToggleBtn ? "open_items" : "close_items"}>
          <li>
            <a href="#">
              <SearchOutlined />
            </a>
          </li>

          <li>
            <Link href="/signup">
              <a>LOGIN</a>
            </Link>
          </li>
          <li>
            <Link href="/myshop">
              <a>MYSHOP</a>
            </Link>
          </li>
          <li>
            <Link href="/review">
              <a>REVIEW</a>
            </Link>
          </li>
          <li>
            <a href="#">
              <InstagramOutlined />
            </a>
          </li>
        </ul>
      </HeaderInner>
    </header>
  )
}

const HeaderInner = styled.div`
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

const Logo = styled.div`
    display : flex;
    padding : 0.2rem 2rem;
    
    a{
        font-family: 'Cinzel', serif;
        font-size : 2rem;
    }

    ${isMobile}{

        a{
            font-size : 1.5rem;
            display : block;
        }

          .open_items{
            display;
        }

    }

`

export default HeaderLayout
