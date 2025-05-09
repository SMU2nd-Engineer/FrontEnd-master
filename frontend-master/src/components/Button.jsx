const Button = ({
  text,
  onClick,
  imgSrc = null,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      className="Button"
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {/* 이미지가 있을 경우 버튼 이미지를 보여줌 - 소셜 로그인 관련 기능 */}
      {imgSrc ? <img src={imgSrc} alt={text} /> : text}
    </button>
  );
};

export default Button;
