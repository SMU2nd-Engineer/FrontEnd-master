const ProductImage = ({ imageUrl, title }) => {
  if (!imageUrl) return null;

  return <img className="product_image" src={imageUrl} alt={title} />;
};

export default ProductImage;
