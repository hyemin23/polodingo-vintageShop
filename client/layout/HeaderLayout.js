import React, { useState } from 'react';
import Link from 'next/link';
import {
  BarsOutlined,
  CloseOutlined,
  InstagramOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderInner, Logo, SearchForm } from '../style/HeaderStyle';
import { LOG_OUT_REQUEST } from '../reducers/action';

// children : 레이아웃으로 감싸진 당한 태그들 모두
const HeaderLayout = ({ children }) => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.user);

  const router = useRouter();
  const [navToggleBtn, setNavToggleBtn] = useState(false);
  const [SearchPopOpen, setSearchPopOpen] = useState(false);

  const SearchPopClick = () => {
    setSearchPopOpen((prev) => !prev);
  };

  const logout = () => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  };
  return (
    <header>
      <HeaderInner router={router}>
        <button
          type="button"
          className="nav___toggle_btn"
          onClick={() => setNavToggleBtn((prev) => !prev)}
        >
          {navToggleBtn ? <CloseOutlined /> : <BarsOutlined />}
        </button>

        <ul className={navToggleBtn ? 'open_items' : 'close_items'}>
          <li>
            <Link href="/question">
              <a>Q&A</a>
            </Link>
          </li>
          <li>
            <Link href="/notice">
              <a>NOTICE</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/category/[id]" as="/category/all">
              <a>SHOP</a>
            </Link>
          </li>
        </ul>

        {/* 로고 */}
        {!navToggleBtn ? (
          <Logo>
            <Link href="/">
              <a>POLODINGO</a>
            </Link>
          </Logo>
        ) : (
          ''
        )}

        <ul className={navToggleBtn ? 'open_items' : 'close_items'}>
          <li>
            <a href="#">
              <SearchOutlined onClick={SearchPopClick} />
            </a>
            {SearchPopOpen && (
              <SearchForm SearchPopOpen={SearchPopOpen}>
                <div className="Search_div">
                  <form>
                    <div>
                      <fieldset>
                        <input className="keyWord" />
                        <button type="button">
                          <strong>SEARCH</strong>
                        </button>
                        <a href="#" onClick={SearchPopClick}>
                          <span>X</span>
                        </a>
                      </fieldset>
                    </div>
                  </form>
                </div>
              </SearchForm>
            )}
          </li>

          {isLoggedIn ? (
            <li>
              <span>
                <a href="#" onClick={logout}>
                  LOGOUT
                </a>
              </span>
            </li>
          ) : (
            <li>
              <Link href="/login">
                <a>LOGIN</a>
              </Link>
            </li>
          )}

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
  );
};

export default HeaderLayout;
