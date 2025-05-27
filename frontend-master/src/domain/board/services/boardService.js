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


// 게시글 등록 - 텍스트 에디터 텍스트 + 이미지 포함
export const getBoardSubmit = ( postContent, postFiles ) => {
  const formData = new FormData();
  formData.append("contents", new Blob([JSON.stringify(postContent)], { type: 'application/json' }))
  postFiles.forEach((img) => formData.append("files", img))
  
  return axiosInstance.post(
    "board/submit",
    formData,
    { withCredentials: true }
  );
};

// 게시글 상세페이지 
export const getBoardDetail = (id) => {
  return axiosInstance.get(`board/detail/${id}`,{ withCredentials: true });
};

// 게시글 상세페이지 - 댓글 목록 불러오기
export const getBoardComment = (id) => {
  return axiosInstance.get(`/board/comment`, {params : {idx : id}}, { withCredentials: true });
};

// 게시글 상세페이지 - 댓글 등록
// commentTextData: 댓글 등록하는 text 가지고 있음
export const getBoardAddComment = ({ id, text}) => {
  return axiosInstance.post(
    `board/comment`, 
     {
      contents_idx: id,
      text : text
     },
    { withCredentials: true }
  );
};

// 게시글 상세페이지 - 게시글 댓글 삭제 기능
 export const postBoardDeleteComment = (index) => {
  return axiosInstance.post(
    `board/commentdelete`,
    {idx : index},
    { withCredentials: true }
  );
 }; 