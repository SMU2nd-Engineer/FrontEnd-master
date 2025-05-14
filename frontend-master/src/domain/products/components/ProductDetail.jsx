import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import"../styles/ProductDetail.css";

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
    <div className="detailinfo">
      <div className="image">
        <p className="image">사진</p>
      </div>
      <div className="column">
        <p className="title">{product.title}</p>
        <p className="price">{product.price}원</p>
        <p className="detaillcontent">{product.content}</p>
          <div className="buttonbox">
            <button>찜</button> <button>1:1 채팅</button> <button>구매</button>
          </div>
      </div>
    </div>
  )
}