import { useState } from "react";
import "../style/ProductUpload.css";
import { useNavigate } from "react-router-dom";


const ProductUpload = () => { 

  const [newProduct, setNewProduct] = useState({
    title : "",
    price : "",
    category_idx: "",
    content: "",
    imageUrl: "",
    userId:""
  });
  
  const {title, price, category_idx, content, imageUrl, userId } = newProduct;

  const navigate = useNavigate();

  const handleChange = e => {
    const {name, value} = e.target;
  
    setNewProduct({
      ...newProduct,
      [name]:value
    });
    }
    
    // const handleFileChange = (e) => {
    // const { files } = e.target.files;
    //   setNewProduct({
    //     ...newProduct,
    //     imageUrl: files.length ? files[0] : null,
    //   });
    // };

    const handleSubmit = e =>{
      e.preventDefault();


      //  const formData = new FormData(); 
      //   formData.append("title", newProduct.title);
      //   formData.append("price", newProduct.price);
      //   formData.append("category_idx", newProduct.category_idx);
      //   formData.append("content", newProduct.content);
      //   formData.append("userId",newProduct.userId);
      //   formData.append("imageUrl", newProduct.imageUrl);
        
      fetch("http://localhost:8100/product/upload", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newProduct),
         })
      .then((response) => response.json())
      .then((result) => {
        console.log("결과: ", result);
        const idx = result.idx;
        navigate(`/product/detail/${idx}`, { replace: true })
      })
      .catch((error) => console.error("Error:", error));
    };

    
 

  return(
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="imageUrl">image </label>
        <input type="text" id="imageUrl" name="imageUrl" value={imageUrl} onChange={handleChange} placeholder="http://example.com/image.jpg" />
      </div>
      <div>
        <label htmlFor="userId">userID </label>
        <input type="text" id="userId" name="userId" value={userId} onChange={handleChange} placeholder="이름"/>
      </div>
      <div>
        <label htmlFor="title">상품명 </label>
        <input type="text" id="title" name="title" value={title} onChange={handleChange} placeholder="이름"/>
      </div>
      <div>
        <label htmlFor="price">가격 </label>
        <input type="number" id="price" name="price"value={price} onChange={handleChange} placeholder="가격"/>
      </div>
      <div>
        <label htmlFor="category_idx">카테고리 </label>
        <select
          id="category_idx"
          name="category_idx"
          value={category_idx}
          onChange={handleChange}
        >
          <option value="">선택하세요</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div>
        <label htmlFor="content">상세정보 </label>
        <textarea id="content" value={content} name="content" onChange={handleChange} placeholder="상세정보를 입력해주세요"/>
      </div>
      <button type="submit" >등록</button>
    </form>
  )

}

export default ProductUpload;