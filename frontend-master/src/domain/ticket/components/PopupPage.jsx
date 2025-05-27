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
        <div>
          <div>
            <h3>
              {info.title} - {info.company}
            </h3>
          </div>
          <div className="ticket-infoBox">
            <div className="ticket-info-img">
              {info.img && <img src={info.img} alt={info.title} />}
            </div>
            <div className="ticket-info">
              <p>
                <strong>가격</strong> <br />{" "}
                <span className="info-detail">
                  {(info.price || "정보 없음").split("/").map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </span>
              </p>
              {info.cast && (
                <p>
                  <strong>출연진:</strong>{" "}
                  <span className="info-detail">
                    {" "}
                    {info.cast
                      .replace(/\s*\/\s*/g, ", ")
                      .replace(/,+$/, "")}{" "}
                  </span>
                </p>
              )}
              <p>
                <strong>공연 기간</strong>
                <br />
                <span className="info-detail">
                  {info.sdate ? info.sdate.slice(0, 10) : "정보 없음"} ~{" "}
                  {info.edate ? info.edate.slice(0, 10) : "정보 없음"}
                </span>
              </p>
              <p>
                <strong>장소</strong>
                <br />
                <span className="info-detail">{info.place}</span>
              </p>
              <p>
                <strong>공연 시간</strong>
                <br />
                <span className="info-detail">
                  {info.runningTime || "정보 없음"}
                </span>
              </p>
              <div className="ticket-age-and-button">
                <p>
                  <strong>관람 연령</strong>
                  <br />
                  <span className="info-detail">
                    {info.grade || "전체 관람가"}
                  </span>
                </p>
                {info.company === "인터파크" && (
                  <a href={info.link} target="_blank" rel="noopener noreferrer">
                    <button className="ticket-button">
                      인터파크 티켓 바로가기
                    </button>
                  </a>
                )}
                {info.company === "티켓링크" && (
                  <a href={info.link} target="_blank" rel="noopener noreferrer">
                    <button className="ticket-button">
                      티켓링크 티켓 바로가기
                    </button>
                  </a>
                )}
                {info.company === "멜론티켓" && (
                  <a href={info.link} target="_blank" rel="noopener noreferrer">
                    <button className="ticket-button">
                      멜론 티켓 바로가기
                    </button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        {info.etc && (
          <div className="notice-section">
            <h3>유의 사항</h3>
            <p>{info.etc}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopupPage;
