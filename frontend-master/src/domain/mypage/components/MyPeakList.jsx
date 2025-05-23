import Button from "@/components/Button";
import ProductCard from "@products/components/ProductCard";

/**
 * 상품 목록을 가져와서 만든 유저 찜 목록 컴포넌트
 * @param {*} param0
 * @returns
 */
const MyPeakList = ({ products = [], handlePeak }) => {
  if (!products.length) return <p>상품이 없습니다. </p>;

  return (
    <div className="product_list">
      {products.map((product) => (
        <div key={product.idx}>
          <ProductCard product={product} />
          <Button
            text={"찜 목록 삭제"}
            onClick={() => {
              handlePeak(product.idx);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default MyPeakList;
