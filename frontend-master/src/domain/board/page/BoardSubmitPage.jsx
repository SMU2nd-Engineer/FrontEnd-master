import { useEffect, useState } from "react";
import { BoardSubmit } from "../services/boardService"
import { div } from "framer-motion/client";

// 게시글 등록 페이지
const BoardSubmitPage = () => {

  // 게시글을 등록하고 저장하는 함수 
  // boardSubs: 게시글 입력한 데이터 담아서 백엔드로 보냄 
  const [ submitData, setBoardSubs ] = useState([]);


  // boardSubs를 이용하여 등록하는 함수 
  // 게시글 등록버튼 눌렀을때 게시글 상세페이지로 전환되어 게시글 목록에 등록하는 함수
  // => 게시글 등록버튼 눌렀을때 게시글 상세페이지로 이동하는 함수
  const handleOnclick = () => {
    BoardSubmit()
      .catch((err) => console.error("게시글 등록 실패: ", err))
  }


  // 화면에 표시될 내용
  return (
    <div className='new_board_submit'>
      <p>게시글 등록</p>
      {/* 카테고리 선택 : 잡담 / 팝니다 / 삽니다 / 기타 */}  
      <button className="category_select">카테고리</button>

      {/* 제목 입력창 */}
      <input 
        type="text"
        id="title"
        placeholder="제목을 입력해주세요."     
      />   

      {/* 등록일자 선택 */}
      <button className="date_select">등록일자 선택</button>

      {/* 작성자(닉네임) 입력하는 창 */}
      <input 
        type="text" 
        id="nickname"
        placeholder="닉네임을 입력해주세요."
        />  

      {/* 이미지 선택하는 창 - 동적으로 등록하는 방법 찾아야함 */}
      <input 
        type="file" 
        id="image"
        placeholder="jpg, png 파일형식으로 등록해주세요."
      />  

      {/* 글 내용 입력하는 창 */}
      <input 
        type="text" 
        id="content"
        placeholder="글 내용을 입력해주세요."
        />  

      {/* 게시글 등록 페이지 - 게시글 등록 버튼 */}        
      <button className="board_submit_button">등록</button>

      {/* 게시글 등록 페이지 - 게시글 취소 버튼 */}        
      <button className="board_cancel_button">취소</button>  

    </div>
  )


};

export default BoardSubmitPage;