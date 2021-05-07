import styled from "styled-components"

export const StockStyle = styled.div`
  width: 100%;
  max-width: 1500px;
  padding: 10rem 0;
  margin: auto;
  text-align: center;

  .cart_container > img, div{
    flex-grow : 1;
    flex-basis : 0px;
  }
  
  .cart_container{
    padding : 1rem;
    display : flex;
    align-items:center;
    border-bottom : 1px solid #b2b2b2;
    

    img{
      max-width : 100px;
      margin-bottom :10px;
      height : auto;
      object-fit : cover;
    }

  }

    .cart_product_title{
      flex-grow : 2;
    }

  .title {
    padding: 0 0 5rem 0;

    h2 {
      font-size: 2rem;
      font-weight: 300;
    }
  }

  .contents {
    h3 {
      font-weight: 200;
      font-size: 1.4rem;
    }
    h4 {
      font-weight: 400;
      font-size: 1rem;
      padding 10px 0;
      color : #f27a7a;
      
    }
  }

  .cart_finall{
    margin-top : 40px;
    margin-bottom : 4rem;

    .cart_total{
      margin-top : 10px;
      font-size : 1rem;
      color : red;
    }
    .btn{
      width:200px;
      margin-top : 20px;
    }
  }
`
