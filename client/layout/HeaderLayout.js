import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import {
  BarsOutlined,
  CloseOutlined,
  InstagramOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { HeaderInner, Logo, SearchForm } from '../style/HeaderStyle';
import { LOG_OUT_REQUEST } from '../reducers/action';

// children : 레이아웃으로 감싸진 당한 태그들 모두
const HeaderLayout = ({ children }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const router = useRouter();
  const [navToggleBtn, setNavToggleBtn] = useState(false);
  const [SearchPopOpen, setSearchPopOpen] = useState(false);

  const SearchPopClick = () => {
    setSearchPopOpen((prev) => !prev);
  };

  const logout = () => {
    // 쿠키 지우기
    localStorage.clear();

    // 서버쪽에서 response헤더값의 토큰을 지워줘야함
    dispatch({
      type: LOG_OUT_REQUEST,
    });

    alert('로그아웃 되었습니다!');
  };

  const onSubmit = useCallback((data) => {
    setSearchPopOpen((prev) => !prev);

    // 쿼리 스트링 형식으로 보내야함
    // 중간 과정으로 보내야함 Product Components
    //     router.push(
    // `product/${encodeURIComponent(data.searchInfo.replace(/(\s*)/g, ''))}`
    // );

    router.push({
      pathname: `product/`,
      query: {
        searchInfo: data.searchInfo.replace(/(\s*)/g, ''),
      },
    });

    router.query();
  }, []);

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
          {/* <li>
            <Link href="/question">
              <a>Q&A</a>
            </Link>
          </li> */}
          <li>
            <Link href="/notice">
              <a>LOCATION</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
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
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                      <fieldset>
                        <input
                          className="keyWord"
                          {...register('searchInfo')}
                        />
                        <button type="submit">
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

          {me && me ? (
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
