// BoardSubmitPage.jsx
import { useState } from "react";
import BoardEditorQuill from "../components/BoardEditorQuill";
import { useEffect } from "react";
import { getCategoryIdx } from "@/utils/CategoryHandler";
import { useRef } from "react";
import BoardSubmitHeader from "../components/BoardSubmitHeader";
import BoardSubmitFooter from "../components/BoardSubmitFooter";
import usePreventBackNavigation from "@/hooks/usePreventBackNavigation";
import * as Submit from "../styles/BoardSubmitDesign";
import { FaPencilAlt } from "react-icons/fa";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

// 게시글 등록 페이지 - id : 게시글 리스트에 있는 idx(순번). 이름만 id
const BoardSubmitPage = ({ updateContentsData, isModify, id }) => {
  // 게시글 등록 (제목, 등록일자, 작성자(닉네임), 이미지, 글내용(React Quill Toollbar))
  const [newsubmit, setNewSubmit] = useState({
    category_idx: "",
    title: "",
    content: "",
  });

  const { category_idx, title } = newsubmit;
  // 글 내용 입력 - quill 툴바 커스텀
  const [contentData, setContentData] = useState({});

  // quill 확인
  const quillRef = useRef();

  // 뒤로가기 방지 hook 사용
  usePreventBackNavigation();

  // 처음렌더링 됬을때 조건이 맞으면 실행되는 것
  useEffect(() => {
    if (updateContentsData && isModify && id) {
      setNewSubmit(updateContentsData);
      setContentData(updateContentsData.content);
    }
  }, [updateContentsData, isModify, id]);

  // 입력 값 처리 함수
  const handleChange = (e) => {
    const { name, value } = e.target;

    // 현재 상태값 newsubmit을 안전하게 업데이트
    // 사용자가 선택한 타입에 따라 파일 등록 처리 함수(imageUrl != value)
    setNewSubmit((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 화면에 표시될 내용
  return (
    <Submit.SubmitMain>
      <Submit.SubmitTop>
        <Submit.SubmitSubTitle>
          {" "}
          <HiOutlineChatBubbleLeftRight
            style={{ marginRight: "6px", color: "#6b4b4b" }}
          />
          자유 게시판
        </Submit.SubmitSubTitle>
        {/* 등록페이지 카테고리 선택 + 제목 입력창 */}
        <BoardSubmitHeader
          category_idx={category_idx}
          getCategoryIdx={getCategoryIdx}
          handleChange={handleChange}
          title={title}
        />
      </Submit.SubmitTop>

      <Submit.SubmitMiddle>
        {/* 글 내용 입력하는 창 */}
        <BoardEditorQuill
          contentData={contentData}
          setContentData={setContentData}
          quillRef={quillRef}
        />
      </Submit.SubmitMiddle>

      <Submit.SubmitBottom>
        {/* 게시글 등록 + 취소 버튼 */}
        <BoardSubmitFooter
          contentData={contentData}
          newsubmit={newsubmit}
          isModify={isModify}
          id={id}
          setNewSubmit={setNewSubmit}
          setContentData={setContentData}
        />
      </Submit.SubmitBottom>
    </Submit.SubmitMain>
  );
};

export default BoardSubmitPage;
