import styled from "styled-components"; 
 
export const SliderContainer = styled.div`
  width: 400px;
  height: 400px;
  /* overflow: hidden;
  display: flex; */
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
`;

export const Arrow = styled.button`
  color: #9a8a8a;
  font-size: 110%;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  left: ${({ direction }) => direction === "prev" && "0px"};
  right: ${({ direction }) => direction === "next" && "0px"};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f0b8b883;
  z-index: 1;
`;

// export const Slide = styled.div`
//   position: absolute;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   row-gap: 20px;
  
//   transition: opacity 0.3s ease-in-out;
//   &.active {
//     opacity: 1;
//   }
// `;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;
`;

export const ThumbnailWrapper = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
`;

export const ThumbnailImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 4px;

  border: ${({ isActive }) => (isActive ? "2px solid #333" : "1px solid transparent")};
  opacity: ${({ isActive }) => (isActive ? 1 : 0.6)};
  transition: all 0.2s ease-in-out;
`;