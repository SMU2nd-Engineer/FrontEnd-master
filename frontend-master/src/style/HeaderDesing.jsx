import styled from "styled-components";

export const Header_nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 164px;
  z-index: 10;
  background: #ffffff;
  
  border-bottom: 1px solid #eeeeee !important ;

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

/* nav-left, nav-right */
.nav-bottom {
  max-width: 1028px;
  height: 100%;
  background: #ffffff;
  z-index: 100;
 
  display: flex;
  justify-content: space-between;
  align-items:baseline;

  margin: 0 auto;
  /* padding: 0 20px 25px 0; */
  box-sizing: border-box;

  color: #9a8a8a;
  
}

.nav-left {
  align-items: flex-end;
  gap: 10px;
}

.nav-left,
.nav-top,
.nav-right {
  display: flex;
  gap: 20px; 
}

.nav-top,
.nav-right {

  align-items: center;
  gap: 20px; 
}

/* Site name */
.site_name {
  img{
    width: 150px;
  }
}

/* MARKET | TICKET */
.main-link {
  font-size: 30px;
  font-weight: 600;
}

/* 로그인 */
.login {
  font-size: 24px;
  font-weight: 500;

  display: flex;
  align-items: center;

}


/* Chat Icon */
svg {
  width: 20px;
  height: 20px;
}

`
export const Logout = styled.div`
 button {
  font-size: 24px;
  font-weight: 500;
  width: auto;
  display: flex;
  align-items: center;

  color: #9a8a8a;
 }
  
`