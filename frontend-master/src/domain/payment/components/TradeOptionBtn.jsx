import { memo } from "react";

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
    <button
      onClick={() => onClick(type)}
      className={`${className} ${selected === type ? 'select' : ''}`}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: '1rem',
        textAlign: 'left'
      }}
    >
      <div style={{textAlign: 'left', fontSize: '13px'}}>
        <h3 style={{ fontSize: '15px', fontWeight: 'bold'}} >{title}</h3>
        <p>{description}</p>
      </div>
      {price && <span style={{marginLeft: '1rem', whiteSpace: 'nowrap'}}>{price}원</span>}
    </button>
  );
};

export default TradeOptionBtn;