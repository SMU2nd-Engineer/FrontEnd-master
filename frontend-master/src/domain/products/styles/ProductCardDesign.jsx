import styled from "styled-components";

export const Thumbnail = styled.div`
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  overflow: hidden;

  img{
    width: 210px;
    height: 227px;
    object-fit: cover;
  }

`

export const Product_card = styled.div `
  width: 210px;
  height: 340px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  .title {
    white-space: nowrap;
    /* overflow: hidden; */
    text-overflow: ellipsis;
    width: inherit;
  }
  &:hover {
    background: #e7e7e749;
    cursor: pointer;
  }
`

export const Button = styled.div`
    display: flex;
    justify-content: end;
    padding: 0 10px;

    button {
    width: 35px ;
    height: 35px;
    display: flex;
    justify-content: end;
    margin-top: -5px;
    
  }
`





  

