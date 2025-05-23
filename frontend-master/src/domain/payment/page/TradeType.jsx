import React from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductDetail } from '@/domain/products/services/productService';
import { useEffect } from 'react';
import TradeOptionBtn from '../components/TradeOptionBtn';

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
  }, [idx]);

  if(!product) {
    return <p>상품을 찾을 수 없습니다.</p>
  }

  const handleTradeType = (e) => {
    setTradeType(e)
  }

  const handleClick = () => {
    navigate('/payment', {
      state: {tradeType, product}
    });
  }
  return (
    <div>
      <div className='trade'>
        <div>
          <div>
            <img src={product.img} alt={product.title} />
          </div>
          <div>
            <p><strong>{product.price}</strong></p>
            <p>{product.title}</p>
          </div>
        </div>
        <section>
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
      <footer>
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
      </footer>
    </div>
  );
};

export default TradeType;