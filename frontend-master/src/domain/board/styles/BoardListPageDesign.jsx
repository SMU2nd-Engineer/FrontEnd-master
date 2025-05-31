import styled from "styled-components";

export const Board_top = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 30%;
  button{
    /* border : 1px solid black; */
    background-color: #f0b8b8;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 -2px 4px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
  }

`;

export const Board_main = styled.div`
  width: 1000px;
  height: 800px;
  text-align: center;
  justify-content: end;

`;

export const Board_middleList = styled.div`
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 -2px 4px rgba(0, 0, 0, 0.05);
  background-color: #fffffff8;
  width: 100%;
  justify-content: center;
  text-align: center;
`;

export const Board_cotentsList = styled.table`
  width: 100%;
  height: 50%;
  padding: 30px;
  thead {
    th {
      background-color: #f5f4f4d5;
      color: #464646;
      text-align: center;
      font-size: 20px;
      border-bottom: 1px solid #ddd;
      padding: 12px 15px;
    }
  }
  tbody {   
    tr {
      text-align: center;
      
    } 
    td {
      padding: 12px 15px;
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

