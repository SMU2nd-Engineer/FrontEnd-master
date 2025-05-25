// BoardSubmitPage.jsx
import { useState } from "react";
import { getBoardSubmit, getBoardDetail } from "../services/boardService"
import { div, title } from "framer-motion/client";
import BoardEditorQuill from "../components/BoardEditorQuill";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SelectBox from "@/components/SelectBox";
import { getCategoryIdx } from "@/utils/CategoryHandler";
import { useRef } from "react";

// 게시글 등록 페이지
const BoardSubmitPage = () => {

  // 게시글을 등록하고 저장하는 함수 
  // boardSubs: 게시글 입력한 데이터 담아서 백엔드로 보냄 
  // 게시글 등록 (제목, 등록일자, 작성자(닉네임), 이미지, 글내용(React Quill Toollbar))
  const [ newsubmit, setNewSubmit ] = useState({
    category_idx: "",
    title: "",
    // imageUrl: "",
    content: "",
  });   
  
  const { category_idx, title, content } = newsubmit;
  // 글 내용 입력 - quill 툴바 커스텀
  const [ contentData, setContentData ] = useState (""); 

  // 페이지 이동을 처리 하는 함수
  const navigate = useNavigate();

  // quill 확인
  const quillRef = useRef();

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
  
  // 게시글 내용 입력 후 클릭하는 버튼
  // preventDefault: 페이지 새로고침 방지
  const handleSubmit = (e) => {
    e.preventDefault();

    // 게시글 등록 요청을 서버로 보낼때 사용될 데이터 객체 만듬
    const postContent = {
      category_idx: newsubmit.category_idx,
      title: newsubmit.title,
      content: contentData, // 글 내용 입력 - 리액트 에디터 내용
    };

    // => 게시글 등록버튼 눌렀을때 성공하면 게시글 상세페이지로 이동
    // 서버에 게시글 등록 요청을 보내는 함수
    getBoardSubmit(postContent)
      .then((response) => response.data)
      .then((data) => {
        console.log("서버응답 확인: ", data)

        // 상세 페이지로 이동(백엔드 서버가 새로 생성한 게시글 고유 식별자)
        navigate(`/board/detail/${data}`);
      })
      .catch((error) => {
        console.error("게시글 등록 실패: ", error);
        alert("게시글 등록 실패했습니다...");
      });
  };

  // 게시글 취소 버튼 누르면 게시글 리스트 페이지로 이동하는 함수
  const handleCancel = (e) => {
    // 새로고침 방지
    e.preventDefault();

    // 취소하고 홈페이지로 돌아갈건지 선택하는 팝업창
    const submitCancel = window.confirm("게시글 등록을 취소하고 게시글 홈페이지로 돌아가시겠습니까?");

    // 취소 누르면 게시글 등록페이지에 머무름
    if(!submitCancel) return;

    // 상태 초기화
    setNewSubmit({
      category_idx: "",
      title: "",
      content: "",
    });
      // 글 내용 - 텍스트 에디터 quill의 데이터 초기화
      setContentData("");

      // 게시글 리스트 페이지로 이동
      navigate(`/board`);

  };

  // 화면에 표시될 내용
  return (
    <div className='new_board_submit'>
 
        {/* 카테고리 선택 : 잡담 / 팝니다 / 삽니다 / 기타 */}  
        <SelectBox 
          id="category_idx"
          name="category_idx" 
          category_idx={getCategoryIdx("BOARD")}
          handleChange={handleChange}/>

        {/* 제목 입력창 */}
        <input 
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleChange}
          placeholder="제목을 입력해주세요."     
        />   

        {/* 이미지 선택하는 창 - 동적으로 등록하는 방법 찾아야함 */}
        {/* <input 
          type="file" 
          id="imageUrl"
          name="imageUrl"
          value={imageUrl}
          onChange={handleChange}
          placeholder="jpg, png 파일형식으로 등록해주세요."
        />   */}

        {/* 글 내용 입력하는 창 */}
        <p>글 내용</p>
        <BoardEditorQuill
        contentData={contentData} setContentData={setContentData} quillRef={quillRef}/>
     
      {/* 게시글 등록 페이지 - 게시글 등록 버튼 */}        
      <button onClick={handleSubmit}>등록</button>

      {/* 게시글 등록 페이지 - 게시글 취소 버튼 */}        
      <button onClick={handleCancel}>취소</button>

    </div>
  )


};

export default BoardSubmitPage;