// src/domain/board/components/BoardList.jsx
import React from 'react';

const BoardList = ({ boards = [] }) => {
  if (!boards.length) return <p>게시글이 없습니다. </p>;

  return (
    <div className="boards_list">
      {boards.map((board) => (
        <></>
      ))}
    </div>
  );
};

export default BoardList;
