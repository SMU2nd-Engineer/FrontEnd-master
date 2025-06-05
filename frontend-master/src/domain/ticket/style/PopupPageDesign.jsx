import React from "react";
import styled, { css } from "styled-components";

// import 명 이렇게 사용하시면 됩니다(경로는 각자 수정 필요!)
// import * as Popup from "../style/PopupPageDesign";

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 반투명 검정 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const PopupContent = styled.div`
  background-color: #fefefe;
  border-radius: 12px;
  width: 95%;
  max-width: 860px;
  padding: 40px 50px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
  h3 {
    margin: 0 0 20px;
    font-size: 1.8rem;
    font-weight: 700;
    color: #222;
  }
  /* 1024px 이하 (태블릿) */
  @media (max-width: 1024px) {
    padding: 30px 35px;
    max-width: 700px;

    h3 {
      font-size: 1.6rem;
    }
  }

  /* 600px 이하 (작은 태블릿, 큰 모바일) */
  @media (max-width: 600px) {
    padding: 25px 20px;
    max-width: 90vw;

    h3 {
      font-size: 1.4rem;
    }
  }

  /* 480px 이하 (작은 모바일) */
  @media (max-width: 480px) {
    padding: 20px 15px;
    max-width: 95vw;

    h3 {
      font-size: 1.2rem;
    }
  }
`;

export const PopupCloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  font-weight: bold;
  color: #333;
  transition: color 0.3s;
  &:hover {
    color: #ff4d4d;
  }

  @media (max-width: 600px) {
    top: 15px;
    right: 15px;
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    top: 12px;
    right: 12px;
    font-size: 1.4rem;
  }
`;

export const TicketInfoBox = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  align-items: flex-start;
  @media (max-width: 1024px) {
    gap: 35px;
  }

  @media (max-width: 600px) {
    gap: 20px;
  }
`;

export const TicketInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 1rem;
  color: #444;
  p {
    margin: 0;
    line-height: 1.6;
    color: #444;
    padding-left: 10px;
    @media (max-width: 480px) {
      padding-left: 6px;
      font-size: 0.9rem;
    }
  }
  strong {
    display: inline-block;
    margin-bottom: 4px;
    font-weight: bold;
    color: #222;
    padding-left: 0;
    @media (max-width: 480px) {
      font-size: 0.95rem;
    }
  }
`;

export const TicketInfoImg = styled.div`
  img {
    width: 300px;
    max-width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    @media (max-width: 1024px) {
      width: 250px;
    }

    @media (max-width: 600px) {
      width: 180px;
    }

    @media (max-width: 480px) {
      width: 140px;
    }
  }
`;

export const TicketLinkButton = styled.button`
  padding: 12px 24px;
  background-color: #f0b8b8;
  color: white;
  border-radius: 20px;
  font-weight: bold;
  font-size: 1rem;
  white-space: nowrap;
  min-width: 200px;
  text-align: center;
  border: none;
  outline: none;
  /* white-space: nowrap; */
  &:hover {
    background-color: #eca1a1;
  }
  @media (max-width: 1024px) {
    min-width: 160px;
    padding: 10px;
    font-size: 0.7rem;
  }

  @media (max-width: 600px) {
    min-width: 140px;
    padding: 8px;
    font-size: 0.7rem;
  }

  @media (max-width: 480px) {
    min-width: 120px;
    padding: 6px;
    font-size: 0.65rem;
  }
`;

export const NoticeSection = styled.div`
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #ddd;
  h3 {
    font-size: 1.4rem;
    color: #333;
    margin-bottom: 10px;
    @media (max-width: 600px) {
      font-size: 1.2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.1rem;
    }
  }
  p {
    margin: 0;
    color: #555;
    line-height: 1.5;
    white-space: pre-wrap;
    @media (max-width: 600px) {
      font-size: 0.95rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
`;

export const InfoDetail = styled.span`
  display: block;
  padding-left: 15px;
  color: #555;
  @media (max-width: 480px) {
    padding-left: 8px;
    font-size: 0.9rem;
  }
`;

export const TicketAgeAndButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 10px;
  p {
    margin: 0;
    line-height: 1.6;
    color: #444;
    padding-left: 10px;
    margin: 0;
    flex: 1;
    @media (max-width: 480px) {
      padding-left: 6px;
      font-size: 0.9rem;
    }
  }
`;
