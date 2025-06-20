import React from "react";
import styled, { css } from "styled-components";

// import 명 이렇게 사용하시면 됩니다(경로는 각자 수정 필요!)
// import * as Calendars from "../style/CalendarDesign";

export const CalendarMain = styled.div`
  width: 100%;
  max-width: 530px;
  margin: 0 auto;
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Weekdays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-weight: bold;
  font-size: large;
  color: #6b5a5a;
  margin-bottom: 5px;
`;

export const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-weight: 500;
`;

export const DayBox = styled.div`
  border: 1px solid #eee;
  padding-top: 10px;
  height: 70px;
  position: relative;
  text-align: center;
  cursor: pointer;

  /* 현재 월 */
  ${(props) =>
    props.type === "current" &&
    css`
      color: #614242;
    `}

  /* 이전/다음 월 */
  ${(props) =>
    (props.type === "prev" || props.type === "next") &&
    css`
      color: #ccc;
    `}

  /* 선택된 날짜 */
  ${(props) =>
    props.selected &&
    css`
      background-color: #def;
    `}
`;

export const EventBadge = styled.div`
  font-size: 10px;
  margin-top: 4px;
`;

export const PerformanceBadge = styled(EventBadge)`
  color: rgb(186, 160, 230);
  font-size: 0.7rem;
  font-weight: 500;
  p {
    margin-bottom: 7px;
  }
`;

export const SportsBadge = styled(EventBadge)`
  color: rgb(135, 175, 226);
  font-size: 0.7rem;
  font-weight: 500;
  p {
    margin: 0;
  }
`;

export const MonthMoveButton = styled.button`
  font-size: xx-large;
  color: #816b6b;
`;

export const CalendarTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 0 16px;
  text-align: center;
  color: #7a5353;
`;
