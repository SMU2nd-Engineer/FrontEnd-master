import styled from "styled-components";

export const SearchContainer = styled.div`
  margin-left: 10px;
  
  span{
    color: #eb6666;
  }

  h2{
    font-weight: 500;
  }

  p {
    margin-left: 10px;
  }
`

export const SearchAllBar = styled.div`
  display: flex;
  align-items: center;

  input {
    width: 250px;
    height: 30px;
    font-size: 23px;
    font-weight: 400;
    /* margin-left: ;   */
  }

  button {
    margin-left: 5px;
    width: 60px;
    height: 40px;

    &:hover{
      background-color: #818080;
      color: #fff;
    }
  }
`

export const SearchResult = styled.div`
  p{
    color: #666;
  }
`

export const ProductResult = styled.div`
  margin-bottom: 60px;
`

export const MoreButton = styled.div`
  text-decoration: underline;
  color: #666666;
  
  &:hover{
    cursor: pointer;
  }
`