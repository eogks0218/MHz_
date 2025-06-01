import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import imageData from "./ImagesP.json";  // 수정된 JSON 데이터 import
import "../../scss/PortPolio/PortPolioList.scss";

export default function PortPolioList({ currentTab }) {
    const [currentPage, setCurrentPage] = useState(0);
    const [items, setItems] = useState([]);
    const itemsPerPage = 6;  // 한 페이지당 보여줄 항목 수

    useEffect(() => {
        // 현재 탭에 맞는 이미지 목록을 설정
        let selectedItems = [];
        
        // currentTab에 따라 다른 이미지 데이터 로딩
        if (currentTab === "ALL") {
            selectedItems = imageData.PE;
        } else if (currentTab === "CAF") {
            selectedItems = imageData.CAF;
        } else if (currentTab === "COM") {
            selectedItems = imageData.COM;
        } else if (currentTab === "NC") {
            selectedItems = imageData.NC;
        }

        console.log(selectedItems)
        
        setItems(selectedItems);
        setCurrentPage(0); // 탭이 변경될 때 페이지를 1페이지로 초기화

        // window.scrollTo({
        //     top: window.innerHeight * 2,
        //     behavior: "smooth"
        // })
    }, [currentTab]);

    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageChange = (selected) => {
        setCurrentPage(selected.selected);
        // window.scrollTo({
        //     top: window.innerHeight * 2,
        //     behavior: "smooth"
        // });
    };

    // 현재 페이지에 해당하는 항목들만 필터링
    const currentItems = items.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    return (
        <div className="PortPolioList-container">
            <div className="PortPolioList-images">
                {currentItems.map((image, index) => (
                    <div key={index} className="PortPolioList-image-item">
                        {/* <div className="PortPolioList-image-item-phone" /> */}
                        <img src={`/images/reviews/${image}`} alt={`review-${index}`} />
                    </div>
                ))}
            </div>
            {pageCount > 0 && (
                <Pagination
                    pageCount={pageCount}
                    onPageChange={handlePageChange}
                    currentPage={currentPage}
                />
            )}
        </div>
    );
}