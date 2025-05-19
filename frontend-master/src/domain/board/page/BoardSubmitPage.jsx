import { useEffect, useState } from "react";
import { BoardSubmit } from "../services/boardService"
import { div } from "framer-motion/client";

// 게시글 등록 페이지
const BoardSubmitPage = () => {

// 게시글을 등록하고 저장하는 함수 
const [ boardSubs, setBoardSubs ] = useState([]);

// 게시글 등록하는 데이터 가져오기
useEffect(()=> {
  BoardSubmit()
    .then((res) => res.data)
    .then((data) => setBoardSubs(data))
    .catch((err) => console.error("게시글 등록 실패: ", err))
}, []);

// boardSubs를 이용하여 등록하는 함수 
// 게시글 등록버튼 눌렀을때 게시글 홈페이지로 전환되어 게시글 목록에 등록하기
const handleBOnclick = () => {
  BoardSubmit()
    .then((res) => res.data)
    .then((data) => setBoardSubs(data))
    .catch((err) => console.error("게시글 등록 실패: ", err))
}

// 화면에 표시할 내용
  <div className='new_board_submit'>


  </div>



};

export default BoardSubmitPage;