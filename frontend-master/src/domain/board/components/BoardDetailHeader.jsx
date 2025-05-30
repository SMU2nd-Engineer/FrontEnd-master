import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteContentsDetail } from '../services/boardService';

const BoardDetailHeader = ({category_idx, title, nickname, id}) => {
  
  const navigate = useNavigate();

  // 게시글 수정 버튼 선택
  const handleRegister = () => {
    console.log("게시글 수정 클릭")
    navigate(`/board/edit/${id}`)
  };

  // 게시글 삭제 버튼 선택
  const handleDeleteDetail = async () => {
    try {
    await deleteContentsDetail(id);
    alert("게시글 삭제 클릭");
    navigate(`/board/list`); // 게시판 리스트로 이동
    } catch (error) {
    console.error("삭제 실패:", error);
    alert("게시글 삭제 실패했습니다.");
    }
  };

  return (
    <div>
      <div>
            
            {/* 카테고리 : 잡담 / 팝니다 / 삽니다 / 기타 */}
            <h2>{category_idx}</h2>
      
            {/* 제목 */}
            <h2>{title}</h2>

            {/* 게시글 수정 버튼 */}
            <button onClick={handleRegister}>게시글 수정</button>
      
            {/* 게시글 삭제 버튼 */}      
            <button onClick={handleDeleteDetail}>게시글 삭제</button>

            {/* 작성자 */}
            <h2>{nickname}</h2>

      </div>
    </div>
  );
};

export default BoardDetailHeader;