import Header from "../common/Header.js"
import Footer from "../common/Footer.js"
import { useEffect } from "react"
import "../../scss/pages/ServiceViralPage.scss"
import Special from "../ServiceViral/Special.js"
import Process from "../ServiceViral/Process.js"
import CTA from "../common/CTA.js"
import ViralWhy from "../ServiceViral/ViralWhy.js"
import Community from "../ServiceViral/Community.js"
import FooterMenu from "../common/FooterMenu.js"
import ViralX from "../ServiceViral/ViralX.js"

export default function ServiceViralPage(){

    useEffect(()=> {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        const elementsToObserve = [
            ".CV-title-one h1",
            ".CV-title-one h3",
            ".CV-title-one h5",
            ".CV-title-one h4",
            ".CV-content-why h3",
            ".CV-content-why h1",
            ".CV-content-why h2",
            ".CV-content-why h5",
            ".CV-content-why h4",
            ".CV-Special-description h1",
            ".CV-Special-description p",
            ".CV-Special-description h3",
            ".CV-Special-image",
            ".CV-ViralX-container h1",
            ".CV-ViralX-card",
            ".CV-ViralX-footer h2",
            ".CV-title-three",
            ".ServiceCV-Process-card",
            ".CommunityBox h3",
            ".WomanCafeBox h3",
            ".EtcCommunityBox h3",
            ".CommunityName"
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
            <div className="ServiceCV-container">
                <div className="CV-content-one">
                    <div className="CV-content-BG" />
                    <div className="CV-title-one">
                        <h1>맘카페 대란!</h1>
                        <h3>여러분의 브랜드도 가능합니다.<br/><span>메가헤르츠</span>가 만들어드립니다 !</h3>
                        <h5>
                            광고 매체의 단가는 높아져만 가고, 어디에 광고해야 좋을지..<br/>
                            고민이 깊어 가는 사장님들이 많습니다.<br/>
                            브랜드를 이야기하는 콘텐츠가 모이면 입소문이 되고 입소문이 모이면<br/>
                            무궁무진한 홍보효과를 누릴 수 있습니다.
                        </h5>
                        <h4>메가헤르츠는 큰 그림을 그리며 마케팅을 진행합니다.</h4>
                    </div>
                </div>
                <ViralWhy />
                <Special />
                <ViralX />
                <div className="CV-PCL">
                    <div className="CV-title-three">
                        <h1>진행 프로세스</h1>
                        <p>기획없는 마케팅은 의미가 없습니다.<br/>카페, 커뮤니티 바이럴 마케팅 전문 에이전시</p>
                    </div>
                    <div className="CV-description-three">
                        <Process />
                    </div>
                </div>
                <div className="CV-community">
                    <Community />
                </div>
            </div>
            <CTA />
            <FooterMenu page="serviceCV"/>
            <Footer />
        </>
    )
}