// src/domain/board/components/BoardList.jsx
import React from 'react';
import BoardItem from './BoardItem';

const BoardList = ({ boards = [] }) => {
  if (!boards.length) return <p>게시글이 없습니다. </p>;

  return (
    <div className="boards_list">
      <table>
          <thead>
            <tr>
              <th></th>
              <th>카테고리</th>
              <th>제목</th>
              <th>날짜</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>

            {/* DB에서 입력한 데이터를 게시글 목록에 출력 */}
            {
              boards.map((item)=> 
                <BoardItem item={item}/>
            )
            }
          </tbody>
        </table>
    </div>
  );
};

export default BoardList;
