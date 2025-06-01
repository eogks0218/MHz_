import "../../scss/PortPolio/PortPolioOne.scss";
import { useState } from "react";
import PortPolioList from "./PortPolioList";

export default function PortPolioOne() {
    const [currentTab, setCurrentTab] = useState("ALL");

    const handleTabClick = (tab) => {
        setCurrentTab(tab);
    };

    return (
        <>
            <div className="upper-hr" />
            <h1>PortPolio</h1>
            <h2>확실한건 만족도입니다 !</h2>
            <div className="PortPolio-tab">
                <div
                    className={`PortPolio-tab-item ${currentTab === "ALL" ? "active" : ""}`}
                    onClick={() => handleTabClick("ALL")}
                >
                    침투 후기
                </div>
                <div
                    className={`PortPolio-tab-item ${currentTab === "CAF" ? "active" : ""}`}
                    onClick={() => handleTabClick("CAF")}
                >
                    카페
                </div>
                <div
                    className={`PortPolio-tab-item ${currentTab === "COM" ? "active" : ""}`}
                    onClick={() => handleTabClick("COM")}
                >
                    커뮤니티
                </div>
                <div
                    className={`PortPolio-tab-item ${currentTab === "NC" ? "active" : ""}`}
                    onClick={() => handleTabClick("NC")}
                >
                    N쇼핑, N플레이스, 쿠팡
                </div>
            </div>
            <PortPolioList currentTab={currentTab} />
        </>
    );
}