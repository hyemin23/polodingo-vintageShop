import React from 'react';
import Link from "next/link";
import styled from "styled-components";
import { InstagramOutlined, SearchOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

//children : 레이아웃으로 감싸진 당한 태그들 모두
const HeaderLayout = ({ children }) => {
    const router = useRouter();

    return (
        <header>
            <HeaderInner router={router}>
                <ul>
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
                            <a>
                                CONSIGNMENT SALES
                                </a>
                        </Link>
                    </li>
                </ul>

                {/*로고*/}
                <Logo>
                    <Link href="/">
                        <a>
                            POLODINGO
                        </a>
                    </Link>
                </Logo>
                <ul>
                    <li>
                        <a href="#" >
                            <SearchOutlined />
                        </a>
                    </li>

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
                    <li>
                        <a href="#">
                            <InstagramOutlined />

                        </a>
                    </li>

                </ul>
            </HeaderInner>
            {children}
        </header>

    )
}

const HeaderInner = styled.div`

    display : flex;
    justify-content: space-between;
    z-index : 30;
    ul{  
        display : flex;
        padding : 1rem 2rem;
    }
    li{
        
        padding : 0 1rem;
    }
    a{
        
        color : ${props => props.router.pathname === "/" ? `${props.theme.palette.$whitecolor}` : `${props.theme.palette.$darkcolor}`} !important;
        font-size : 16px;
        font-weight : 400;
    }
    a:visited{
        color : transparent;
    }
`;

const Logo = styled.div`
    display : flex;
    padding : 0.2rem 2rem;
    a{
        font-family: 'Cinzel', serif;
        font-size : 2rem;
    }
`;

export default HeaderLayout;