import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const {idx} = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  
    useEffect(() => {    
      fetch(`http://localhost:8100/product/detail/${idx}`) 
        .then((res) => res.json())
        .then((data) => {
          console.log("#########", data)
          setProduct(data)
          setLoading(false)
        })
        .catch((err) => console.error("상품 불러오기 실패:", err));
    }, [idx]);

    if (loading) {
      return <p>loading... </p>
    }

    if(!product) {
      return <p>상품을 찾을 수 없습니다.</p>
    }

  return (
    <div>
      <h1>detail</h1>
      <p>{product.title}</p>
      <p>{product.price}원</p>
      <p>{product.content}</p>
      <button>찜</button> <button>1:1 채팅</button> <button>구매</button>
    </div>
  )
}