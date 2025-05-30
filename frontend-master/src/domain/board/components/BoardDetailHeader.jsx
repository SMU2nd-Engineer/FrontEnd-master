import React from 'react';

const BoardDetailHeader = ({category_idx, title, handleRegister, handleDeleteDetail, nickname}) => {
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