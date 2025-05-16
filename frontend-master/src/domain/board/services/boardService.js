// src/domain/board/services/BoardService.js
import axiosInstance from "@/lib/axiosInstance";

export const getBoardList = () => {
  return axiosInstance.get("board/list", {}, { withCredentials: true });
};

// 검색 조건으로 검색 하는 함수 - (파라미터 넘겨서) 
export const BoardSearch = (category, keyword) => {
  return axiosInstance.get("board/search", {params: {category: category, keyword: keyword}
    , withCredentials: true});
};