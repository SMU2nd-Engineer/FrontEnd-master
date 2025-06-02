import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
@font-face {
    font-family: 'Pretendard-Black';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Black.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
@font-face {
    font-family: 'Pretendard-Blod';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Blod.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

body, #root {
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Pretendard-Regular';
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  margin: 0 auto;
  
}

.body{
  background: #ffffff;
  min-height: 100%;
  margin-top: 170px;
  /* margin-bottom: 50px; */
  padding-bottom: 100px;
  flex: 1;
}

.app-main {    
  margin: 0 auto;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
  max-width: 1020px;
  /* position: relative; */
}

.pagetitle {
  font-family: 'Pretendard-Black';
  /* font-weight: 900; */
  font-size: 30px;
  text-align: left;
  margin: 15px 0px 15px 20px ;
  color: #3a3a3a;
}

.SearchBar {
  display: flex;
  gap: 10px;
  line-height: 200%;
  margin-bottom: 13px;
  align-items: center;
  
  input {
    border-color: transparent;
    
  }
}

.SearchBar form select {
  width: 100px;
  height: 60px;
  font-size: 80%;
  border-color: transparent;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  font-size: 1em;
  width: 70px;
  height: 60px;
  cursor: pointer;
  flex-shrink: 0;
  background-color: transparent;
}

a,
a:visited,
a:hover,
a:active {
  color: inherit;
  text-decoration: none;
}
`


export default GlobalStyle;