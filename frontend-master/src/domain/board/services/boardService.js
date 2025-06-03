// src/domain/board/services/BoardService.js
import axiosInstance from "@/lib/axiosInstance";

// 게시판 리스트 페이지 - 게시글 등록되면 글 전체 목록 나옴
export const getBoardList = () => {
  return axiosInstance.get("board/list", { withCredentials: true });
};

// 카테고리와 키워드를 조건으로 검색 하는 함수 - (파라미터 : 카테고리, 키워드 검색어)
export const getBoardSearch = (searchType, category, keyword) => {
  return axiosInstance.get("board/search", {
    params: { searchType: searchType, category: category, keyword: keyword },
    withCredentials: true,
  });
};

// 게시글 등록 - 카테고리 선택, 제목입력, 텍스트 에디터:(글내용 입력+이미지 포함)
export const postBoardSubmit = (postContent, postFiles) => {
  const formData = new FormData();
  formData.append(
    "contents",
    new Blob([JSON.stringify(postContent)], { type: "application/json" })
  );
  // postFiles.forEach((img) => formData.append("files", img))

  // 이미지 선택하지 않아도 게시글 등록하게 하는 조건
  if (postFiles.length > 0) {
    postFiles.forEach((file) => {
      formData.append("files", file); // 여러 파일 전송
    });
  }

  return axiosInstance.post("board/submit", formData, {
    withCredentials: true,
    headers: {
      "Content-Type": `multipart/form-data`,
    },
  });
};

// 게시글 상세페이지 - 게시글 등록 후 나오는 페이지(입력한 그대로 출력)
export const getBoardDetail = (id) => {
  return axiosInstance.get(`board/detail/${id}`, { withCredentials: true });
};

// 게시글 상세페이지 수정(수정버튼 클릭시 실행)
// id : 게시글 리스트에 있는 idx(순번). 이름만 id
export const putEditContentsDetail = (
  id,
  postContent,
  postFiles = [],
  currentUrls = []
) => {
  const formData = new FormData();
  formData.append(
    "contents",
    new Blob([JSON.stringify(postContent)], { type: "application/json" })
  );
  formData.append("idx", id);
  // postFiles.forEach((img) => formData.append("files", img))

  // 이미지 선택하지 않아도 게시글 등록하게 하는 조건
  if (postFiles.length > 0) {
    postFiles.forEach((file) => {
      formData.append("files", file); // 여러 파일 전송
    });
  }
  if (currentUrls.length > 0) {
    currentUrls.forEach((current) => {
      formData.append("current", current); // 여러 파일 전송
    });
  }

  return axiosInstance.post("board/edit", formData, {
    withCredentials: true,
    headers: {
      "Content-Type": `multipart/form-data`,
    },
  });
};

// 게시글 상세페이지 삭제버튼 - 게시글 삭제
export const deleteContentsDetail = (id) => {
  return axiosInstance.put(`board/delete/${id}`, {}, { withCredentials: true });
};

// 게시글 상세페이지 - 댓글 목록 불러오기
// id : 게시글 리스트에 있는 idx(순번). 이름만 id
export const getBoardComment = (id) => {
  return axiosInstance.get(
    `/board/comment`,
    { params: { idx: id } },
    { withCredentials: true }
  );
};

// 게시글 상세페이지 - 댓글 등록
// commentTextData: 댓글 등록하는 text 가지고 있음
export const postBoardAddComment = ({ id, text }) => {
  return axiosInstance.post(
    `board/comment`,
    {
      contents_idx: id,
      text: text,
    },
    { withCredentials: true }
  );
};

// 게시글 상세페이지 - 게시글 댓글 삭제 기능
export const postBoardDeleteComment = (index) => {
  return axiosInstance.post(
    `board/commentdelete`,
    { idx: index },
    { withCredentials: true }
  );
};
