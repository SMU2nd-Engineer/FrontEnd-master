import styled from "styled-components";

export const StarRatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  .star-svg {
    display: inline-block;
    width: 40px;
    height: 40px;
    margin-right: 5px;
    vertical-align: middle;
  }
`;

export const StarRatingContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  /* gap: 1rem; */
  margin: 1rem;
  align-items: center;
`;
