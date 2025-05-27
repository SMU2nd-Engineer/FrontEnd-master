import React from "react";
import styled from "styled-components";

// ticketPage - 하단 영역(달력, 공연 리스트)
export const BottomArea = styled.div`
  display: flex;
`;

export const Calendar1 = styled.div`
  width: 55%;
  cursor: pointer;
`;

export const ShowList = styled.div`
  width: 45%;
`;

export const ListDot = styled.ul`
  list-style-type: none;
  cursor: pointer;
  text-decoration: none;
  color: #816b6b;
  li {
    margin-bottom: 6px;
    color: #816b6b;
    text-decoration: none;
    &:hover {
      background-color: #f0f0f0;
      color: #333;
    }
  }
`;

export const AccordionContainer = styled.div`
  margin-top: 1rem;
`;

export const AccordionSection = styled.div`
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
`;

export const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f0f0f0;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  margin: "10px 0";
`;

export const AccordionMainButton = styled.div`
  color: #705959;
`;

export const TopCategoryBar = styled.div`
  background-color: #f0f0f0;
  padding: 0;
  border-radius: 5px;
  margin-bottom: 24px;
`;

export const SelectCategory = styled.div`
  padding: 15px;
  border-radius: 5px;
`;

export const CategoryCheckboxMain = styled.div`
  padding: 1rem;
  text-align: center;
`;

export const CheckboxGrid = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 3rem;
  overflow-x: auto;
  align-items: center;
  justify-content: center;
`;

export const CategoryCheckbox = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
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
`;

export const SearchInput = styled.input`
  width: 300px;
  height: 48px;
  font-size: 16px;
  padding: 0 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
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
`;

export const StartDate = styled.div`
  display: flex;
  width: 50%;
  font-weight: bold;
  color: #6b4b4b;
  margin-left: 5px;
`;

export const EndDate = styled.div`
  display: flex;
  width: 50%;
  font-weight: bold;
  color: #6b4b4b;
  margin-left: 35px;
`;

export const DateInput = styled.div`
  margin-left: 5px;
  .react-datepicker__day--outside-month {
    color: #ccc !important;
  }
`;

export const DataList = styled.div`
  display: flex;
  justify-content: baseline;
`;

export const TicketItemTextTitle = styled.p`
  font-size: 15px;
`;

export const TicketItemTextCompany = styled.p`
  font-size: 10px;
  margin-bottom: 0;
`;
