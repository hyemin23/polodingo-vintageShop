import React, { useEffect, useRef } from "react"
import { SectionOne, SectionTwo, SectionThree } from "../style/SectionStyle"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Product from "./Product"
import { ProductStyle } from "../style/ProductStyle"

// register ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

const MainSection = () => {
  const refSlide1 = useRef(null)
  const refSlide2 = useRef(null)
  const refSlide3 = useRef(null)

  const revealRef1 = useRef(null)

  useEffect(() => {
    const sections = [refSlide1, refSlide2, refSlide3].map((ref) => ref.current)

    // const triggers = sections.map((panel) => {
    //   return ScrollTrigger.create({
    //     trigger: panel,
    //     start: "top top",
    //     end: "+=50%",
    //     pin: true,
    //     scrub: 3,
    //     pinSpacing: true,
    //   })
    // })

    // const snap = ScrollTrigger.create({
    //   snap: 1 / (sections.length - 1),
    // })
    // return function cleanup() {
    //   triggers.map((trigger) => trigger.kill())
    //   snap.kill()
    // }
  }, [])

  useEffect(() => {
    const texts = [revealRef1].map((ref) => ref.current)
    gsap.from(refSlide1.current, {
      duration: 1,
      autoAlpha: 0,
      ease: "none",
      delay: 0.1,
    })
    texts.forEach((el) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
        },
        {
          duration: 1,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top center+=100",
            toggleActions: "play none none reverse",
          },
        }
      )
    })
  }, [])

  return (
    <>
      <SectionOne ref={refSlide1}>
        <div className="section__image section__image--a"></div>
        <div className="showcase_contents">
          <h1>90% SALE</h1>
          <span>세일 기간 중 교환 및 반품이 불가능합니다.</span>
        </div>
      </SectionOne>

      <SectionTwo ref={refSlide2}>
        <div className="showcase_contents" ref={revealRef1}>
          <ul className="main_banner_lists">
            <li>
              <a href="#">
                <img src="images/main-banner-top-1.jpg"></img>
              </a>
              <p className="title">
                <span>TIE_DYE_TSHIRT</span>
              </p>
              <p className="summary">다양한 타이다이 티셔츠</p>
            </li>
            <li>
              <a href="#">
                <img src="images/main-banner-top-2.jpg"></img>
              </a>
              <p className="title">
                <span>HAWAIAN SHIRT</span>
              </p>
              <p className="summary">하와이안 셔츠</p>
            </li>
            <li>
              <a href="#">
                <img src="images/main-banner-top-3.jpg"></img>
              </a>
              <p className="title">
                <span>SWEATSHIRT</span>
              </p>
              <p className="summary">스타일리쉬 트렌치 코트</p>
            </li>
            <li>
              <a href="#">
                <img src="images/main-banner-1.jpg"></img>
              </a>
              <p className="title">
                <span>NEW CUSTOMERS</span>
              </p>
              <p className="summary">신규회원 5% 할인 쿠폰 발급!</p>
            </li>
            <li>
              <a href="#">
                <img src="images/main-banner-2.jpg"></img>
              </a>
              <p className="title">
                <span>MEMBER LEVEL</span>
              </p>
              <p className="summary">빈티지톡 회원등급 안내</p>
            </li>
            <li>
              <a href="#">
                <img src="images/main-banner-3.jpg"></img>
              </a>
              <p className="title">
                <span>CONSIGNMENT SALES</span>
              </p>
              <p className="summary">위탁판매 안내</p>
            </li>
          </ul>
        </div>
      </SectionTwo>

      <SectionThree>
        <div className="container" ref={refSlide3}>
          <div>
            <h2>PRODUCT</h2>
            <p className="bar"></p>
            <p className="ment">단 한장밖에 없는 당신만의 옷들입니다 :)</p>
          </div>
          <ProductStyle column="5">
            <Product id="new" />
          </ProductStyle>
        </div>
      </SectionThree>
    </>
  )
}

export default MainSection
