import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductDetail } from "../services/productService";
import Button from "@/components/Button";
import "../styles/ProductDetail.css";

export default function ProductDetail() {
  const { idx } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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

  const handleGoBack = () => {
    navigate(-1);
  };

  if (loading) {
    return <p>loading... </p>;
  }

  if (!product) {
    return <p>상품을 찾을 수 없습니다.</p>;
  }

  return (
    <div>
      <h1>detail</h1>
      <p>{product.title}</p>
      <p>{product.price}원</p>
      <p>{product.content}</p>
      <button>찜</button> <button>1:1 채팅</button> <button>구매</button>
      <Button onClick={handleGoBack} text={"뒤로가기"} />
    </div>
  );
}
