
import React from "react";
import styled from "styled-components";


const Sectiontwo = () => {
    return (
        <SectionTwo>
            <div className="showcase_contents">
                <div class="main_notice">
                    <h2>UPDATE NEW</h2>
                    <ul>
                        <li>
                            <span className="date">2020-04-30</span>
                            <span className="title">
                                <a href="#">업데이트 내용</a>
                            </span>
                        </li>
                    </ul>
                </div>
                <ul className="main_banner_lists">
                    <li>
                        <a href="#"><img src="images/main-banner-top-1.jpg"></img></a>
                        <p class="title"><span>TIE_DYE_TSHIRT</span></p>
                        <p class="summary">다양한 타이다이 티셔츠</p>
                    </li>
                    <li>
                        <a href="#"><img src="images/main-banner-top-2.jpg"></img></a>
                        <p class="title"><span>HAWAIAN SHIRT</span></p>
                        <p class="summary">하와이안 셔츠</p>
                    </li>
                    <li>
                        <a href="#"><img src="images/main-banner-top-3.jpg"></img></a>
                        <p class="title"><span>SWEATSHIRT</span></p>
                        <p class="summary">스타일리쉬 트렌치 코트</p>
                    </li>
                    <li>
                        <a href="#"><img src="images/main-banner-1.jpg"></img></a>
                        <p class="title"><span>NEW CUSTOMERS</span></p>
                        <p class="summary">신규회원 5% 할인 쿠폰 발급!</p>
                    </li>
                    <li>
                        <a href="#"><img src="images/main-banner-2.jpg"></img></a>
                        <p class="title"><span>MEMBER LEVEL</span></p>
                        <p class="summary">빈티지톡 회원등급 안내</p>
                    </li>
                    <li>
                        <a href="#"><img src="images/main-banner-3.jpg"></img></a>
                        <p class="title"><span>CONSIGNMENT SALES</span></p>
                        <p class="summary">위탁판매 안내</p>
                    </li>
                </ul>
            </div>
        </SectionTwo>


    )
}

//min-height값 알아내야함

const SectionTwo = styled.section`
    background-color: rgb(239, 239, 239);
    min-height : 1303px;
    position :relative;

    .main_notice{
        background: #fff;
        width: 98%;
        height: 50px;
        border: 1px solid #ececec;
        margin : 0 1% ;

        h2{

            position: absolute;
            line-height: 50px;
            top: 0;
            left: 30px;
            color: #000;
            font-size: 14px;
            font-weight : normal;

        }
        
        ul{
            padding-left : 160px;
            height: 50px;
            overflow : hidden;
        }

        li{
        height: 50px;
        line-height: 50px;
        text-align: left;
    }

    .data{
        margin-right : 20px;
    }


    }


    .showcase_contents{
        position : absolute;
        text-align :cetner;
        width : 950px;
        margin-left : -475px;
        left : 50%;
        top : 50%;
        height : 625px;
        margin-top : -313px;
    }

    .main_banner_lists{
        text-align:center;

        li{

            display:inline-block;
            width : 33.3333%;
            padding : 1%;
            box-sizing : border-box;
            font-size : 12px;
            text-align :cetner;

        }
        
        img{
            width :100%;
            height: auto;
        }

        .title{
            font-size: 18px;
            font-weight:800;
        }

        & span {
           position: relative;
            display: inline-block;
            line-height: 1.5;
            font-size: 14px;
            padding-bottom : 9px;
            margin-bottom : 10px;
            
        }

        & span ::after{
            position :absolute;
            content : '';
            width : 100%;
            height : 1px;
            left : 0;
            bottom : 0;
            background : #aaa;
        }

        .summary{
            font-size : 14px;
            font-weight : 400;
        }

    }
`;



export default Sectiontwo;
