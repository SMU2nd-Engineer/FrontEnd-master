import styled from "styled-components";

export const Header_nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 164px;
  z-index: 10;
  background: #ffffff;
  border-bottom: 1px solid #eeeeee !important;
  display: block;
  box-sizing: border-box;
  color: #9a8a8a;


.navigation {
  width: 1020px;
  flex-direction: column;
  margin: 0 auto;

  @media (max-width: 768px) {
      width: 100%;
      padding: 0 16px;
    }
  
}
/* 검색 게시판 상품등록 마이페이지 */
.nav-top {
  display: flex;
  justify-content: flex-end;
  z-index: 100;

  margin-top: 5px;
  margin-bottom: 40px;
  color: #9a8a8a;
}


  .nav-top {
    display: flex;
    justify-content: flex-end;
    z-index: 100;
    margin-top: 5px;
    margin-bottom: 40px;
    color: #9a8a8a;
    flex-wrap: wrap; /* 줄바꿈 허용 */
  }

  .nav-bottom {
    max-width: 1028px;
    height: 100%;
    background: #ffffff;
    z-index: 100;

    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin: 0 auto;
    box-sizing: border-box;
    color: #9a8a8a;
    flex-wrap: wrap; /* 화면 좁을 때 줄바꿈 허용 */
    gap: 10px;
  }

  .nav-left {
    align-items: flex-end;
    gap: 10px;
    display: flex;
    flex-shrink: 1; /* 너비 줄이기 허용 */
    min-width: 0; /* 오버플로우 방지 */
  }

  .nav-left,
  .nav-top,
  .nav-right {
    display: flex;
    gap: 20px;
    flex-shrink: 1;
    min-width: 0;
  }

  .nav-top,
  .nav-right {
    align-items: center;
    gap: 20px;
    flex-shrink: 1;
    min-width: 0;
  }

  /* Site name */
  .site_name {
    img {
      width: 150px;
      max-width: 100%;
      height: auto;
      display: block;
    }
  }

  /* MARKET | TICKET */
  .main-link {
    font-size: 30px;
    font-weight: 600;
    white-space: nowrap;
  }

  /* 로그인 */
  .login {
    font-size: 24px;
    font-weight: 500;
    display: flex;
    align-items: center;
    white-space: nowrap;
  }

  /* Chat Icon */
  svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }

  /* 미디어쿼리 */

  @media (max-width: 1024px) {
    height: auto;
    padding: 20px 10px;

    .navigation {
      max-width: 90%;
    }
    .nav-top {
      margin-bottom: 30px;
      justify-content: flex-end;
      font-size: 14px;
      gap: 15px;
      flex-wrap: wrap;
    }
    .nav-bottom {
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }
    .nav-left {
      gap: 8px;
      align-items: center;
    }
    .nav-left,
    .nav-top,
    .nav-right {
      gap: 15px;
    }
    .site_name img {
      width: 130px;
    }
    .main-link {
      font-size: 26px;
    }
    .login {
      font-size: 20px;
    }
    svg {
      width: 18px;
      height: 18px;
    }
  }

  @media (max-width: 600px) {
    height: auto;
    padding: 15px 10px;

    .navigation {
      max-width: 95%;
    }
    .nav-top {
      margin-bottom: 20px;
      font-size: 12px;
      justify-content: flex-end;
      flex-wrap: wrap;
    }
    .nav-bottom {
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
    }
    .nav-left {
      gap: 6px;
      align-items: center;
      flex: 1 1 45%;
      min-width: 0;
    }
    .nav-right {
      flex: 1 1 45%;
      justify-content: flex-end;
      min-width: 0;
    }
    .site_name img {
      width: 110px;
    }
    .main-link {
      font-size: 22px;
    }
    .login {
      font-size: 18px;
    }
    svg {
      width: 16px;
      height: 16px;
    }
  }

  @media (max-width: 480px) {
    height: auto;
    padding: 10px 5px;

    .navigation {
      max-width: 100%;
      padding: 0 10px;
    }
    .nav-top {
      margin-bottom: 15px;
      font-size: 13px;
      justify-content: flex-end;
      gap: 10px;
      flex-wrap: wrap;
    }
    .nav-bottom {
      flex-wrap: wrap; /* nowrap 제거해서 줄바꿈 허용 */
      justify-content: space-between;
      align-items: center;
      gap: 6px;
    }
    .nav-left,
    .nav-right {
      width: auto;
      justify-content: flex-start;
      gap: 8px;
      min-width: 0;
      flex-shrink: 1;
    }
    .nav-right {
      justify-content: flex-end;
    }
    .site_name img {
      width: 100px;
    }
    .main-link {
      font-size: 20px;
      white-space: nowrap;
    }
    .login {
      font-size: 18px;
      white-space: nowrap;
    }
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export const Logout = styled.div`
  button {
    font-size: 24px;
    font-weight: 500;
    width: auto;
    display: flex;
    align-items: center;
    color: #9a8a8a;

    @media (max-width: 1024px) {
      font-size: 20px;
    }
    @media (max-width: 600px) {
      font-size: 18px;
    }
    @media (max-width: 480px) {
      font-size: 18px;
    }
  }
`;
