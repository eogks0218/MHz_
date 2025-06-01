import "../../scss/Success/SuccessReference.scss";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imageData from "./reviews.json";
import { useState } from "react";

const settings = {
    dots: false,
    infinite: true,
    speed: 1100,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    arrows: true,
    cssEase: 'ease-in-out',
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1, // 모바일에서 하나씩 보여줌
                autoplaySpeed: 1000,
            }
        }
    ]
};

const getImagePath = (imageName) => require(`./imagesC/${imageName}`);

const CAreviews = imageData.CAreviews.map(getImagePath);
const COreviews = imageData.COreviews.map(getImagePath);
const NCreviews = imageData.NCreviews.map(getImagePath);

export default function SuccessReference() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentCategory, setCurrentCategory] = useState(CAreviews);
    const [autoplay, setAutoplay] = useState(true);  // autoplay 상태를 관리

    // 가운데 슬라이드 인덱스 계산 (slidesToShow의 중앙 인덱스)
    const centerIndexOffset = Math.floor(settings.slidesToShow / 2) - 1;

    // 슬라이드 설정
    const sliderSettings = {
        ...settings,
        autoplay: autoplay,  // autoplay 상태 반영
        beforeChange: (oldIndex, newIndex) => {
            setCurrentSlide(newIndex);
        },
    };
    
    // 탭 클릭 시, autoplay 멈추고 1초 후에 다시 시작
    const SuccessTabClick = (category) => () => {
        setAutoplay(false); // autoplay 멈춤
        setCurrentCategory(category);
        setCurrentSlide(0);  // 탭을 변경할 때 항상 첫 번째 슬라이드로 초기화
        
        // 1초 후에 autoplay 다시 시작
        setTimeout(() => {
            setAutoplay(true);  // autoplay 시작
        }, 1000);
    };

    return (
        <>
            <div className="SuccessReference-title">
                <h1>카페 / 커뮤니티 / N쇼핑, N플레이스, 쿠팡 레퍼런스</h1>
                <h3>확실한 결과로 증명했습니다 !</h3>
                <h5>
                    모든 카테고리 레퍼런스 보유중이며<br/>
                    궁금하신 사안 모두 공유 가능합니다.<br/>
                    다년간의 노하우로 실무 센스 넘치는 저희는 다릅니다.
                </h5>
                
            </div>
            <div className="SuccessReference-tab">
                <div
                    className={`SuccessReference-tab-item ${currentCategory === CAreviews ? "currentTab" : ""}`}
                    onClick={SuccessTabClick(CAreviews)}
                >
                    카페
                </div>
                <div
                    className={`SuccessReference-tab-item ${currentCategory === COreviews ? "currentTab" : ""}`}
                    onClick={SuccessTabClick(COreviews)}
                >
                    커뮤니티
                </div>
                <div
                    className={`SuccessReference-tab-item ${currentCategory === NCreviews ? "currentTab" : ""}`}
                    onClick={SuccessTabClick(NCreviews)}
                >
                    N쇼핑, N플레이스, 쿠팡
                </div>
            </div>
            <div className="SuccessReference-carousel">
                {/* <div className="SuccessReference-mobile" /> */}
                {/* key를 사용하여 autoplay 상태 변경 시 컴포넌트를 강제로 리렌더링 */}
                <Slider {...sliderSettings} key={autoplay ? "autoplay-on" : "autoplay-off"}>
                    {currentCategory.map((review, index) => {
                        // currentSlide와 centerIndexOffset을 사용하여 중앙 이미지 계산
                        const adjustedIndex = (currentSlide + centerIndexOffset) % currentCategory.length;
                        return (
                            <div key={index} className={`Performance-card ${index === adjustedIndex ? "active" : "inactive"}`}>
                                <img src={review} alt="review" className="Performance-card-image" />
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </>
    );
}