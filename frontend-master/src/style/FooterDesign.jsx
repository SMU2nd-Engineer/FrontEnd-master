import styled from "styled-components";

export const Footer_nav = styled.nav`
  /* position: fixed; */
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  /* height: 200px; */
  background: #f3f2f2;

  border-top: 1px solid #eeeeee !important ;
  display: block;
  box-sizing: border-box;
  /* text-align: center; */
  padding: 30px;
  margin: 0 auto;

.navigation {
  width: 100%;
  flex-direction: column;
  margin: 0 auto;
  
}

.ftMenu {
  color: rgb(170, 170, 170);
  display: flex;
  gap: 30px;
  justify-content: center;
  margin: 0 auto;
}

.ft-column{
  margin-top: 20px;
  justify-content: center;
  display: flex;
  gap: 60px;
  text-align: left;

  color: rgb(170, 170, 170);
  
}

.left-column {
  flex: 1;
  /* border: 1px dotted rgb(168, 168, 168); */
  
}

.right-column{
  flex: 1;
  /* border: 1px dotted rgb(168, 168, 168); */
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

`

export const HorizontalDivider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #d4d4d4;
  margin-top: 20px ;
`

export const Reference = styled.div`
  margin-top: 3%;
  display: flex;
  
  a {
    display: flex;
    align-items: center;
    gap: 5px;

    span {
      font-size: 16px;
    }
  }

  .tickets{
    flex: 1;
  }

  .markets{
    flex: 1;
  }

  &:hover{
    cursor: pointer;
  }
`