import "../../scss/Home/Partner.scss";
import { useEffect, useRef } from 'react';

export default function Partner() {
    const videoContainerRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        const handleCanPlay = () => {
            if (videoContainerRef.current) {
                videoContainerRef.current.classList.add('video-ready');
            }
        };

        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.addEventListener('canplay', handleCanPlay);
        }

        return () => {
            if (videoElement) {
                videoElement.removeEventListener('canplay', handleCanPlay);
            }
        };
    }, []);

    return (
        <div className="Partner-one">
            <div className="Partner-one-video" ref={videoContainerRef}>
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    src={`${process.env.PUBLIC_URL}/videos/partner-back.mp4`}
                    type="video/mp4"
                />
                <div className="Partner-one-video-bg" />
            </div>

            <h1>
                <span>메가헤르츠</span>에게 있어, 일회성 프로젝트란 없습니다.
            </h1>
            <h4>
                지난 <strong>4년</strong>, 이미 수 많은 업체들이 <span>메가헤르츠</span>와 함께하셨습니다.<br />
                그리고 이중 약 <strong>85% 이상</strong>의 업체들이 <span>메가헤르츠</span>를 다시 찾아주셨습니다.
            </h4>
            <h2>
                <strong>고객사의 일원이라는 마음가짐</strong>으로,<br />
                <strong>고객사의 발전</strong>을 위해 <strong>우리의 모든 역량을 다 할 것</strong>입니다.
            </h2>
        </div>
    );
}