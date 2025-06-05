import styled from "styled-components";

export const Thumbnail = styled.div`
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  overflow: hidden;
  width: 100%;

  img{
    width: 100%;
    /* height: 227px; */
    object-fit: cover;
    aspect-ratio: 210 / 227;

    @media (max-width: 600px) {
      aspect-ratio: 1 / 1;
    }
  }

`

export const Product_card = styled.div `
  width: 100%;
  height: 340px;
  aspect-ratio: 210 / 340;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  .title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: inherit;
  }
  &:hover {
    background: #e7e7e749;
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    width: 180px;
  }

  @media (max-width: 600px) {
    width: 180px;
    height: 290px;
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





  

