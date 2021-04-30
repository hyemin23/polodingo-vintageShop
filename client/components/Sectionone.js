
import React from "react";
import styled from "styled-components";

const Sesctionone = () => {
    return (
        <SectionOne>
            <div className="showcase_img">
                <img src="images/mainfirst.jpg"></img>
            </div>
            <div className="showcase_contents">
                <div className="showcase_event">
                    <h1>90% SALE</h1>
                    <span>세일 기간 중 교환 및 반품이 불가능합니다.</span>
                </div>
            </div>
        </SectionOne>
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

    .showcase_event{
        text-align:center;  
    }

    .showcase_event h1{
        display : block;
        font-size : 90px;
        padding : 0 90px;
        color : ${prop => prop.theme.palette.$whitecolor};
    }
    .showcase_event span{
        padding : 0 90px;
        font-size : 30px;
        color : ${prop => prop.theme.palette.$whitecolor};
    }

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

    
}
`;

export default Sesctionone;