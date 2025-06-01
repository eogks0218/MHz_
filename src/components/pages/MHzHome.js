import Header from "../common/Header";
import Footer from "../common/Footer";
import "../../scss/pages/MHzHome.scss";
import { useEffect } from "react";
import FooterMenu from "../common/FooterMenu";
import Corevalue from "../Home/Corevalue";
import Howwework from "../Home/Howwework";
import Reason from "../Home/Reason";
import Partner from "../Home/Partner";

export default function MHzHome() {

    useEffect(()=> {
        window.scrollTo(0, 0);
    }, [])


    useEffect(() => {
        const text = '마케팅 "디테일의 차이가 결과의 차이"';
        const firstWord = '마케팅';
        const remainingText = ' "디테일의 차이가 결과의 차이"';
        let index = 0;
        const initialDelay = 750; // 전체 타이핑 시작 전 1초 딜레이
        const firstWordDelay = 750; // '마케팅' 이후 추가 딜레이
        const speed = 70; // 타이핑 속도
        
        function type() {
            const holderElement = document.getElementById("holder");
            if (holderElement) {
                // 모든 텍스트가 타이핑 완료되면 중단
                if (holderElement.textContent === text) return;
    
                // 초기화 (애니메이션이 다시 시작할 때를 대비)
                if (index === 0) {
                    holderElement.textContent = '';
                }
    
                // 첫 번째 단어(마케팅) 타이핑
                if (index < firstWord.length) {
                    holderElement.textContent += firstWord.charAt(index);
                    index++;
                    setTimeout(type, speed);
                }
                // 첫 단어 완료 후 딜레이
                else if (index === firstWord.length) {
                    index++;
                    setTimeout(type, firstWordDelay);
                }
                // 나머지 텍스트 타이핑
                else if (index <= text.length) {
                    holderElement.textContent += remainingText.charAt(index - firstWord.length - 1);
                    index++;
                    setTimeout(type, speed);
                }
            } else {
                setTimeout(type, 100); // holderElement가 없는 경우 재시도
            }
        }
    
        setTimeout(type, initialDelay); // 타이핑 애니메이션 시작 전 초기 딜레이
    }, []);

    useEffect(() => {
        const elementsToObserve = [
            ".HomeHeader-container",
            ".MHzHome-Content-One h1",
            ".MHzHome-Content-One h5",
            ".HWW-one h1",
            ".HWW-one h3",
            ".HWW-one-description",
            ".HWW-two h1",
            ".HWW-two-description-box",
            ".HWW-three h1",
            ".HWW-three h2",
            ".HWW-three h5",
            ".HWW-three-description",
            ".Reason-one h1",
            ".Reason-one-description",
            ".Reason-one h4",
            ".Partner-one h1",
            ".Partner-one h4",
            ".Partner-one h2",
            ".Partner-two",
            ".MHzHome-Content-One ul li",
        ];
    
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                } else {
                    entry.target.classList.remove('in-view');
                }
            });
        }, { threshold: 0.1 }); // 0.1 = 10% of the element is visible
    
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

    return (
        <>
            <Header />
            <div className="MHzHome-container">
                <div className="MHzHome-Header">
                    <video autoPlay loop muted src={`${process.env.PUBLIC_URL}/videos/MHzHome-one.mp4`} type="video/mp4" />
                    <div className="HomeHeader-container">
                        <div className="QCMBox">
                            <h1 className="QCMQ">
                                <p>Quality</p>
                            </h1>
                            <h1>
                                <p>+</p>
                                <p>Creativity</p>
                            </h1>
                            <h1>
                                <p>=</p>
                                <p>MHz</p>
                            </h1>
                            <div className="underlineBox"></div>
                        </div>
                        <p className="blinkingP">
                            <span id="holder" />
                            <span id="blinking-cursor" />
                        </p>
                    </div>
                </div>
                <div className="MHzHome-Content-One">
                    <Corevalue />
                </div>
                <div className="MHzHome-Content-Two">
                    <Howwework />
                </div>
                <div className="MHzHome-Content-Three">
                    <Reason />
                </div>
                <div className="MHzHome-Content-Four">
                    <Partner />
                </div>
            </div>
            <FooterMenu page="home"/>
            <Footer />
        </>
    );
}