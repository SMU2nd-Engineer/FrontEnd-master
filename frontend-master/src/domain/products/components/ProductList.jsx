import ProductCard from "./ProductCard";

const ProductList =({products}) =>{
  if(!products) 
    return <p>상품이 없습니다. </p>;

  //console.log(products)

  // products.map((product) => console.log(product))

  return (
    <div className="product_list">
      {products.map((product) =>
        <ProductCard key={product.idx} product={product}/> )}
    </div>
  )
}

export default ProductList;



