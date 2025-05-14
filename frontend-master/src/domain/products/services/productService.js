import axiosInstance from "@/lib/axiosInstance";

export const getProductList = () => {
  return axiosInstance.get("product/list", {}, { withCredentials: true });
};

export const postProduct = ({
  title,
  category_idx,
  content,
  imageUrl,
  price,
  userId,
}) => {
  return axiosInstance.post(
    "product/upload",
    { title, category_idx, content, imageUrl, price, userId },
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
