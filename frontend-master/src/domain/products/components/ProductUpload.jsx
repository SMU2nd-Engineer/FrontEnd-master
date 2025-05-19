import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postProduct } from "../services/productService";
import { Divider, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import SelectBox from "@/components/SelectBox";
import { getCategoryIdx } from "@/utils/CategoryHandler";
import "../styles/ProductUpload.css";

const ProductUpload = () => {
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    category_idx: "",
    categorygenre_idx:"",
    content: "",
    imageUrl: "",
    userId: "",
  });

  const { title, price, category_idx, categorygenre_idx, content, imageUrl, userId } = newProduct;

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    postProduct(newProduct)
      .then((response) => response.data)
      .then((result) => {
        console.log("결과: ", result);
        const idx = result.idx;
        navigate(`/product/detail/${idx}`, { replace: true });
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <>
      <p className="pagetitle">상품 등록</p>
        <form onSubmit={handleSubmit}>
        
        <div className="form-row">
          <label htmlFor="imageUrl">상품 이미지 </label>
          <Input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={imageUrl}
            onChange={handleChange}
            placeholder="상품이미지는 추후 업로드 탭으로 변동 예정"
          />
        </div>
        <div className="chakra-divider"> <Divider orientation='horizontal'/>  </div>
        
        <div className="form-row">
          <label htmlFor="userId">userID </label>
          <Input
            type="text"
            id="userId"
            name="userId"
            value={userId}
            onChange={handleChange}
            placeholder="userID는 추후 삭제 예정"
          />
        </div>
        <div className="chakra-divider"> <Divider orientation='horizontal'/>  </div>
        
        <div className="form-row">
          <label htmlFor="title">상품명 </label>
          <Input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleChange}
            placeholder="이름"
          />
        </div>
        <div className="chakra-divider"> <Divider orientation='horizontal'/>  </div>
       
        <div className="form-row">
         <label htmlFor="price" className="pricelabel" >가격 </label>
         <InputGroup>
            <InputLeftElement pointerEvents='none' color='gray.300' fontSize='1.2em'> ￦ </InputLeftElement>
            <Input
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={handleChange}
              placeholder="금액을 입력해주세요"
              pl="40px"
            />
          </InputGroup>
        </div>
         
        <div className="chakra-divider"> <Divider orientation='horizontal'/>  </div>
        <div className="form-row">
          <label htmlFor="category_idx">카테고리 </label>
          <SelectBox id={"categorygenre_idx"} name={"categorygenre_idx"} category_idx={getCategoryIdx("contentsGenre")} handleChange={handleChange}/>
          <SelectBox id={"category_idx"} name={"category_idx"} category_idx={getCategoryIdx("contents")} handleChange={handleChange}/>
        </div>
        <div className="chakra-divider"> <Divider orientation='horizontal'/>  </div>
        <div className="form-row">
          <label htmlFor="content" >상세정보 </label>
          <textarea
            id="content"
            value={content}
            name="content"
            onChange={handleChange}
            placeholder="상세정보를 입력해주세요"
          />
        </div>
        <div className="buttonbox" >
          <button type="submit" id="upload">등록</button>
        </div>
      </form>
    </>
  );
};

export default ProductUpload;
