import ProductCard from "@products/components/ProductCard";
import {
  CardAndButtonWrapper,
  PeakDeleteButton,
} from "../style/MyPagePeakDesign";

/**
 * 상품 목록을 가져와서 만든 유저 찜 목록 컴포넌트
 * @param {*} param0
 * @returns
 */
const MyPeakList = ({ products = [], handlePeak }) => {
  if (!products.length) return <p>상품이 없습니다. </p>;

  return (
    <div>
      {products.map((product) => (
        <CardAndButtonWrapper key={product.idx}>
          <PeakDeleteButton
            onClick={() => {
              handlePeak(product.idx);
            }}
          >
            x
          </PeakDeleteButton>
          <ProductCard product={product} />
        </CardAndButtonWrapper>
      ))}
    </div>
  );
};

export default MyPeakList;
