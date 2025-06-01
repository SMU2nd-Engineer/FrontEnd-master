import styled from "styled-components";

export const Board_top = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 7px;
  p {
    margin-left: 0;
  }
`;

export const Board_TopHeaderButton = styled.button`
  font-size: 16px;
  background-color: #f0b8b8;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 -2px 4px rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: 5px;
  margin-top: 25px;
  margin-right: 5px;
  color: white;
  cursor: pointer;
  // 우선순위 버튼 높이기
  && {
    width: 75px;
    height: 35px;
  }
  &:hover {
    background-color: #ec7d7d;
  }
`;

export const Board_main = styled.div`
  width: 100%;
  height: 800px;
  text-align: center;
  justify-content: flex-end;
  padding: 15px;
`;

export const Board_mainHeader = styled.div`
  width: 100%;
`;

export const Board_middleList = styled.div`
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 -2px 4px rgba(0, 0, 0, 0.05);
  background-color: #fffffff8;
  width: 97%;
  justify-content: center;
  text-align: center;
  padding: 20px;
  margin-top: 8px;
`;

export const Board_cotentsList = styled.table`
  width: 100%;
  height: 50%;
  padding: 5px;
  thead {
    th {
      background-color: #f5f4f4d5;
      color: #464646;
      text-align: center;
      font-size: 18px;
      border-bottom: 1px solid #ddd;
      padding: 12px 15px;
    }
  }
  tbody {
    cursor: pointer;
    tr {
      text-align: center;
    }
    td {
      padding: 18px;
      border-bottom: 1px solid #eee;
    }
  }
`;

export const Board_contentsListMain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

export const Board_listPageFooter = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px 18px;
  border-radius: 30px;
  /* gap: 30px; */
  height: 30px;
`;

export const Board_SearchSelectBox = styled.div`
  margin-right: 30px;
  select {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 -2px 4px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    width: 120%;
    height: 118%;
    border: 0px;
  }
`;

export const Board_CategorySelectBox = styled.div`
  margin-right: 30px;
  select {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 -2px 4px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    width: 120%;
    height: 118%;
    border: 0px;
  }
`;

export const Board_SearchInput = styled.div`
  margin-right: 10px;
  input {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 -2px 4px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    width: 300px;
    height: 110%;
    border: 0px;
  }
`;

export const Board_SearchButton = styled.div`
  button {
    background-color: #f0b8b8;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 -2px 4px rgba(0, 0, 0, 0.05);
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    width: 50px;
    height: 115%;
  }
  &:hover {
    background-color: rgb(236, 125, 125);
  }
`;
