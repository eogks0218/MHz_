import "../../scss/ServiceNCH/NCHService.scss"
import "../../scss/ServiceNCH/Vision.scss";

export default function NCHService(){

    return(
        <>
            <div className="NCHService-card">
                <div className="NCHService-line" />
                <div className="NCHService-description">
                    지속적인 관리가 되지 않으면
                    물건을 팔면 후속 조치가 안되는것입니다.
                </div>
            </div>
            <div className="NCHService-card">
                <div className="NCHService-line" />
                <div className="NCHService-description">
                    어느 정도의 규모인지, 기본적인 로직을 알고 있는지,
                    가장 중요한 연락이 잘 되는지 손발을 잘 맞춰야지만
                    원하는 순위 포지셔닝이 가능합니다.
                </div>
            </div>
            <div className="NCHService-card">
                <div className="NCHService-line" />
                <div className="NCHService-description">
                    노출의 가장 중요한 SEO를 최적화하는게 중요하며
                    보다 전략적으로 노출되도록
                    제품군에 맞는 연구와 분석을 통해 결과를 도출합니다.
                </div>
            </div>
            <div className="Vision-container">
                <div className="Vision-card">
                    <div className="Vision-card-description">
                        정보의 비대칭이 심해짐에 따라<br />비양심적으로 일하는 곳이 너무나 많습니다.
                    </div>
                </div>
                <div className="Vision-card">
                    <div className="Vision-card-description">
                    정직하게.. 거짓 없이 일하겠습니다.<br />방식보다 중요한 것은 어떤 업체와 함께 하느냐입니다.
                    </div>
                </div>
                <div className="Vision-card">
                    <div className="Vision-card-description">
                        대형키워드부터 소형 키워드까지<br />구매전환은 어느정도 이루어지고 있는지<br />유입량은 어느정도 이루어지고 있는지
                    </div>
                </div>
                <div className="Vision-card">
                    <div className="Vision-card-description">
                        저희와 함께하면 다릅니다.
                    </div>
                </div>
            </div>
        </>
    )
}