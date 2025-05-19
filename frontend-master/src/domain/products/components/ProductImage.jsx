const ProductImage = ({ imageUrl, title }) => {
  if (!imageUrl) return <div className="null_image"/>;

  return <img className="product_image" src={imageUrl} alt={title} />;

};

export default ProductImage;
