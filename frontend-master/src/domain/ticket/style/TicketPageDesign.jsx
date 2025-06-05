import React from "react";
import styled from "styled-components";

// import 명 이렇게 사용하시면 됩니다(경로는 각자 수정 필요!)
// import * as TicketPages from "../style/TicketPageDesign";

export const TicketPageMain = styled.div`
  height: 100%;
`;

export const BottomArea = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Calendar1 = styled.div`
  width: 50%;
  cursor: pointer;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const ShowList = styled.div`
  width: 50%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const ListDot = styled.div`
  list-style-type: none;
  cursor: pointer;
  text-decoration: none;
  color: #816b6b;
  max-height: 400px;
  overflow-y: scroll;
  /* 모바일에서 높이 줄이기 */
  @media (max-width: 1024px) {
    max-height: 300px;
  }
  @media (max-width: 600px) {
    max-height: 200px;
    font-size: 14px;
  }
  @media (max-width: 480px) {
    max-height: 180px;
    font-size: 12px;
  }
  div {
    margin-bottom: 6px;
    color: #816b6b;
    text-decoration: none;
    height: 100%;
    &:hover {
      background-color: #f0f0f0;
      color: #333;
    }
  }
  @media (max-width: 600px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const AccordionContainer = styled.div`
  margin-top: 1rem;
  height: 100%;
`;

export const AccordionSection = styled.div`
  padding-bottom: 8px;
`;

export const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f0f0;
  padding-left: 10px;
  padding-right: 10px;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
`;

export const AccordionMainButton = styled.div`
  color: #705959;
`;

export const TopCategoryBar = styled.div`
  background-color: #f0f0f0;
  border-radius: 10px;
  margin-bottom: 15px;
`;

export const SelectCategory = styled.div`
  padding: 10px;
  border-radius: 5px;
`;

export const CategoryCheckboxMain = styled.div`
  padding: 10px;
  text-align: center;
`;

export const CheckboxGrid = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

export const CategoryCheckbox = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
  padding: 25px;
  border-radius: 10px;
  &:hover {
    background-color: #f5f5f5;
  }
  @media (max-width: 1024px) {
    padding: 20px;
  }
  @media (max-width: 600px) {
    padding: 15px;
  }
  @media (max-width: 480px) {
    padding: 10px;
    font-size: 14px;
  }
`;

export const CheckboxInput = styled.input`
  width: 16px;
  height: 16px;
`;

export const SearchTitleAndCastDiv = styled.div`
  text-align: center;
  padding: 15px;
  border-radius: 5px;
`;

export const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const SearchInput = styled.input`
  width: 300px;
  height: 48px;
  font-size: 16px;
  padding: 0 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  @media (max-width: 1024px) {
    width: 70%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const SearchButton = styled.button`
  height: 48px;
  padding: 0 20px;
  font-size: 16px;
  background-color: #f0b8b8;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: #ec7d7d;
  }
`;

export const SeDate = styled.div`
  background-color: #f0b8b8;
  padding: 8px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const StartDate = styled.div`
  display: flex;
  width: 50%;
  font-weight: bold;
  color: #6b4b4b;
  margin-left: 5px;

  label {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  @media (max-width: 1024px) {
    width: 48%;
    margin-left: 0;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const EndDate = styled.div`
  display: flex;
  width: 50%;
  font-weight: bold;
  color: #6b4b4b;
  margin-left: 35px;
  label {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  @media (max-width: 1024px) {
    width: 48%;
    margin-left: 0;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const DateInput = styled.div`
  margin-left: 7px;
  .react-datepicker__day--outside-month {
    color: #ccc !important;
  }
  .react-datepicker__input-container input {
    width: 150px !important;
    padding: 6px 8px !important;
    font-size: 14px !important;
    border-radius: 6px;
    border: 0px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 -2px 4px rgba(0, 0, 0, 0.05);
  }
  @media (max-width: 600px) {
    margin-left: 0;
    .react-datepicker__input-container input {
      width: 130px !important;
    }
  }

  @media (max-width: 480px) {
    .react-datepicker__input-container input {
      width: 100px !important;
    }
  }
`;

export const DataList = styled.div`
  display: flex;
  justify-content: baseline;
  height: 10px;
`;

export const TicketItemTextTitle = styled.p`
  font-size: 16px;
  margin-left: 20px;

  @media (max-width: 600px) {
    font-size: 15px;
    margin-left: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-left: 10px;
  }
`;

export const TicketItemTextCompany = styled.p`
  font-size: 10px;
  margin-top: 25px;
  margin-left: 5px;
  @media (max-width: 600px) {
    font-size: 9px;
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    font-size: 8px;
    margin-top: 15px;
    margin-left: 3px;
  }
`;
