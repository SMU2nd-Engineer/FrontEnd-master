import ProductCardInfo from "./ProductInfo";
import ProductImage from "./ProductImage";
import { useNavigate } from "react-router-dom";

const ProductCard =({product}) => {
  const navigate = useNavigate(); 
  
  if(!product) return null;
  
  return (
    <div className="product_card" onClick={() => navigate(`/product/detail/${product.idx}`)} >
      <ProductImage product={product} />
      <ProductCardInfo title={product.title} price={product.price}/>
    </div>
  )
}

export default ProductCard;

