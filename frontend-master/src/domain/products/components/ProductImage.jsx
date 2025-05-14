const ProductImage = ({product})=>{
  if(!product.IMAGE_URL) return null;

  return (
    <img className="product_image" src={product.IMAGE_URL} alt={product.TITLE} />
  )
}

export default ProductImage;