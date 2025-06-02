import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductDetail } from "@/domain/products/services/productService";
import { useEffect } from "react";
import TradeOptionBtn from "../components/TradeOptionBtn";
import * as Trade from "../styles/PaymentTradeTypeDesign";
import ProductImage from "@/domain/products/components/ProductImage";
import { useProductStore } from "../store/useProductStore";

const TradeType = () => {
  const { idx } = useParams();
  const [tradeType, setTradeType] = useState(null);
  const navigate = useNavigate();
  const { productInfo, setProductInfo } = useProductStore();

  useEffect(() => {
    getProductDetail(idx)
      .then((res) => res.data)
      .then((data) => {
        setProductInfo(data);
      })
      .catch((err) => console.error("상품 불러오기 실패: ", err));

    setTradeType(0);
  }, [idx]);

  if (!productInfo) {
    return <p>상품을 찾을 수 없습니다.</p>;
  }

  const handleTradeType = (e) => {
    setTradeType(e);
  };

  const handleClick = () => {
    navigate(`/payment/${productInfo.idx}/info?tradeType=${tradeType}`, {});
  };

  let total;
  if (tradeType === 0) {
    total = productInfo.price + 3000;
  } else if (tradeType === 1) {
    total = productInfo.price;
  }

  localStorage.setItem("tradeType", tradeType);

  return (
    <Trade.Box>
      <Trade.Container>
        <div>
          <Trade.ProductInfo>
            <Trade.ImgDiv>
              {/* <img src={product.image_Url} alt={product.title} /> */}
              <ProductImage
                imageList={[
                  {
                    image_Url: productInfo.image_Url,
                    idx: productInfo.idx,
                    flag: true,
                  },
                ]}
                title={productInfo.title}
                mode="thumbnail"
              />
            </Trade.ImgDiv>
            <Trade.PriceTitle>
              <Trade.TradePrice>{productInfo.price}원</Trade.TradePrice>
              <Trade.TradeTitle>{productInfo.title}</Trade.TradeTitle>
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
                price={3000}
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
        <div>
          <Trade.BottomSection>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
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
