import "../../scss/Success/SuccessOne.scss";
import { useEffect, useRef } from "react";

export default function SuccessOne() {
    const descriptionRef = useRef(null);

    // Intersection Observer와 숫자 증가 애니메이션 함수
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const counters = entry.target.querySelectorAll("h2 span");
                    counters.forEach((counter) => {
                        const target = parseInt(counter.innerText.replace(",", ""));
                        const start = parseInt(counter.getAttribute("data-start")) || 0; // data-start 값 읽기
                        const duration = 8000; // 애니메이션 지속 시간
                        const increment = (target - start) / (duration / 16);
    
                        let current = start;
    
                        const updateCounter = () => {
                            current += increment;
                            if (current < target) {
                                counter.innerText = Math.ceil(current).toLocaleString();
                                requestAnimationFrame(updateCounter);
                            } else {
                                counter.innerText = target.toLocaleString(); // 최종 값 설정
                            }
                        };
                        updateCounter();
                    });
                    observer.unobserve(entry.target); // 한번 작동 후 해제
                }
            });
        });
    
        if (descriptionRef.current) {
            observer.observe(descriptionRef.current);
        }
        
        return () => observer.disconnect(); // 컴포넌트 언마운트 시 observer 해제
    }, []);

    return (
        <>
            <h1 className="SuccessOne-title">
                바이럴 마케팅은 끊임없어야 합니다.<br />
                저희는 <span>1년 365일 지금 이 시간에도</span> 쉬지 않고 움직입니다.<br/>
                지금도 수 많은 핵심 키워드 노출, 저희가 책임지고 있습니다.
            </h1>
            <div className="SuccessOne-main">
                <video autoPlay loop muted src={`${process.env.PUBLIC_URL}/videos/success-one.mp4`} type="video/mp4"/>
            </div>
            <div className="SuccessOne-description" ref={descriptionRef}>
                <div className="SuccessOne-description-content">
                    <h3>월간 <span>발행건수</span></h3>
                    <h2><span data-start="4800">5,000</span>건 +</h2>
                </div>
                <div className="SuccessOne-description-content">
                    <h3><span>관리</span>수량</h3>
                    <h2><span data-start="2700">3,000</span>여 건</h2>
                </div>
                <div className="SuccessOne-description-content">
                    <h3><span>신규 광고주</span> 문의</h3>
                    <h2><span data-start="0">200</span>여 건</h2>
                </div>
                <div className="SuccessOne-description-content">
                    <h3>기존 광고주 <span>재계약율</span></h3>
                    <h2><span data-start="0">85</span>%</h2>
                </div>
            </div>
        </>
    );
}