import styled from "styled-components";

export const ErrorFontProduct = styled.p`
  color: #999;
  margin: 0 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;

export const ErrorFontReviewHeader = styled.h1`
  color: #999;
  margin: 0 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;

export const DisableWhenLoading = styled.div`
  button {
    pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
    background-color: #f0b8b8;
    color: white;
    border: none;
    padding: 0.5rem 1.2rem;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease, opacity 0.3s ease,
      transform 0.3s ease;

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
      opacity: 0.6;
      transform: scale(0.95);
    }

    &:not(:disabled):hover {
      background-color: white;
      color: #f0b8b8;
      border: 1px solid #f0b8b8;
      transform: scale(1.1);
    }
  }
`;
