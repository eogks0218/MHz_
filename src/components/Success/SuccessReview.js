import "../../scss/Success/SuccessReview.scss";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import reviewData from "./reviews.json";

const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    cssEase: 'ease-in-out',
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1, // 모바일에서 하나씩 보여줌
                autoplaySpeed: 3000,
            }
        }
    ]
};


const getImagePath = (imageName) => require(`./imagesC/${imageName}`);

export default function SuccessReview(){
    
    const allReviews = [
        ...reviewData.Allreviews.map(getImagePath)
    ]
    
    return(
        <div className="SuccessContent-four">
            <h1>
                <span>메가헤르츠의 리얼 후기 !</span><br/>
                여러분도 성공사례의 주인공이 될 수 있습니다!
            </h1>
            <Slider {...settings}>
                {allReviews.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Review ${index + 1}`} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}