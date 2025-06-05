import styled from "styled-components";

export const Footer_nav = styled.nav`
  /* position: fixed; */
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: #f3f2f2;
  border-top: 1px solid #eeeeee !important;
  display: block;
  box-sizing: border-box;
  padding: 30px;
  margin: 0 auto;

  .navigation {
    width: 100%;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1024px;
    padding: 0 15px;
    box-sizing: border-box;
  }

  .ftMenu {
    color: rgb(170, 170, 170);
    display: flex;
    gap: 30px;
    justify-content: center;
    margin: 0 auto;
    flex-wrap: wrap;
  }

  .ft-column {
    margin-top: 20px;
    justify-content: center;
    display: flex;
    gap: 60px;
    text-align: left;
    color: rgb(170, 170, 170);

    flex-wrap: wrap; /* 줄바꿈 허용 */
  }

  .left-column {
    flex: 1;
    min-width: 280px;
  }

  .right-column {
    flex: 1;
    min-width: 280px;
  }

  .ft-h2 {
    color: rgb(63, 62, 62);
    font-size: 18px;
    font-weight: 500;
  }

  .member {
    font-size: 14px;
    margin-left: 5px;
  }

  /* 미디어 쿼리 */
  @media (max-width: 1024px) {
    padding: 25px 20px;

    .ftMenu {
      gap: 25px;
      font-size: 15px;
    }

    .ft-column {
      gap: 40px;
    }

    .ft-h2 {
      font-size: 17px;
    }

    .member {
      font-size: 13px;
    }
  }

  @media (max-width: 600px) {
    padding: 20px 15px;

    .ftMenu {
      gap: 20px;
      font-size: 14px;
      justify-content: center;
    }

    .ft-column {
      gap: 30px;
      flex-wrap: wrap;
    }

    .left-column,
    .right-column {
      min-width: 45%; /* 2열 유지하되 조금씩 줄임 */
      flex-grow: 1;
    }

    .ft-h2 {
      font-size: 16px;
    }

    .member {
      font-size: 12px;
    }
  }

  @media (max-width: 480px) {
    padding: 15px 10px;

    .ftMenu {
      gap: 15px;
      font-size: 13px;
    }

    .ft-column {
      gap: 20px;
      flex-wrap: wrap;
      flex-direction: column; /* 1열로 변경 */
      align-items: flex-start;
    }

    .left-column,
    .right-column {
      min-width: 100%;
      flex-grow: 0;
    }

    .ft-h2 {
      font-size: 15px;
    }

    .member {
      font-size: 12px;
    }
  }
`;

export const HorizontalDivider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #d4d4d4;
  margin-top: 20px;
`;

export const Reference = styled.div`
  margin-top: 3%;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;

  a {
    display: flex;
    align-items: center;
    gap: 5px;

    span {
      font-size: 16px;

      @media (max-width: 600px) {
        font-size: 14px;
      }

      @media (max-width: 480px) {
        font-size: 13px;
      }
    }
  }

  .tickets {
    flex: 1 1 45%;
    min-width: 150px;
  }

  .markets {
    flex: 1 1 45%;
    min-width: 150px;
  }

  &:hover {
    cursor: pointer;
  }
`;
