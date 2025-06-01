import Header from "../common/Header";
import Footer from "../common/Footer";
import "../../scss/pages/ContactPage.scss";
import { useState, useEffect } from "react";
import ContactForm from "../Contact/ContactForm";
import DownBtn from "../common/DownBtn";
import { useLocation } from "react-router-dom";
import WhereWeWorks from "../Contact/WhereWeWorks";
import FooterMenu from "../common/FooterMenu";

export default function ContactPage() {
    const [displayedText, setDisplayedText] = useState(""); // 텍스트 타이핑 상태
    const [count, setCount] = useState(0); // 카운터 애니메이션 상태
    const location = useLocation();

    // 텍스트 타이핑 효과
    useEffect(() => {
        const text = '메가헤르츠는 언제나 새로운 기회를 기다리고 있습니다.';
        let index = 0;
        const initialDelay = 500; // 타이핑 시작 전 딜레이
        const speed = 70; // 타이핑 속도
    
        function type() {
            const holderElement = document.getElementById("holder");
            if (holderElement) {
                // 모든 텍스트가 타이핑 완료되면 중단
                if (index === text.length) return;
    
                // 텍스트 한 글자씩 추가
                holderElement.textContent += text.charAt(index);
                index++;
                setTimeout(type, speed);
            } else {
                setTimeout(type, 100); // holderElement가 없는 경우 재시도
            }
        }
    
        setTimeout(type, initialDelay); // 타이핑 애니메이션 시작 전 초기 딜레이
    }, []);

    // 해시 링크 이동
    useEffect(() => {
        if (location.hash === "#ContactUs") {
            const element = document.querySelector(".ContactPage-description-form");
            if (element) {
                window.scrollTo({
                    top: element.offsetTop,
                    behavior: "smooth",
                });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    // 카운터 애니메이션 효과
    useEffect(() => {
        const speed = 1;
        const target = 1000;

        if (count < target) {
            const timer = setTimeout(() => {
                setCount((prevCount) => prevCount + 1);
            }, speed);
            return () => clearTimeout(timer);
        }
    }, [count]);

    // 섹션별 인터섹션 관찰자
    useEffect(() => {
        const elementsToObserve = [
            ".ContactPage-Title h3",
            ".ContactPage-Title h5",
            ".ContactPage-Title-underline",
            ".ContactPage-description>h3",
            ".ContactPage-description>h1",
            ".ContactPage-description>p",
            ".WWW-map",
            ".WWW-content",
            ".ContactPage-description-form"
        ];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                    } else {
                        entry.target.classList.remove("in-view");
                    }
                });
            },
            { threshold: 0.1 }
        );

        elementsToObserve.forEach((selector) => {
            const elements = document.querySelectorAll(selector);
            if (elements.length > 0) {
                elements.forEach((element) => observer.observe(element));
            } else {
                console.warn(`Selector ${selector} did not match any elements.`);
            }
        });

        return () => {
            elementsToObserve.forEach((selector) => {
                const elements = document.querySelectorAll(selector);
                elements.forEach((element) => observer.unobserve(element));
            });
        };
    }, []);

    return (
        <>
            <Header />
            <div className="ContactPage-Container">
                <div className="ContactPage-Title">
                    <div className="ContactPage-Title-bg" />
                    <h1 id="holder">{displayedText}</h1>
                    <h3>
                        최적의 마케팅 솔루션을 위해서는
                        <br />
                        고객사에 대한 정확한 진단이 필요합니다.
                    </h3>
                    <h5>
                        <span>메가헤르츠</span>는 누적{" "}
                        <span>+{count.toLocaleString()}곳 이상</span>의
                        <br />
                        고객사와 함께한 업계 1등 바이럴 마케팅 전문가 집단입니다.
                    </h5>
                    <DownBtn position={1} />
                </div>
                <div className="ContactPage-description">
                    <h3>Contact</h3>
                    <h1><span>저희</span>와 <span>함께</span> 하시겠습니까?</h1>
                    <WhereWeWorks />
                    <p>이용해주셔서 대단히 감사드립니다.<br/>아래 양식을 적어주시면 담당자 확인 후 최대한 빠른 시간내에 답변 드리겠습니다.</p>
                    <div className="ContactPage-description-form">
                        <ContactForm />
                    </div>
                </div>
            </div>
            <FooterMenu page="contact"/>
            <Footer />
        </>
    );
}