// src/domain/board/services/BoardService.js
import axiosInstance from "@/lib/axiosInstance";

// 전체 데이터 를 받아오기 때문에 get을 씀, 파라미터 값은 없어도 됨
export const getBoardList = () => {
  return axiosInstance.get("board/list", { withCredentials: true });
};

// 카테고리와 키워드를 조건으로 검색 하는 함수 - (파라미터 : 카테고리, 키워드 검색어) 
export const getBoardSearch = (searchType, category, keyword) => {
  return axiosInstance.get("board/search", {params: {searchType: searchType, category: category, keyword: keyword}
    , withCredentials: true});
};

export const getBoardSubmit = ({ category_idx, title, content }) => {
  return axiosInstance.post(
    "board/submit",
    { category_idx, title, content },
    { withCredentials: true }
  );
};

// 게시글 상세페이지 
// export const getBoardDetail = ({ category_idx, title, contents_idx, nickname}) => {
//   return axiosInstance.get(
//     "board/detail",
//     {category_idx, title, contents_idx, nickname}, 
//     { withCredentials: true }
//   );
// };

export const getBoardDetail = (id) => {
  return axiosInstance.get(`board/detail/${id}`,{ withCredentials: true });
};