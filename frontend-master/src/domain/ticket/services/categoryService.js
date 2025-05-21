// import axiosInstance from "@/lib/axiosInstance";
// import { CATEGORY } from "@/lib/services/categoryService";

// // 특정 카테고리(idx)의 전체 하위 카테고리 요청
// export const getCategory = (idx) => {
//   return axiosInstance.get(`/category/${idx}`, { withCredentials: true });
// };

// // 티켓 장르의 ID 배열만 반환 (예: [3001, 3002, ...])
// export const getAllTicketCategoryIds = async () => {
//   const res = await getCategory(CATEGORY.TICKET);
//   return res.data.map((item) => item.sub_idx);
// };

// // 티켓 장르의 ID-이름 맵 반환 (예: {3001: "콘서트", ...})
// export const getTicketCategoryMap = async () => {
//   const res = await getCategory(CATEGORY.TICKET);
//   const map = {};
//   res.data.forEach((item) => {
//     map[item.sub_idx] = item.name;
//   });
//   return map;
// };
