import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postProduct, putEditProduct } from "../services/productService";
import { Divider, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import SelectBox from "@/components/SelectBox";
import { getCategoryIdx } from "@/utils/CategoryHandler";
import "../styles/ProductUpload.css";
import ImageUpload from "./ImageUpload";
import { useEffect } from "react";

const ProductUpload = ({ initialData, isEdit }) => {
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    category_idx: "",
    categorygenre_idx:"",
    content: "",
    image_Url: "",
    user_idx: "",
    idx:""
  });
  
  useEffect(() => {
    if (isEdit && initialData) {
      setNewProduct(initialData);
    }
  }, [initialData, isEdit]);

  const [uploadImage, setUploadImage] = useState([]);

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


    if (isEdit) {
      putEditProduct(newProduct.idx, newProduct, uploadImage)
      .then((response) => response.data)
      .then((result) => {
        console.log("수정 결과: ", result);
        const idx = result.idx;
        navigate(`/product/detail/${idx}`, { replace: true });
      })
      .catch((error) => console.error("수정 에러:", error));
    } else {
      postProduct(newProduct, uploadImage)
        .then((response) => response.data)
        .then((result) => {
          console.log("결과: ", result);
          const idx = result.idx;
          navigate(`/product/detail/${idx}`, { replace: true });
        })
        .catch((error) => console.error("Error:", error));
      }
    };


  
  return (
    <>
      <p className="pagetitle">{isEdit ? "상품 수정" : "상품 등록"}</p>
        <form onSubmit={handleSubmit}>
        
        <div className="form-row">
          <label>상품 이미지</label>
          <ImageUpload uploadImage={uploadImage} setUploadImage={setUploadImage}/>
        </div>
        <div className="chakra-divider"> <Divider orientation='horizontal'/>  </div>
        
        
        <div className="form-row">
          <label htmlFor="title">상품명 </label>
          <Input
            type="text"
            id="title"
            name="title"
            value={newProduct.title}
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
              value={newProduct.price}
              onChange={handleChange}
              placeholder="금액을 입력해주세요"
              pl="40px"
            />
          </InputGroup>
        </div>
         
        <div className="chakra-divider"> <Divider orientation='horizontal'/>  </div>
        <div className="form-row">
          <label htmlFor="category_idx">카테고리 </label>
          <SelectBox id={"categorygenre_idx"} name={"categorygenre_idx"} category_idx={getCategoryIdx("contentsGenre")} handleChange={handleChange} defaultValue={newProduct.categorygenre_idx}/>
          <SelectBox id={"category_idx"} name={"category_idx"} category_idx={getCategoryIdx("contents")} handleChange={handleChange} defaultValue={newProduct.category_idx}/>
        </div>
        <div className="chakra-divider"> <Divider orientation='horizontal'/>  </div>
        <div className="form-row">
          <label htmlFor="content" >상세정보 </label>
          <textarea
            id="content"
            value={newProduct.content}
            name="content"
            onChange={handleChange}
            placeholder="상세정보를 입력해주세요"
          />
        </div>
        <div className="buttonbox" >
          <button type="submit" id="upload">{isEdit ? "수정" : "등록"}</button>
        </div>
      </form>
    </>
  );
};

export default ProductUpload;
