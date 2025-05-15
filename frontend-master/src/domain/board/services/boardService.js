// src/domain/board/services/BoardService.js
import axiosInstance from "@/lib/axiosInstance";

export const getBoardList = () => {
  return axiosInstance.get("board/list", {}, { withCredentials: true });
};