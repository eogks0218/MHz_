import { Link } from "react-router-dom"
import { useEffect } from "react";
import "../../scss/common/CTA.scss"

export default function CTA({page}){

    useEffect(()=> {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        const elementsToObserve = [
            ".CTA-one h1",
            ".CTA-two h2",
            ".CTA-two p",
            ".CTA-three h3",
            ".CTA-three a"
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
        <div className="CTA-container">
            <div className="CTA-bg" />
            <div className="CTA-one">
                <h1>메가헤르츠의 목표는<br/><strong><span>오로지</span> 고객의 <span>매출증진</span>입니다.</strong></h1>
            </div>
            <div className="CTA-two">
                <h2><span>We can be together</span><br/>우리는 함께 할 수 있습니다.</h2>
                <p>많은 경험만큼 소통도 확실한 기업 메가헤르츠가 <span>오늘부터</span> 함께 고민하고 함께 해결하겠습니다.</p>
            </div>
            <div className="CTA-three">
                <h3>함께 성장하는 기쁨, <span>메가헤르츠</span>와 함께하고 싶으신가요 ?</h3>
                {
                    page === "success" ?
                    <Link to ="/MHz/PortPolio"><span>포트폴리오</span> 바로가기</Link> :
                    page === "portpolio" ?
                    <Link to="/MHz/Contact"><span>문의하기</span> 바로가기</Link> :
                    <Link to="/MHz/Success"><span>성공사례</span> 바로가기</Link>
                }
            </div>
        </div>
    )
}