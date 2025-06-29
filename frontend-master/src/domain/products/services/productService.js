import axiosInstance from "@/lib/axiosInstance";

export const getProductList = (lastId = null, size = 20) => {
  const params = {};
  if (lastId !== null && lastId !== undefined) params.lastId = lastId;
  if (size) params.size = size;
  return axiosInstance.get("product/list", {
    params,
    withCredentials: true,
  });
};

export const postProduct = (newProduct, uploadImage) => {
  const formData = new FormData();
  formData.append(
    "product",
    new Blob([JSON.stringify(newProduct)], { type: "application/json" })
  );
  uploadImage.forEach((img) => formData.append("files", img));

  return axiosInstance.post("product/upload", formData, {
    withCredentials: true,
  });
};

export const getProductDetail = (idx) => {
  return axiosInstance.get(
    `product/detail/${idx}`,
    { idx },
    { withCredentials: true }
  );
};

export const putEditProduct = (idx, newProduct, uploadImage, currentImages) => {
  const formData = new FormData();
  formData.append(
    "product",
    new Blob([JSON.stringify(newProduct)], { type: "application/json" })
  );
  uploadImage.forEach((img) => formData.append("files", img));

  currentImages.forEach((images) => formData.append("current", images));

  return axiosInstance.put(`product/detail/${idx}`, formData, {
    withCredentials: true,
  });
};

export const searchProducts = ({
  category_idx = 0,
  categorygenre_idx = 0,
  keyword,
}) => {
  return axiosInstance.post(
    "product/search",
    { keyword, category_idx, categorygenre_idx },
    { withCredentials: true }
  );
};

export const deleteProducts = (idx) => {
  return axiosInstance.put(
    `product/delete/${idx}`,
    {},
    { withCredentials: true }
  );
};
