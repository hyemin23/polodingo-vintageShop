import React from 'react';
import ProptTypes from "prop-types";
import Link from "next/link";
import style from "styled-components";

//children : 레이아웃으로 감싸진 당한 태그들 모두
const HeaderLayout = () => {
    return (
        <div className="_header">
            <HeaderInner>
                <ul>
                    <li>
                        <Link href="/help">
                            <a>고객센터</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/notice">
                            <a>공지사항</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/consignment">
                            <a>위탁판매</a>
                        </Link>
                    </li>
                </ul>

                {/*로고*/}
                <Logo>
                    <a href="/">
                        <img src="/images/logo.png" style={{ height: "40px" }} alt="로고" />
                    </a>
                </Logo>

                <ul>
                    <li>
                        <Link href="/signup">
                            <a>
                                LOGIN
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/myshop">
                            <a>
                                MYSHOP
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/review">
                            <a>
                                REVIEW
                            </a>
                        </Link>
                    </li>
                </ul>
            </HeaderInner>
        </div>
    )
}

const HeaderInner = style.div`

    display : flex;
    justify-content: space-between;

    ul{
        display : flex;
        padding : 1rem 2rem;
    }
    li{
        padding : 0 1rem;
    }
    a{
        font-size : 16px;
        font-weight : 400;
    }
    a:visited{
        color : transparent;
    }
`;

const Logo = style.div`
    display : flex;
    padding : 1rem 2rem;
`;

export default HeaderLayout;