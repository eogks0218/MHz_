import ReactPaginate from "react-paginate";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Pagination = ({ pageCount, onPageChange, currentPage }) => {
    return (
        <ReactPaginate
            previousLabel={<FiChevronLeft />}
            nextLabel={<FiChevronRight />}
            pageCount={pageCount}
            pageRangeDisplayed={5} // 현재 페이지 주변에 표시할 페이지 수
            marginPagesDisplayed={1} // 처음과 끝에 표시할 페이지 수
            onPageChange={onPageChange}
            containerClassName={"pagination"}
            pageLinkClassName={"pagination__link"}
            activeLinkClassName={"pagination__link__active"}
            forcePage={currentPage}
            previousLinkClassName={currentPage === 0 ? "pagination__link--disabled" : ""}
            nextLinkClassName={currentPage === pageCount - 1 ? "pagination__link--disabled" : ""}
            disabledClassName={"pagination__link--disabled"}
        />
    );
}

export default Pagination;