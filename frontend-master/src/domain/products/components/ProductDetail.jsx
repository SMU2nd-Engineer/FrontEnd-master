import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import"../styles/ProductDetail.css";
import { Divider } from '@chakra-ui/react'
import Button from "@/components/Button";

export default function ProductDetail() {
  const {idx} = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
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
    const handleClick = () => {
    navigate('/payment',{
      state: {product}
    });
  }

  return (
    <div className="detailinfo">
      <div className="detail-top">
        <div className="image">
          <p className="image">사진</p>
        </div>
        <div className="chakra-divider">
          <Divider orientation='vertical' height="400px"/>
        </div>
        <div className="column">
          <p className="title">{product.title}</p>
          <p className="price">{product.price}원</p>
          <div className="chakra-divider">
            <Divider orientation='horizontal'/>
          </div>
            <div className="buttonbox">
              <button className="pickbutton">찜</button> 
              <button className="chatbutton">1:1 채팅</button> 
              <Button className='orderbutton' text={"바로구매"} onClick={handleClick}/>
            </div> 
        </div>
      </div>  
        <div className="detail-bottom">
          <p className="detailcontent-label">상세 정보</p>
          <p className="detaillcontent">{product.content}</p>
        </div> 
      
    </div>
  )
}