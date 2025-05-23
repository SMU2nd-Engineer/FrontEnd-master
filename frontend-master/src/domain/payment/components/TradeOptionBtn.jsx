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
      className={`${className} ${selected === type ? 'selected' : ''}`}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: '1rem',
        textAlign: 'left'
      }}
    >
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {price && <span style={{marginLeft: 'auto'}}>{price}원</span>}
    </button>
  );
};

export default TradeOptionBtn;