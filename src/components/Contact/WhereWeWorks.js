import "../../scss/Contact/WhereWeWorks.scss";

export default function WhereWeWorks(){

    return(
        <div className="WWW-container">
            <div className="WWW-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.4081222066443!2d126.82599167642098!3d37.285460140194786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b6e86597f11fb%3A0x3a5057420b3b7565!2z6rK96riw64-EIOyViOyCsOyLnCDsg4HroZ3qtawg7IKs64-ZIDE2MzktMjE!5e0!3m2!1sko!2skr!4v1731298191038!5m2!1sko!2skr"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Contact Location Map"
                />
            </div>
            <div className="WWW-content">
                <h1>010.9180.8989</h1>
                <h3>yckk@nate.com</h3>
                <p>경기도 안산시 상록구 해양3로 17 디지털전환허브 1001호</p>
            </div>
        </div>
    )
}