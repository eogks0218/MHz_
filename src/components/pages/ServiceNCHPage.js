import Header from "../common/Header"
import Footer from "../common/Footer"
import { useEffect } from "react"
import "../../scss/pages/ServiceNCHPage.scss"
import CTA from "../common/CTA"
import NCHService from "../ServiceNCH/NCHService"
import Challenges from "../ServiceNCH/Challenges"
import Different from "../ServiceNCH/Different"
import NCHProcess from "../ServiceNCH/NCHProcess"
import FooterMenu from "../common/FooterMenu";

export default function ServiceNCHPage(){

    useEffect(()=> {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        const elementsToObserve = [
            ".NCH-title-underline",
            ".ServiceNCH-title h3",
            ".ServiceNCH-title h1",
            ".ServiceNCH-title h5",
            ".left-align",
            ".right-align",
            ".ServiceNCH-Challenges-container h4",
            ".ServiceNCH-Challenges-container p",
            ".ServiceNCH-Different-container h1",
            ".ServiceNCH-Different-container p",
            ".ServiceNCH-Different-description-card",
            ".NCHService-card",
            ".Vision-card",
            ".ServiceNCH-Process-container h1",
            ".ServiceNCH-Process-container p",
            ".ServiceNCH-Process-description-card",
            ".ServiceNCH-underlineimg"
        ];
    
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                } else {
                    entry.target.classList.remove('in-view');
                }
            });
        });
    
        elementsToObserve.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            if (elements.length > 0) {
                elements.forEach(element => observer.observe(element));
            } else {
                console.warn(`Selector ${selector} did not match any elements.`);
            }
        });
    
        return () => {
            elementsToObserve.forEach(selector => {
                const elements = document.querySelectorAll(selector);
                elements.forEach(element => observer.unobserve(element));
            });
        };
    }, []);

    return(

        <>
            <Header />
            <div className="ServiceNCH-container">
                <div className="ServiceNCH-title">
                    <div className="NCH-title-BG" />
                    <h3>N쇼핑, N플레이스, 쿠팡 & 상위노출 마케팅</h3>
                    <h1>잘나가는 브랜드의<br />완판 비결은 바로<br/><span>네이버 검색장악!</span></h1>
                    <h5>왜 많은 업체들이 상위노출하면 메가헤르츠를 떠올릴까요?<br/>실력으로 만드는 수많은 성공 사례가 그 이유입니다.<br/>오늘부터 함께 고민하고, 함께 해결하겠습니다.</h5>
                </div>
                <Challenges />
                <Different />
                <div className="ServiceNCH-Service">
                    <div className="ServiceNCH-Service-bg" />
                    <NCHService />
                </div>
                {/* <div className="ServiceNCH-vision">
                    <Vision />
                </div> */}
                <NCHProcess />
            </div>
            <CTA />
            <FooterMenu page="serviceNCH"/>
            <Footer />
        </>
    )
}