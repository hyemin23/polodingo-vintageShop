import styled from "styled-components";

export const ProductStyle = styled.div`
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
        font-weight: 300;
        padding: 5px 0 0;
        font-size: 14px;
        letter-spacing: -0.03em;
    }

    .products{
        
        display:grid;
        grid-template-columns: repeat(5, 1fr);

        img{
            width : 100%;
            height : auto;
        }


    .product{
        padding : 0 1rem 2rem 0;

    }
    }
}
`;