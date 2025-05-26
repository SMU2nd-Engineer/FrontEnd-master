import React from "react";
import "../style/popup.css";

const PopupPage = ({ info, onClose }) => {
  if (!info) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close-btn" onClick={onClose}>
          ×
        </button>
        <h2>
          {info.title} - {info.company}
        </h2>
        {info.img && <img src={info.img} alt={info.title} />}
        <p>
          <strong>가격:</strong> {info.price || "정보 없음"}
        </p>
        {info.cast && (
          <p>
            <strong>출연진:</strong> {info.cast}
          </p>
        )}
        <p>
          <strong>공연 기간:</strong>{" "}
          {info.sdate ? info.sdate.slice(0, 10) : "정보 없음"} ~{" "}
          {info.edate ? info.edate.slice(0, 10) : "정보 없음"}
        </p>
        <p>
          <strong>장소:</strong> {info.place}
        </p>
        <p>
          <strong>공연 시간:</strong> {info.runningTime || "정보 없음"}
        </p>
        <p>
          <strong>관람 연령:</strong> {info.grade || "전체 관람가"}
        </p>
        <div>
          <strong>티켓 구매처:</strong>
          {info.company === "인터파크" && (
            <a href={info.link} target="_blank" rel="noopener noreferrer">
              <button className="ticket-button">인터파크 티켓 바로가기</button>
            </a>
          )}
          {info.company === "티켓링크" && (
            <a href={info.link} target="_blank" rel="noopener noreferrer">
              <button className="ticket-button">티켓링크 티켓 바로가기</button>
            </a>
          )}
          {info.company === "멜론티켓" && (
            <a href={info.link} target="_blank" rel="noopener noreferrer">
              <button className="ticket-button">멜론 티켓 바로가기</button>
            </a>
          )}
        </div>
        {info.etc && (
          <p>
            <strong>유의 사항:</strong> {info.etc}
          </p>
        )}
      </div>
    </div>
  );
};

export default PopupPage;
