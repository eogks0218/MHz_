import React from "react";
import emailjs from "emailjs-com";
import "../../scss/Contact/ContactModal.scss";

export default function ContactModal(props) {
    const {
        name,
        company,
        email,
        phone,
        site,
        description,
        closeModal,
        resetForm
    } = props;

    // 이메일 전송 함수
    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: name,
            from_email: email,
            phone: phone,
            company: company,
            site: site,
            description: description
        };

        // EmailJS로 이메일 전송
        emailjs
            .send("yck4646", "template_4drnqpp", templateParams, "rPF01Z08xNsL6Wx3n")
            .then((response) => {
                console.log("성공적으로 이메일을 보냈습니다:", response);
                alert("이메일을 성공적으로 보냈습니다!");
                resetForm();
                closeModal(); // 이메일 전송 후 모달 닫기
            }, (error) => {
                console.error("이메일 전송 실패:", error);
                alert("이메일 전송에 실패했습니다.");
            });
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>입력한 내용</h2>
                <p>
                    <strong>담당자 :</strong>
                    {name}</p>
                <p>
                    <strong>기관/기업명 :</strong>
                    {company}</p>
                <p>
                    <strong>이메일 :</strong>
                    {email}</p>
                <p>
                    <strong>전화번호 :</strong>
                    {phone}</p>
                <p>
                    <strong>기존 사이트 :</strong>
                    {site}</p>
                <p>
                    <strong>설명/문의 :</strong>
                    {description}</p>
                <div className="modal-buttons">
                    <button onClick={sendEmail}>문의하기</button>
                    <button onClick={closeModal}>취소</button>
                </div>
            </div>
        </div>
    );
}