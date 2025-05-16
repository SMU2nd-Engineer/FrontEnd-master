import { useEffect, useState } from 'react';
import BoardList from "../components/BoardList";
import { getBoardList } from '../services/boardService';
import BoardPageHeader from '../components/BoardPageHeader';
import BoardPageFooter from '../components/BoardPageFooter';
 
const BoardListPage = () => {
 
  // 게시글 목록을 저장하고 게시글을 업데이트하는 함수 - 기본 값은 빈배열[]로 
  const [boards, setBoards] = useState([]);

  // 게시글 데이터 가져오기
  useEffect(() => {
    getBoardList()
      .then((res) => res.data)
      .then((data) => setBoards(data))
      .catch((err) => console.error("게시글 불러오기 실패:", err))
  }, []);

  // boards를 검색하는 기능 함수 - 게시글 검색버튼 눌렀을때 데이터 목록이 갱신되게
  const handleOnclick = (category , keyword) => {
    getBoardList(category , keyword)
      .then((res) => res.data)
      .then((data) => setBoards(data))
      .catch((err) => console.error("게시글 불러오기 실패:", err))
  }

  // 화면에 표시할 내용
  return (
    <div className='new_board'>

      {/* 상단 Header('게시판' 버튼1:게시글등록, 버튼2:게시글수정) 컴포넌트 */}
      <BoardPageHeader /> 

      <BoardList boards={boards}/> {/* 게시글 목록 */}

      {/* 하단 Footer(카테고리 드롭박스 선택, 검색어 입력창, 버튼:게시글 검색) 컴포넌트 */}
      <BoardPageFooter handleOnclick={handleOnclick}/> 
    </div>
  );
};

export default BoardListPage;