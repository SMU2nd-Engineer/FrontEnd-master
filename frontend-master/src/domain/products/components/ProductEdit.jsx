import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../services/productService";
import ProductUpload from "./ProductUpload";

const ProductEdit = () => {
  const { idx } = useParams();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    getProductDetail(idx)
      .then((res) => setInitialData(res.data))
      .catch((err) => console.error(err));
  }, [idx]);

  if (!initialData) return <p>Loaidng....</p>;

  return <ProductUpload initialData={initialData} isEdit={true} />;
};

export default ProductEdit;
