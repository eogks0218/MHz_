import "../../scss/pages/MainPage.scss"
import { Link } from "react-router-dom"

export default function MainPage(){

    return(
        <div className="MainPage-container">
            <video autoPlay loop muted src={`${process.env.PUBLIC_URL}/videos/main-back.mp4`} type="video/mp4" />
            <Link to='/MHz' className="MainLogo" >
            </Link>
        </div>
    )
}