import styled from "styled-components";

export const SectionOne = styled.section`

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



export const SectionTwo = styled.section`
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


export const SectionThree = styled.section`


`;