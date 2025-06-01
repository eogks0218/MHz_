import { Link, useLocation } from "react-router-dom";
import "../../scss/common/Header.scss";

export default function Header() {
    const location = useLocation();  // 현재 위치를 가져옵니다

    return (
        <div className="Header-container">
            <Link to="/">
                <div className="Header-logo" />
            </Link>
            <nav className="Header-menu">
                <ul className="mainMenu-ul">
                    <li className={`mainMenu-li ${location.pathname === "/MHz" ? "active" : ""}`}>
                        <Link to="/MHz">회사소개</Link>
                    </li>
                    <li className={`mainMenu-li ${location.pathname.includes("/MHz/ServiceCV") || location.pathname.includes("/MHz/ServiceNCH") ? "active" : ""}`}>
                        <Link to="/MHz/ServiceCV">서비스</Link>
                        <ul className="subMenu-ul">
                            <li className={`subMenu-li ${location.pathname === "/MHz/ServiceCV" ? "active" : ""}`}>
                                <Link to="/MHz/ServiceCV">카페, 커뮤니티 바이럴</Link>
                            </li>
                            <li className={`subMenu-li ${location.pathname === "/MHz/ServiceNCH" ? "active" : ""}`}>
                                <Link to="/MHz/ServiceNCH">N쇼핑, N플레이스, 쿠팡</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={`mainMenu-li ${location.pathname.includes("/MHz/Success") || location.pathname.includes("/MHz/PortPolio") ? "active" : ""}`}>
                        <Link to="/MHz/Success">성공사례</Link>
                        <ul className="subMenu-ul">
                            <li className={`subMenu-li ${location.pathname === "/MHz/Success" ? "active" : ""}`}>
                                <Link to="/MHz/Success">성공사례</Link>
                            </li>
                            <li className={`subMenu-li ${location.pathname === "/MHz/PortPolio" ? "active" : ""}`}>
                                <Link to="/MHz/PortPolio">포트폴리오</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={`mainMenu-li ${location.pathname === "/MHz/Contact" ? "active" : ""}`}>
                        <Link to="/MHz/Contact">문의하기</Link>
                    </li>
                    <li className="Header-transition-container">
                        <span className="Header-transition">
                            <span>KR</span>
                        </span>
                        <span className="Header-transition">
                            <span>CH</span>
                        </span>
                    </li>
                </ul>
            </nav>
        </div>
    );
}