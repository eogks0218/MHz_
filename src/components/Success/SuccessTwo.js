import "../../scss/Success/SuccessTwo.scss";

export default function SuccessTwo() {
    return (
        <>
            <h1 className="SuccessTwo-title">
                <span>메가헤르츠의 바이럴 마케팅</span>을<br />
                만나면 놀라운 경험을 하실 수 있습니다.
            </h1>
            <div className="SuccessTwo-main-one">
                <div className="SuccessTwo-main-graph">
                    <video autoPlay loop muted src={`${process.env.PUBLIC_URL}/videos/success-two.mp4`} type="video/mp4" />
                </div>
                <div className="SuccessTwo-main-title">
                    A뷰티 월간 브랜드 검색 쿼리<br />
                    전월 대비 <span>500%</span> 증가
                </div>
                <div className="SuccessTwo-main-content">
                    광고비는 오히려 줄었는데 <span>우리의 브랜드</span>를 말하는 이야기는 더 늘어납니다.
                </div>
            </div>
            <div className="SuccessTwo-main-two">
                <div className="SuccessTwo-main-graph-two">
                    <video autoPlay loop muted src={`${process.env.PUBLIC_URL}/videos/success-three.mp4`} type="video/mp4" />
                </div>
                <div className="SuccessTwo-main-title-two">
                    B 오픈마켓 핫딜 진행에 따른<br/>
                    매출, 신규유입, 방문자 전일 대비 <span>2,000%</span> 증가!
                </div>
                <div className="SuccessTwo-main-content-two">
                    <span>핫딜 마케팅 전후 판매 급증 사례</span>는 셀 수 없을 정도로 많습니다.<br/>
                    핫딜 게시글 1건에 <span>매출 1천만원 달성, 이벤트 물량 완판,</span><br/>
                    핫딜 게시글 1건으로 누릴 수 있는 효과 <span>직접 경험해 보세요.</span>
                </div>
            </div>
            <div className="SuccessTwo-main-three">
                <div className="SuccessTwo-main-title-three">
                    <strong>스마트스토어 핵심 카테고리 키워드 장악</strong>으로 한 달 만에<br/>
                    <strong>온라인 신규 고객 모집 <span>500여건</span>이 증가</strong>한 A사 진행 사례
                </div>
                <div className="SuccessThree-main-graph-three">
                    <video autoPlay loop muted src={`${process.env.PUBLIC_URL}/videos/success-four.mp4`} type="video/mp4" />
                </div>
            </div>
        </>
    );
}