import { Link } from "react-router-dom";
import "../../scss/common/FooterMenu.scss";

export default function FooterMenu({page}) {

    return (
        <div className="FooterMenu-container">
            <h1>Menu .</h1>
            <ul>
                <li className={page === "home" ? "active" : ""}><Link to="/MHz">회사소개</Link></li>
                <li className={page === "serviceCV" ? "active" : "" || page === "serviceNCH" ? "active" : ""}>
                    <Link to="/MHz/ServiceCV">서비스</Link>
                    <ul>
                        <li className={page === "serviceCV" ? "active" : ""}>
                            <Link to="/MHz/ServiceCV">카페, 커뮤니티 바이럴</Link>
                        </li>
                        <li className={page === "serviceNCH" ? "active" : ""}>
                            <Link to="/MHz/ServiceNCH">N쇼핑, N플레이스, 쿠팡</Link>
                        </li>
                    </ul>
                </li>
                <li className={page === "success" ? "active" : "" || page === "portpolio" ? "active" : ""}>
                    <Link to="/MHz/Success">성공사례</Link>
                    <ul>
                        <li className={page === "success" ? "active" : ""}>
                            <Link to="/MHz/Success">성공사례</Link>
                        </li>
                        <li className={page === "portpolio" ? "active" : ""}>
                            <Link to="/MHz/PortPolio">포트폴리오</Link>
                        </li>
                    </ul>
                </li>
                <li className={page === "contact" ? "active" : ""}><Link to="/MHz/Contact">문의하기</Link></li>
            </ul>
        </div>
    );
}