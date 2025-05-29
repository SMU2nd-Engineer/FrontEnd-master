import React from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductDetail } from '@/domain/products/services/productService';
import { useEffect } from 'react';
import TradeOptionBtn from '../components/TradeOptionBtn';
import * as Trade from '../styles/PaymentTradeTypeDesign';
import ProductImage from '@/domain/products/components/ProductImage';

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
    navigate(`/payment/${product.idx}?tradeType=${tradeType}`, {
    });
  }

  let total
  if (tradeType === 0) {
    total = product.price + 3000;
  } else if (tradeType === 1) {
    total = product.price;
  }

  localStorage.setItem("tradeType", tradeType);

  return (
    <Trade.Box>
    <Trade.Container>
      <div>
        <Trade.ProductInfo>
          <Trade.ImgDiv>
            {/* <img src={product.image_Url} alt={product.title} /> */}
            <ProductImage imageList={[{ image_Url: product.image_Url, idx: product.idx, flag: true }]} title={product.title} mode="thumbnail" />
          </Trade.ImgDiv>
          <Trade.PriceTitle>
            <p><strong>{product.price}원</strong></p>
            <Trade.Title>{product.title}</Trade.Title>
          </Trade.PriceTitle>
        </Trade.ProductInfo>
        <section>
          <Trade.Test>거래 방법 선택</Trade.Test>
          <section>
            <TradeOptionBtn
              type={0}
              selected={tradeType}
              onClick={handleTradeType}
              title="택배로 받기"
              description="원하는 주소로 배송받기"
              price={3000}            />
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
      <div>
        <Trade.BottomSection>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Trade.Price>
              <Trade.ExpectedAmount>예상금액</Trade.ExpectedAmount>
              <Trade.Total>
                <span>{total}원</span>
              </Trade.Total>
            </Trade.Price>
          </div>
          <Trade.NextBotton onClick={handleClick}>다음</Trade.NextBotton>
        </Trade.BottomSection>
      </div>
    </Trade.Container>
    </Trade.Box>
  );
};

export default TradeType;