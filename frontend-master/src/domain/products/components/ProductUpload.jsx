import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postProduct, putEditProduct } from "../services/productService";
import SelectBox from "@/components/SelectBox";
import { getCategoryIdx } from "@/utils/CategoryHandler";
import ImageUpload from "./ImageUpload";
import { useEffect } from "react";
import * as PUP from "../styles/ProductUploadDesign";
import Button from "@/components/Button";
import { useModalStore } from "@/store/useModalStore";

const ProductUpload = ({ initialData, isEdit }) => {
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    category_idx: "",
    categorygenre_idx: "",
    content: "",
    image_Url: "",
    user_idx: "",
    idx: "",
  });

  const [uploadImage, setUploadImage] = useState([]);
  const navigate = useNavigate();

  const openModal = useModalStore((state) => state.open);

  useEffect(() => {
    if (isEdit && initialData) {
      setNewProduct(initialData);
      setUploadImage(initialData.imageList.map((image) => image.image_Url));
    }
  }, [initialData, isEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!uploadImage || uploadImage.length === 0) {
      await openModal("alert", {
        title: "상품 이미지",
        message: "상품 이미지를 최소 한 장 이상 등록해 주세요.",
      });
      return;
    }

    if (isEdit) {
      const uploadFile = uploadImage.filter(
        (image) => typeof image !== "string"
      );
      const currentImages = uploadImage.map((image, i) => {
        return typeof image !== "string" ? `newImage${i}` : image;
      });
      putEditProduct(newProduct.idx, newProduct, uploadFile, currentImages)
        .then((response) => response.data)
        .then((result) => {
          const idx = result.idx;
          navigate(`/product/detail/${idx}`, { replace: true });
        })
        .catch((error) => console.error("수정 에러:", error));
    } else {
      postProduct(newProduct, uploadImage)
        .then((response) => response.data)
        .then((result) => {
          const idx = result.idx;
          navigate(`/product/detail/${idx}`, { replace: true });
        })
        .catch((error) => console.error("Error:", error));
    }
  };

  const uploadCancel = async (e) => {
    e.preventDefault();

    const confirmed = await openModal("confirm", {
      title: "취소",
      message: "정말 취소하시겠습니까? 등록 중인 내용은 복구되지 않습니다.",
    });
    if (confirmed) {
      navigate(-1);
    }
  };

  return (
    <>
      <p className="pagetitle">{isEdit ? "상품 수정" : "상품 등록"}</p>
      <PUP.UploadContainer>
        <PUP.UploadForm onSubmit={handleSubmit}>
          <div className="form-row">
            <label>상품 이미지</label>
            <ImageUpload
              uploadImage={uploadImage}
              setUploadImage={setUploadImage}
            />
          </div>

          <div className="form-row">
            <label htmlFor="title">상품명 </label>
            <input
              type="text"
              id="title"
              name="title"
              value={newProduct.title}
              onChange={handleChange}
              placeholder="이름"
            />
          </div>

          <div className="form-row">
            <label htmlFor="price" className="pricelabel">
              {" "}
              가격{" "}
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={newProduct.price}
              onChange={handleChange}
              placeholder="금액을 입력해주세요"
              pl="40px"
            />
          </div>

          <div className="form-row">
            <label htmlFor="category_idx">카테고리 </label>
            <PUP.CategorySelect>
              <SelectBox
                id={"categorygenre_idx"}
                name={"categorygenre_idx"}
                category_idx={getCategoryIdx("contentsGenre")}
                handleChange={handleChange}
                defaultValue={newProduct.categorygenre_idx}
              />
              <SelectBox
                id={"category_idx"}
                name={"category_idx"}
                category_idx={getCategoryIdx("contents")}
                handleChange={handleChange}
                defaultValue={newProduct.category_idx}
              />
            </PUP.CategorySelect>
          </div>
          <div className="form-row">
            <label htmlFor="content">상세정보 </label>
            <textarea
              id="content"
              value={newProduct.content}
              name="content"
              onChange={handleChange}
              placeholder="상세정보를 입력해주세요"
            />
          </div>
          <PUP.ButtonBox>
            <Button
              className="cancel"
              text={"취소"}
              onClick={uploadCancel}
            ></Button>
            <Button
              className="upload"
              text={isEdit ? "수정" : "등록"}
              onClick={handleSubmit}
            ></Button>
          </PUP.ButtonBox>
        </PUP.UploadForm>
      </PUP.UploadContainer>
    </>
  );
};

export default ProductUpload;
