import React from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductDetail } from '@/domain/products/services/productService';
import { useEffect } from 'react';
import TradeOptionBtn from '../components/TradeOptionBtn';
import "../styles/TradeTypeBtn.css"

const TradeType = () => {
  const {idx} = useParams(); 
  const [tradeType, setTradeType] = useState(null);
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  

  useEffect(() => {
    getProductDetail(idx)
      .then((res) => res.data)
      .then((data) => {
        console.log("******", data)
        setProduct(data)
      })
      .catch((err) => console.error("상품 불러오기 실패: ", err));
    
    setTradeType(0);
  }, [idx]);

  useEffect(() => {
    console.log('tradeType: ', tradeType);
  }, [tradeType]);

  if(!product) {
    return <p>상품을 찾을 수 없습니다.</p>
  }

  const handleTradeType = (e) => {
    setTradeType(e)
  }

  const handleClick = () => {
    navigate(`/payment/${product.idx}`, {
      state: {tradeType}
    });
  }
  return (
    <div className='container'>
      <div className='trade'>
        <div className='productInfo'>
          <div className='img'>
            <img src={product.img} alt={product.title} />
          </div>
          <div className='price_title'>
            <p><strong>{product.price}원</strong></p>
            <p>{product.title}</p>
          </div>
        </div>
        <section className='selectTradeType'>
          <span>거래 방법 선택</span>
          <section>
            <TradeOptionBtn
              type={0}
              selected={tradeType}
              onClick={handleTradeType}
              title="택배로 받기"
              description="원하는 주소로 배송받기"
              price="3000"
            />
          </section>
          <section>
            <TradeOptionBtn
              type={1}
              selected={tradeType}
              onClick={handleTradeType}
              title="직거래"
              description="직접 만나서 받기"
            />
          </section>
        </section>
      </div>
      <div className='bottom'>
        <section>
          <div>
            <div>
              <span>예상금액</span>
              <div>
                <span>{product.price}원</span>
              </div>
            </div>
            <span></span>
          </div>
          <button onClick={handleClick}>다음</button>
        </section>
      </div>
    </div>
  );
};

export default TradeType;