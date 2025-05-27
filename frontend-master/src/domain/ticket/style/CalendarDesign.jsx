import React from "react";
import styled, { css } from "styled-components";

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

// export const Day

export const DayBox = styled.div`
  border: 1px solid #eee;
  padding: 8px;
  min-height: 60px;
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
  color: rgb(180, 75, 180);
  font-size: 0.7rem;
  font-weight: 500;
`;

export const SportsBadge = styled(EventBadge)`
  color: rgb(99, 167, 99);
  font-size: 0.7rem;
  font-weight: 500;
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
