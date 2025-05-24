// BoardSubmitPage.jsx
import { useState } from "react";
import { BoardSubmit } from "../services/boardService"
import { div, title } from "framer-motion/client";
import BoardEditorQuill from "../components/BoardEditorQuill";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SelectBox from "@/components/SelectBox";
import { getCategoryIdx } from "@/utils/CategoryHandler";

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

  // 글 내용 입력창에서 값 입력하면 출력되는 콘솔확인하기
  // useEffect (() => {
  //   console.log("에디터 글 내용: ", quillCustomData);
  // }, [quillCustomData])

  // 게시글 내용 입력 후 클릭하는 버튼
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
    BoardSubmit(postContent)
      .then((response) => response.data)
      .then((result) => {
        console.log("결과: ", result);
        // 에러 확인용 
        // const idx = response.idx;
        // if (!idx) throw new Error("게시글 없음");

        // 게시글 등록 성공시 게시글 상세화면으로 페이지 이동
        // navigate(`/board/detail/${idx}`, { replace: true });
      })
      .catch((error) => {
          console.error("게시글 등록 실패: ", error);
          alert("게시글 등록에 실패했습니다."); 
      });                    
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
        contentData={contentData} setContentData={setContentData}/>
     
      {/* 게시글 등록 페이지 - 게시글 등록 버튼 */}        
      <button onClick={handleSubmit}>등록</button>

      {/* 게시글 등록 페이지 - 게시글 취소 버튼 */}        
      <button onClick={() => navigate("/board/submit")}>취소</button>

      {/* <button className="board_cancel_button">취소</button>   */}

    </div>
  )


};

export default BoardSubmitPage;