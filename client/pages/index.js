import Head from "next/head";
import React from "react";
import Sesctionone from "../components/SectionOne";
import Sectionthree from "../components/sectionthree";
import Sectiontwo from "../components/Sectiontwo";


// register ScrollTrigger
//gsap.registerPlugin(ScrollTrigger);

const index = () => {
    return (
        <div>
            <Head>
                <title>메인페이지</title>
            </Head>
            {/* 첫 번째 섹션 */}
            <Sesctionone />
            {/* 두 번째 섹션 */}
            <Sectiontwo />
            {/* 세 번째 섹션 */}
            <Sectionthree />
        </div>
    )
}

export default index;