import { title } from 'framer-motion/client';
import React from 'react';
import {getBoardDetail} from "../services/boardService"
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
// import BoardEditorQuill from "../components/BoardEditorQuill";


const BoardDetailPage = () => {

  const {id} = useParams(); // URL에서 게시글 ID 가져오기  
  const [ detailBoard, setDetailBoard ] = useState({
    category_idx: "",
    title: "",
    contents_idx: "",
    nickname: "",
    content : ""
  }); 

  // 게시글 상세데이터 상태
  const [loading, setLoading] = useState(); // 로딩 상태

  useEffect(() => {
    getBoardDetail(id) // API 호출
      .then((response) => {
        setDetailBoard(response.data); // 받아온 데이터 상태에 저장
        setLoading(false); // 로딩 완료 표시
      });
      // 댓글 가져오는 서비스 작성(DB)
    
  }, []);

  // 화면에 표시될 내용
  return (
    <div className='board_detail'>
      <p>상세페이지</p>

    {/* 카테고리 : 잡담 / 팝니다 / 삽니다 / 기타 */}
    <h2>{detailBoard.category_idx}</h2>

    {/* 제목 */}
    <h2>{detailBoard.title}</h2>

    {/* 게시글 버튼 - 수정 + 삭제 */}
    <button className='board_change'>게시글 수정</button>

    <button className='board_delete'>게시글 삭제</button>

    {/* 작성자 */}
    <h2>{detailBoard.nickname}</h2>
    
    <p>상세내용</p>
    {/* quill 에서 받아온 데이터를 화면에 출력하는 방법(태그 데이터) 
        HTML(예: <p>안녕하세요</p>)을 
        게시글 상세페이지에서 HTML 태그 그대로 렌더링해서 보여주기 */}
     <div
      dangerouslySetInnerHTML={{__html: detailBoard.content}} />

    {/* 댓글 */}
    <p>댓글</p>
    <input
      type="text"
      placeholder="댓글을 입력해주세요."
    />

    </div>
  );
};

export default BoardDetailPage;