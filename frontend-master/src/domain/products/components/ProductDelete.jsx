import Button from "@/components/Button";
import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteProducts } from "../services/productService";
import styled from "styled-components";
import { useModalStore } from "@/store/useModalStore";

const PDButton = styled.button`
  background-color: #ffcdcd;
  width: 60px;
  height: 50px;
`;

const ProductDelete = ({ idx }) => {
  const navigate = useNavigate();
  const openModal = useModalStore((state) => state.open);

  const handleDelete = async () => {
    try {
      await deleteProducts(idx);
      await openModal("alert", {
        title: "삭제",
        message: "상품이 삭제되었습니다.",
      });
      navigate("/product/list"); // 목록 페이지로 이동
    } catch (error) {
      console.error("삭제 실패:", error);
      await openModal("alert", {
        title: "삭제",
        message: "삭제에 실패했습니다.",
      });
    }
  };

  return (
    <PDButton>
      <Button className="deleteButton" text={"삭제"} onClick={handleDelete} />
    </PDButton>
  );
};

export default ProductDelete;
