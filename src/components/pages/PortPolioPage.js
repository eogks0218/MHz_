import "../../scss/pages/PortPolioPage.scss";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { useEffect } from "react";
import PortPolioOne from "../PortPolio/PortPolioOne";
import CTA from "../common/CTA";
import FooterMenu from "../common/FooterMenu";
import DownBtn from "../common/DownBtn";

export default function PortPolioPage(){
    
    useEffect(()=> {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        const elementsToObserve = [
            ".PortPolio-title h1",
            ".PortPolio-title h5",
            ".PortPolio-title-detail",
            ".PortPolio-one h2",
            ".PortPolio-one h3",
            ".down-btn-box h4",
            ".PortPolio-description h1",
            ".PortPolio-description h2",
            ".PortPolio-tab",
            ".PortPolioList-container"
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
            <div className="PortPolio-container">
                <div className="PortPolio-title">
                    <div className="PortPolio-title-bg" />
                    <h1>
                        이미 수많은 업체들이<br/>
                        <strong><span>메가헤르츠</span>와 <span>함께</span> 하셨습니다.</strong>
                    </h1>
                    <h5>그리고 이 중 약 <span>85%의 업체들이 메가헤르츠</span>를 다시 찾아주셨습니다.</h5>
                    <div className="PortPolio-title-detail">
                        <h3>TOP PROJECT</h3>
                        <h1>1036+</h1>
                        <h5>RELATED PROJECT<br/>647+</h5>
                    </div>
                    <div className="down-btn-box">
                        <h4>포트폴리오 내용을 더 보고싶으신가요?</h4>
                    </div>
                    <DownBtn position={1} />
                </div>
                {/* <div className="PortPolio-one">
                    <div className="PortPolio-one-bg" />
                    <h2>포트폴리오</h2>
                    <h3>많은 경험만큼 소통도 확실한 <span>메가헤르츠</span>가<br/>오늘부터 함께 고민하고, 함께 해결하겠습니다.</h3>
                    <DownBtn position={2} />
                </div> */}
                <div className="PortPolio-description">
                    <PortPolioOne />
                </div>
            </div>
            <CTA page="portpolio"/>
            <FooterMenu page="portpolio"/>
            <Footer />
        </>
    )
}