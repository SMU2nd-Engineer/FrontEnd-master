import React from "react";
import * as Popup from "../style/PopupPageDesign";

const PopupPage = ({ info, onClose }) => {
  if (!info) return null;

  return (
    <Popup.PopupOverlay onClick={onClose}>
      <Popup.PopupContent onClick={(e) => e.stopPropagation()}>
        <Popup.PopupCloseButton onClick={onClose}>×</Popup.PopupCloseButton>
        <div>
          <div style={{ display: "flex", gap: "5px" }}>
            <h3>{info.title}</h3>
            <p> - {info.company}</p>
          </div>
          <Popup.TicketInfoBox>
            <Popup.TicketInfoImg>
              {info.img && <img src={info.img} alt={info.title} />}
            </Popup.TicketInfoImg>
            <Popup.TicketInfo>
              <p>
                <strong>가격</strong> <br />{" "}
                <Popup.InfoDetail>
                  {(info.price || "정보 없음").split("/").map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </Popup.InfoDetail>
              </p>
              {info.cast && (
                <p>
                  <strong>출연진:</strong>{" "}
                  <Popup.InfoDetail>
                    {" "}
                    {info.cast
                      .replace(/\s*\/\s*/g, ", ")
                      .replace(/,+$/, "")}{" "}
                  </Popup.InfoDetail>
                </p>
              )}
              <p>
                <strong>공연 기간</strong>
                <br />
                <Popup.InfoDetail>
                  {info.sdate ? info.sdate.slice(0, 10) : "정보 없음"} ~{" "}
                  {info.edate ? info.edate.slice(0, 10) : "정보 없음"}
                </Popup.InfoDetail>
              </p>
              <p>
                <strong>장소</strong>
                <br />
                <Popup.InfoDetail>{info.place}</Popup.InfoDetail>
              </p>
              <p>
                <strong>공연 시간</strong>
                <br />
                <Popup.InfoDetail>
                  {info.runningTime || "정보 없음"}
                </Popup.InfoDetail>
              </p>
              <Popup.TicketAgeAndButton>
                <p>
                  <strong>관람 연령</strong>
                  <br />
                  <Popup.InfoDetail>
                    {info.grade || "전체 관람가"}
                  </Popup.InfoDetail>
                </p>
                {info.company === "인터파크" && (
                  <a href={info.link} target="_blank" rel="noopener noreferrer">
                    <Popup.TicketLinkButton>
                      인터파크 티켓 바로가기
                    </Popup.TicketLinkButton>
                  </a>
                )}
                {info.company === "티켓링크" && (
                  <a href={info.link} target="_blank" rel="noopener noreferrer">
                    <Popup.TicketLinkButton>
                      티켓링크 티켓 바로가기
                    </Popup.TicketLinkButton>
                  </a>
                )}
                {info.company === "멜론티켓" && (
                  <a href={info.link} target="_blank" rel="noopener noreferrer">
                    <Popup.TicketLinkButton>
                      멜론 티켓 바로가기
                    </Popup.TicketLinkButton>
                  </a>
                )}
              </Popup.TicketAgeAndButton>
            </Popup.TicketInfo>
          </Popup.TicketInfoBox>
        </div>
        {info.etc && (
          <Popup.NoticeSection>
            <h3>유의 사항</h3>
            <p>{info.etc}</p>
          </Popup.NoticeSection>
        )}
      </Popup.PopupContent>
    </Popup.PopupOverlay>
  );
};

export default PopupPage;
