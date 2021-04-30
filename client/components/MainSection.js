import React, { useEffect, useRef } from "react";
import { SectionOne, SectionThree, SectionTwo } from "../style/SectionStyle";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ProductStyle } from "../style/ProductStyle";
import Product from "./Product";

// register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const MainSection = () => {

    const refSlide1 = useRef(null);
    const refSlide2 = useRef(null);
    const refSlide3 = useRef(null);

    const revealRef1 = useRef(null);



    useEffect(() => {
        const sections = [refSlide1].map((ref) => ref.current);


        gsap.from(refSlide1.current, {
            duration: 1,
            autoAlpha: 0,
            ease: 'none',
            delay: 0.1,
        });


        const triggers = sections.map((panel) => {
            return ScrollTrigger.create({
                trigger: panel
                , start: 'top top'
                , pin: true
                , pinSpacing: false
            });
        });

    }, []);

    useEffect(() => {
        const texts = [revealRef1].map((ref) => ref.current);


        texts.forEach(el => {
            gsap.fromTo(
                el,
                {
                    autoAlpha: 0,
                },
                {
                    duration: 1,
                    autoAlpha: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top center+=100',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });


    }, []);

    return (
        <div>
            <SectionOne ref={refSlide1}>
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

            <SectionTwo ref={refSlide2}>
                <div className="showcase_contents" ref={revealRef1}>
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
            <ProductStyle ref={refSlide3}>
                <div className="container">
                    <div>
                        <h2>PRODUCT</h2>
                        <p class="bar"></p>
                        <p className="ment">단 한장밖에 없는 당신만의 옷들입니다 :)</p>
                    </div>
                    <div className="products">
                        <Product />
                    </div>
                </div>
            </ProductStyle>
        </div>
    )
}

export default MainSection;