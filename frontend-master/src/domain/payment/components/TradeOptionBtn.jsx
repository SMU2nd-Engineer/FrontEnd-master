import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  margin: 10px;
  text-align: left;
  border: 1px #ddd solid;
  cursor: pointer;

  &.select {
    border: 2px solid #f0b8b8;
    border-radius: 8px;
  }
`;

const TextWrapper = styled.div`
  text-align: left;
  font-size: 13px;
`;

const Title = styled.h3`
  font-size: 15px;
  font-weight: bold;
  margin: 0;
`;

const Description = styled.p`
`;

const Price = styled.span`
`;

const TradeOptionBtn = ({
  type,
  selected,
  onClick,
  title,
  description,
  className = "trade-option-button",
  price = null
}) => {
  return (
    <StyledButton
      onClick={() => onClick(type)}
      className={`${className} ${selected === type ? "select" : ""}`}
    >
      <TextWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextWrapper>
      {price && <Price>{price}원</Price>}
    </StyledButton>
  );
};

export default TradeOptionBtn;