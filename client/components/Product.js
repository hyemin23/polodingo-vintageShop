import Link from "next/link"
import React from "react"

//나중에 div -> Link로 수정하기
const Product = ({ id }) => {
  console.log(id)

  //useEffect로 id를 받아와서 분기

  //id값으로 product 페이지에 뿌려주기

  return (
    <>
      <Link href="/product/[id]" as="/product/1">
        <a>
          <li>
            <img src="/images/product1.jpg" />
            <div className="inner">
              <strong className="name">
                <span>[ L ] Polo Ralph Lauren 90's Shirt (5051)</span>
              </strong>

              <ul className="spec">
                <li className="price_all">
                  <span className="price">₩60,000</span>
                  <span className="sale ">$50,000</span>
                </li>
              </ul>

              <div className="promotion">
                <img
                  src="/images/ico_product_soldout.gif"
                  className="icon_img"
                  alt="품절"
                />
              </div>
            </div>
          </li>
        </a>
      </Link>

      <li>
        <a className="product">
          <img src="/images/product2.jpg" />
        </a>
        <div className="inner">
          <strong className="name">
            <a href="#">
              <span>[ L ] Polo Ralph Lauren 90's Shirt (5051)</span>
            </a>
          </strong>

          <ul className="spec">
            <li className="price_all">
              <span className="price">₩60,000</span>
              <span className="sale "></span>
            </li>
          </ul>

          <div className="promotion">
            <img
              src="/images/ico_product_soldout.gif"
              className="icon_img"
              alt="품절"
            />
          </div>
        </div>
      </li>

      <li>
        <a className="product">
          <img src="/images/product3.jpg" />
        </a>
        <div className="inner">
          <strong className="name">
            <a href="#">
              <span>[ L ] Polo Ralph Lauren 90's Shirt (5051)</span>
            </a>
          </strong>

          <ul className="spec">
            <li className="price_all">
              <span className="price">₩60,000</span>
              <span className="sale "></span>
            </li>
          </ul>

          <div className="promotion">
            <img
              src="/images/ico_product_soldout.gif"
              className="icon_img"
              alt="품절"
            />
          </div>
        </div>
      </li>

      <li>
        <a className="product">
          <img src="/images/product4.jpg" />
        </a>
        <div className="inner">
          <strong className="name">
            <a href="#">
              <span>[ L ] Polo Ralph Lauren 90's Shirt (5051)</span>
            </a>
          </strong>

          <ul className="spec">
            <li className="price_all">
              <span className="price">₩60,000</span>
              <span className="sale "></span>
            </li>
          </ul>

          <div className="promotion">
            <img
              src="/images/ico_product_soldout.gif"
              className="icon_img"
              alt="품절"
            />
          </div>
        </div>
      </li>

      <li>
        <a className="product">
          <img src="/images/product5.jpg" />
        </a>
        <div className="inner">
          <strong className="name">
            <a href="#">
              <span>[ L ] Polo Ralph Lauren 90's Shirt (5051)</span>
            </a>
          </strong>

          <ul className="spec">
            <li className="price_all">
              <span className="price">₩60,000</span>
              <span className="sale "></span>
            </li>
          </ul>

          <div className="promotion">
            <img
              src="/images/ico_product_soldout.gif"
              className="icon_img"
              alt="품절"
            />
          </div>
        </div>
      </li>

      <li>
        <a className="product">
          <img src="/images/product6.jpg" />
        </a>
        <div className="inner">
          <strong className="name">
            <a href="#">
              <span>[ L ] Polo Ralph Lauren 90's Shirt (5051)</span>
            </a>
          </strong>

          <ul className="spec">
            <li className="price_all">
              <span className="price">₩60,000</span>
              <span className="sale "></span>
            </li>
          </ul>

          <div className="promotion">
            <img
              src="/images/ico_product_soldout.gif"
              className="icon_img"
              alt="품절"
            />
          </div>
        </div>
      </li>

      <li>
        <a className="product">
          <img src="/images/product7.jpg" />
        </a>
        <div className="inner">
          <strong className="name">
            <a href="#">
              <span>[ L ] Polo Ralph Lauren 90's Shirt (5051)</span>
            </a>
          </strong>

          <ul className="spec">
            <li className="price_all">
              <span className="price">₩60,000</span>
              <span className="sale "></span>
            </li>
          </ul>

          <div className="promotion">
            <img
              src="/images/ico_product_soldout.gif"
              className="icon_img"
              alt="품절"
            />
          </div>
        </div>
      </li>
      <li>
        <a className="product">
          <img src="/images/product7.jpg" />
        </a>
        <div className="inner">
          <strong className="name">
            <a href="#">
              <span>[ L ] Polo Ralph Lauren 90's Shirt (5051)</span>
            </a>
          </strong>

          <ul className="spec">
            <li className="price_all">
              <span className="price">₩60,000</span>
              <span className="sale "></span>
            </li>
          </ul>

          <div className="promotion">
            <img
              src="/images/ico_product_soldout.gif"
              className="icon_img"
              alt="품절"
            />
          </div>
        </div>
      </li>
      <li>
        <a className="product">
          <img src="/images/product7.jpg" />
        </a>
        <div className="inner">
          <strong className="name">
            <a href="#">
              <span>[ L ] Polo Ralph Lauren 90's Shirt (5051)</span>
            </a>
          </strong>

          <ul className="spec">
            <li className="price_all">
              <span className="price">₩60,000</span>
              <span className="sale "></span>
            </li>
          </ul>

          <div className="promotion">
            <img
              src="/images/ico_product_soldout.gif"
              className="icon_img"
              alt="품절"
            />
          </div>
        </div>
      </li>
      <li>
        <a className="product">
          <img src="/images/product7.jpg" />
        </a>
        <div className="inner">
          <strong className="name">
            <a href="#">
              <span>[ L ] Polo Ralph Lauren 90's Shirt (5051)</span>
            </a>
          </strong>

          <ul className="spec">
            <li className="price_all">
              <span className="price">₩60,000</span>
              <span className="sale "></span>
            </li>
          </ul>

          <div className="promotion">
            <img
              src="/images/ico_product_soldout.gif"
              className="icon_img"
              alt="품절"
            />
          </div>
        </div>
      </li>
      <li>
        <a className="product">
          <img src="/images/product7.jpg" />
        </a>
        <div className="inner">
          <strong className="name">
            <a href="#">
              <span>[ L ] Polo Ralph Lauren 90's Shirt (5051)</span>
            </a>
          </strong>

          <ul className="spec">
            <li className="price_all">
              <span className="price">₩60,000</span>
              <span className="sale "></span>
            </li>
          </ul>

          <div className="promotion">
            <img
              src="/images/ico_product_soldout.gif"
              className="icon_img"
              alt="품절"
            />
          </div>
        </div>
      </li>
      <li>
        <a className="product">
          <img src="/images/product7.jpg" />
        </a>
        <div className="inner">
          <strong className="name">
            <a href="#">
              <span>[ L ] Polo Ralph Lauren 90's Shirt (5051)</span>
            </a>
          </strong>

          <ul className="spec">
            <li className="price_all">
              <span className="price">₩60,000</span>
              <span className="sale "></span>
            </li>
          </ul>

          <div className="promotion">
            <img
              src="/images/ico_product_soldout.gif"
              className="icon_img"
              alt="품절"
            />
          </div>
        </div>
      </li>

      <li>
        <a className="product">
          <img src="/images/product7.jpg" />
        </a>
        <div className="inner">
          <strong className="name">
            <a href="#">
              <span>[ L ] Polo Ralph Lauren 90's Shirt (5051)</span>
            </a>
          </strong>

          <ul className="spec">
            <li className="price_all">
              <span className="price">₩60,000</span>
              <span className="sale "></span>
            </li>
          </ul>

          <div className="promotion">
            <img
              src="/images/ico_product_soldout.gif"
              className="icon_img"
              alt="품절"
            />
          </div>
        </div>
      </li>

      <li>
        <a className="product">
          <img src="/images/product7.jpg" />
        </a>
        <div className="inner">
          <strong className="name">
            <a href="#">
              <span>[ L ] Polo Ralph Lauren 90's Shirt (5051)</span>
            </a>
          </strong>

          <ul className="spec">
            <li className="price_all">
              <span className="price">₩60,000</span>
              <span className="sale "></span>
            </li>
          </ul>

          <div className="promotion">
            <img
              src="/images/ico_product_soldout.gif"
              className="icon_img"
              alt="품절"
            />
          </div>
        </div>
      </li>

      <li>
        <a className="product">
          <img src="/images/product7.jpg" />
        </a>
        <div className="inner">
          <strong className="name">
            <a href="#">
              <span>[ L ] Polo Ralph Lauren 90's Shirt (5051)</span>
            </a>
          </strong>

          <ul className="spec">
            <li className="price_all">
              <span className="price">₩60,000</span>
              <span className="sale "></span>
            </li>
          </ul>

          <div className="promotion">
            <img
              src="/images/ico_product_soldout.gif"
              className="icon_img"
              alt="품절"
            />
          </div>
        </div>
      </li>

      <li>
        <a className="product">
          <img src="/images/product7.jpg" />
        </a>
        <div className="inner">
          <strong className="name">
            <a href="#">
              <span>[ L ] Polo Ralph Lauren 90's Shirt (5051)</span>
            </a>
          </strong>

          <ul className="spec">
            <li className="price_all">
              <span className="price">₩60,000</span>
              <span className="sale "></span>
            </li>
          </ul>

          <div className="promotion">
            <img
              src="/images/ico_product_soldout.gif"
              className="icon_img"
              alt="품절"
            />
          </div>
        </div>
      </li>

      <li>
        <a className="product">
          <img src="/images/product7.jpg" />
        </a>
        <div className="inner">
          <strong className="name">
            <a href="#">
              <span>[ L ] Polo Ralph Lauren 90's Shirt (5051)</span>
            </a>
          </strong>

          <ul className="spec">
            <li className="price_all">
              <span className="price">₩60,000</span>
              <span className="sale "></span>
            </li>
          </ul>

          <div className="promotion">
            <img
              src="/images/ico_product_soldout.gif"
              className="icon_img"
              alt="품절"
            />
          </div>
        </div>
      </li>

      <li>
        <a className="product">
          <img src="/images/product7.jpg" />
        </a>
        <div className="inner">
          <strong className="name">
            <a href="#">
              <span>[ L ] Polo Ralph Lauren 90's Shirt (5051)</span>
            </a>
          </strong>

          <ul className="spec">
            <li className="price_all">
              <span className="price">₩60,000</span>
              <span className="sale "></span>
            </li>
          </ul>

          <div className="promotion">
            <img
              src="/images/ico_product_soldout.gif"
              className="icon_img"
              alt="품절"
            />
          </div>
        </div>
      </li>

      <li>
        <a className="product">
          <img src="/images/product7.jpg" />
        </a>
        <div className="inner">
          <strong className="name">
            <a href="#">
              <span>[ L ] Polo Ralph Lauren 90's Shirt (5051)</span>
            </a>
          </strong>

          <ul className="spec">
            <li className="price_all">
              <span className="price">₩60,000</span>
              <span className="sale "></span>
            </li>
          </ul>

          <div className="promotion">
            <img
              src="/images/ico_product_soldout.gif"
              className="icon_img"
              alt="품절"
            />
          </div>
        </div>
      </li>

      <li>
        <a className="product">
          <img src="/images/product7.jpg" />
        </a>
        <div className="inner">
          <strong className="name">
            <a href="#">
              <span>[ L ] Polo Ralph Lauren 90's Shirt (5051)</span>
            </a>
          </strong>

          <ul className="spec">
            <li className="price_all">
              <span className="price">₩60,000</span>
              <span className="sale "></span>
            </li>
          </ul>

          <div className="promotion">
            <img
              src="/images/ico_product_soldout.gif"
              className="icon_img"
              alt="품절"
            />
          </div>
        </div>
      </li>
    </>
  )
}

export default Product
