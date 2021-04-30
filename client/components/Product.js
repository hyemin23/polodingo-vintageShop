import Link from 'next/link';
import React from 'react';

const Product = () => {
    return (
        //{/*나중에 div -> Link로 수정하기 */ }
        <>
            <a className="product">
                <img src="images/product1.jpg" />
            </a>
            <a className="product">
                <img src="images/product2.jpg" />
            </a>
            <a className="product">
                <img src="images/product3.jpg" />
            </a>
            <a className="product">
                <img src="images/product4.jpg" />
            </a>
            <a className="product">
                <img src="images/product5.jpg" />
            </a>
            <a className="product">
                <img src="images/product6.jpg" />
            </a>
            <a className="product">
                <img src="images/product7.jpg" />
            </a>
        </>

    )
}

export default Product;