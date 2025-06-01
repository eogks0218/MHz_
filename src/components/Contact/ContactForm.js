import React, { useState, useEffect } from "react";
import "../../scss/Contact/ContactForm.scss";
import ContactModal from "./ContactModal";

// ContactForm 컴포넌트
export default function ContactForm() {
    // 상태 관리 (input 값들)
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [site, setSite] = useState("");
    const [description, setDescription] = useState("");
    const [showModal, setShowModal] = useState(false); // 모달 보이기/숨기기 상태

    // 모달이 열릴 때 body에 클래스를 추가하고, 닫힐 때 클래스를 제거
    useEffect(() => {
        if (showModal) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }

        // 컴포넌트 언마운트 시 클래스 제거
        return () => document.body.classList.remove("modal-open");
    }, [showModal]);

    // 폼 제출 처리
    const handleSubmit = (e) => {
        e.preventDefault();
        // 제출 후 모달 표시
        setShowModal(true);
    };

    const resetForm = () => {
        setName("");
        setCompany("");
        setEmail("");
        setPhone("");
        setSite("");
        setDescription("");
    };

    return (
        <>
            <form className="ContactForm" onSubmit={handleSubmit}>
                <div className="input-group">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <label htmlFor="name">담당자분의 성함과 직책을 적어주세요.</label>
                </div>
                <div className="input-group">
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        required
                    />
                    <label htmlFor="company">기관 혹은 기업명을 적어주세요.</label>
                </div>
                <div className="input-group">
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="email">이메일 주소를 적어주세요.</label>
                </div>
                <div className="input-group">
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                    <label htmlFor="phone">전화번호를 적어주세요.</label>
                </div>
                <div className="input-group inputsite-group">
                    <input
                        type="text"
                        id="site"
                        name="site"
                        value={site}
                        onChange={(e) => setSite(e.target.value)}
                        required
                    />
                    <label htmlFor="site">기존 사이트가 있으신 경우 적어주세요. (기존 사이트가 없으신 경우 "없음"으로 기입해주세요.)</label>
                </div>
                <div className="input-group textarea-group">
                    <textarea
                        id="description"
                        name="description"
                        rows="5"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                    <label htmlFor="description">프로젝트에 대한 설명 혹은 문의 내용을 적어주세요.</label>
                </div>
                <div className="checkbox-input">
                    <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        required
                    />
                    <label htmlFor="consent">
                        <span>개인정보 수집 및 이용에 동의합니다.</span>
                    </label>
                </div>
                <button type="submit">문의하기</button>
            </form>

            {/* 모달이 표시될 때만 보여줌 */}
            {showModal && <ContactModal 
                name={name} 
                company={company} 
                email={email} 
                phone={phone} 
                site={site} 
                description={description} 
                closeModal={() => setShowModal(false)} 
                resetForm={resetForm} // 상태 초기화 함수 전달
            />}
        </>
    );
}