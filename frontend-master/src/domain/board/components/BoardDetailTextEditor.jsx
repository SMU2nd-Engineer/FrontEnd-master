import React from 'react';

const BoardDetailTextEditor = ({content}) => {
  // 화면에 표시될 내용 
  return (
    <div>
      
      {/* 상세내용 */}
      {/* quill 에서 받아온 데이터를 화면에 출력하는 방법(태그 데이터) 
          HTML(예: <p>안녕하세요</p>)을 
          게시글 상세페이지에서 HTML 태그 그대로 렌더링해서 보여주기 */}
      <div
        dangerouslySetInnerHTML = {content}/>

    </div>
  );
};

export default BoardDetailTextEditor;