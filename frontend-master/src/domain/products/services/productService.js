import axiosInstance from "@/lib/axiosInstance";

export const getProductList = () => {
  return axiosInstance.get("product/list", {}, { withCredentials: true });
};

export const postProduct = ({
  title,
  category_idx,
  categorygenre_idx,
  content,
  imageUrl,
  price,
  userId,
}) => {
  return axiosInstance.post(
    "product/upload",
    { title, category_idx, categorygenre_idx, content, imageUrl, price, userId },
    { withCredentials: true }
  );
};

export const getProductDetail = (idx) => {
  return axiosInstance.get(
    `product/detail/${idx}`,
    { idx },
    { withCredentials: true }
  );
};

export const searchProducts = (keyword) => {
  return axiosInstance.get("product/search", {params : {keyword}, withCredentials: true } );
};
