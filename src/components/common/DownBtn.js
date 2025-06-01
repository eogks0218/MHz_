import { FaChevronDown } from "react-icons/fa";

export default function DownBtn({position}){

    const scrollToPosition = (position) => {
        window.scrollTo({
            top: window.innerHeight * position,
            behavior: "smooth"
        });
    }

    return(
        <div className="down-btn" onClick={() => scrollToPosition(position)}>
            <FaChevronDown />
        </div>
    )
}