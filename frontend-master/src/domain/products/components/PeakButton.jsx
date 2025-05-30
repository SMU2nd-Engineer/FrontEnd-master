import { useState, useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { getProductDetail, postPeak } from "../services/productService";

const PeakButton = ({ idx }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPeak, setIsPeak] = useState(0);

  useEffect(() => {
    getProductDetail(idx)
      .then((res) => res.data)
      .then((data) => {
        console.log("#########", data);
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => console.error("상품 불러오기 실패:", err));
  }, [idx]);

  const handleClick = (e) => {
    e.stopPropagation();
    postPeak(idx);

    const isPeak = flag === 1 ? 0 : 1;
    setIsPeak(isPeak);
    if (onToggle) onToggle(idx, isPeak);
  };

  if (loading || !product) return null;

  return (
    <button onClick={handleClick}>
      {/* {flag === 1 ? (
        <AiFillHeart size={24} color="red" />
      ) : (
        <AiOutlineHeart size={24} color="gray" />
      )} */}
    </button>
  );
};

export default PeakButton;
