import { useEffect } from "react"
import Header from "../common/Header";
import Footer from "../common/Footer";
import CTA from "../common/CTA";
import "../../scss/pages/SuccessPage.scss";
import SuccessReference from "../Success/SuccessReference";
import SuccessOne from "../Success/SuccessOne";
import SuccessTwo from "../Success/SuccessTwo";
import SuccessReview from "../Success/SuccessReview";
import FooterMenu from "../common/FooterMenu";

export default function SuccessPage(){
    
    useEffect(()=> {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        const elementsToObserve = [
            ".SuccessViral-title h3",
            ".SuccessViral-title h1",
            ".SuccessViral-title h2",
            ".SuccessViral-title p",
            ".SuccessOne-title",
            ".SuccessOne-main",
            ".SuccessOne-description",
            ".SuccessTwo-title",
            ".SuccessContent-two>div",
            ".SuccessReference-title h1",
            ".SuccessReference-title h3",
            ".SuccessReference-title h5",
            ".SuccessReference-tab",
            ".SuccessReference-carousel",
            ".SuccessContent-four h1",
            ".SuccessContent-four>div",
            ".SuccessOne-description-content h2>span"

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
            <div className="SuccessViral-container">
                <div className="SuccessViral-title">
                    <div className="SuccessViral-title-bg" />
                    <h3>지난 <span>4년</span>간 <span>1,000개</span>가 넘는 이야기를 만들어가고 있습니다.<br/><span>하나하나 소중</span>하지 않은 이야기가 없습니다.</h3>
                    <h1><span>BELIEF 『신념』 ;</span> 변하지 않는 굳은 생각</h1>
                    <h2>할 수 있는 최선을 다하고, 약속을 지키며, 진심으로 공감하여 관계를 만든다.</h2>
                    <p>
                        고객사와 진정한 '관계'를 만드는 것을 최우선의 가치로 삼고 매진하였습니다.<br/>
                        <br/>할 수 있는 최선을 다하고, 약속을 지키며, 진심으로 공감하여<br/>
                    
                        최선의 방법을 함께 모색해 나아갈 때 '관계'가 형성될 수 있다고 믿습니다.<br/>
                        <br/>그리고 이러한 <span>'관계'가 형성 될 때, 함께 만들어가는 프로젝트의 성공 가능성은</span> 무한해 집니다.
                    </p>
                </div>
                <div className="SuccessContent-one">
                    <SuccessOne />
                </div>
                <div className="SuccessContent-two">
                    <SuccessTwo />
                </div>
                <div className="SuccessContent-three">
                    <SuccessReference />
                </div>
                <SuccessReview />
            </div>
            <CTA page="success"/>
            <FooterMenu page="success"/>
            <Footer />
        </>
    )
}