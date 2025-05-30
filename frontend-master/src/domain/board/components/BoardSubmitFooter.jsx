import React from 'react';

const BoardSubmitFooter = ({handleSubmit, handleCancel}) => {
  return (
    <div>
      
      <div style={{border:"1px solid black"}}>
        {/* 게시글 등록 페이지 - 게시글 등록 버튼 */}        
        <button onClick={handleSubmit}>등록</button>
      </div>

      <div style={{border:"1px solid black"}}>
        {/* 게시글 등록 페이지 - 게시글 취소 버튼 */}        
        <button onClick={handleCancel}>취소</button>
      </div>  

    </div>
  );
};

export default BoardSubmitFooter;