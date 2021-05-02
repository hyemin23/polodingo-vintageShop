import styled from "styled-components";

export const ProductStyle = styled.div`
    background-color: ${prop => prop.theme.palette.$whitecolor};
    .container {
        padding : 60px 5%;
        text-align : center;

    h2{
        font-size : 24px;
        letter-spacing : 0.1em;
    }
    
    .bar{
            margin: 20px auto 15px;
            height: 2px;
            width: 35px;
            display: block;
            background: #111;
    }

    .ment {
        display:block;
        margin-top : 20px;
        color: #aaa;
        font-weight: 400;
        padding: 10px 0 30px;
        font-size: 16px;
        letter-spacing: -0.03em;
    }

    .products{
        
        display:grid;
        grid-template-columns: repeat(5, 1fr);
        column-gap : 10px;
        row-gap : 60px;

        img{
            width :100%;
            height : auto;
        }


    .product{
        padding : 0 1rem 2rem 0;
    }

    .name {
            padding : 5px 0 12px;
            margin : 12px 0 2px;
            display : block;
            border-bottom : 1px solid #ececec;

            span {
                color : #222 !important;
                font-size : 16px !important;
                letter-spacing: -0.03em;
                font-weight: 400;
                white-space: pre-line;
            }
        }

        

    .promotion{
        img{
            padding : 10px 0 0 0 ;
            width : 10%;
            height : auto;
        }
    }


    .price_all{
        padding : 10px 0 0 0;
    }

    .price_all span{
        display : inline-block;
        padding : 0 3px;
        font-size:16px;
        font-weight: 700;
        color: #222222; 
    }

    .price_all .price{
        color : #bbb;
        text-decoration:line-through;
    }
    

    }
}
`;