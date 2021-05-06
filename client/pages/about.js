import Head from "next/head"
import React from "react"
import styled from "styled-components"
import { isMobile } from "../style/theme"

const consignment = () => {
  return (
    <>
      <Head>
        <title>폴로딩고</title>
      </Head>

      <About>
        <div className="wrap">
          <div className="container">
            <div className="titleArea">
              <h2>STORY</h2>
            </div>
            <div className="company">
              <ul>
                <li className="text">
                  <h2 className="scroll-fade motion4">솔직한 빈티지 스토어</h2>
                  <h2 className="title">폴로딩고</h2>
                  <p className="scroll-fade motion1">
                    우리에게 소중한 것은 돈을 버는 것이 아닙니다.
                  </p>
                  <p> 당신에게 행복함을 나눠드리고</p>
                  <p> 삶의 일부가 되길 원합니다.</p>
                  <p> 또 속지 않고 구매하시길 원합니다.</p>

                  <p>
                    <b>SAVE THE EARTH</b>
                  </p>
                  <p>당신이 이곳에서 소비한다면,</p>
                  <p> 당신을 위한 소비일뿐만 아니라</p>
                  <p>지구를 위한 소비입니다.</p>
                </li>
                <li className="img_zone">
                  <img src="/images/company_img.jpg" alt="이미지" />
                </li>
                <li className="text">
                  <p className="scroll-fade motion2">
                    당신과 지구를 위한 소비를 하고 싶다면,
                  </p>
                  <p> 지금 바로 폴로디움의 아이템들을 만나보세요.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </About>
    </>
  )
}

const About = styled.div`
  padding: 10rem 0rem;
  text-align: center;

  .titleArea {
    min-height: 30px;
    padding: 0 0 34px;
    transition: all 0.5s;
    animation: dj-mov-left-right 2s 1;
    animation-timing-function: ease;
    animation-direction: normal;

    h2 {
      font-size: 25px;
      letter-spacing: 0.08em;
      font-weight: normal;
      padding : 0 0 50px; 0;
    }
  }

  .company {
      
    width: 100%;
    margin: 0 auto;

    img {
      width: 100%;
    }

    h2{
        font-weight:100;
        font-size: 40px;
    }

    .motion4{
        transition: transform 1s ease-in-out,opacity .5s ease-in-out;
            animation-delay: 3s;
      letter-spacing: -0.05em;
    }
    
    .title {
      padding: 0 0 50px 0;
    }

    p{
        line-height: 1.5;
    padding: 10px 0 10px;
    font-size: 20px;
    font-weight: 300;
    letter-spacing: -0.03em;
    }
  }

   ${isMobile}{
        padding: 10rem 0rem;

         .titleArea {
            h2{
                font-size:25px;
            }
         }

        .company{

            h2{
                font-weight:100;
                font-size: 30px;
            }


            p{
                line-height: 1.3;
            padding: 10px 0 10px;
            font-size: 18px;
            font-weight: 300;
            letter-spacing: -0.03em;
            }

       }
    }

`

export default consignment
