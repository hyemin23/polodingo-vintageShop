import Head from "next/head";
import React from "react";
import styled from "styled-components";

import { gsap } from 'gsap';


// register ScrollTrigger
//gsap.registerPlugin(ScrollTrigger);

const index = () => {
    return (
        <div>
            <Head>
                <title>메인페이지</title>
            </Head>
            {/* 첫 번째 섹션 */}
            <SectionOne className="section showcase" >
                <div className="showcase_img">
                    <img src="images/mainfirst.jpg"></img>
                </div>
                <div className="showcase_event">
                    <h1>NEW IN</h1>
                    <h3>모든 상품 90%세일</h3>
                </div>
            </SectionOne>

            {/* 두 번째 섹션 */}
            <section>
                <div>
                    섹션2
                </div>
            </section>


            {/* 세 번째 섹션 */}
            <section>
                <div>
                    섹션3
                </div>
            </section>
        </div>
    )

}

const SectionOne = styled.section`

    box-sizing : border-box;
    margin:0;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : center;
    height : 100vh;
    overflow : hidden;

    .showcase_img{
        z-index:-1;
       top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: absolute;
    
    img{
      min-width: 100%;
      min-height: 100%;
      position: absolute;
      top:50%;
      left:50%;
      transform: translate(-50%, -50%);
      object-fit: cover;
    }

    &:after {
      content: '';
      position: absolute;
      z-index: 1;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      background: rgba(19, 18, 18, 0.5);
    }

    .showcase_event{
        font-size : 90px;
    }
}
`;


export default index;