import { useEffect, useState } from 'react';
import BoardList from "../components/BoardList";
import { getBoardList } from '../services/BoardService';
 
const BoardListPage = () => {
  /*
   boards: 게시글 리스트를 저장하는 상태값
   setBoards: 게시글 데이터를 업데이트하는 함수
   기본 값은 빈배열 []
  */
  const [boards, setBoards] = useState([]);

  /*
   useEffect: 게시글 데이터 가져오기
   컴포넌트가 처음 화면에 렌더링될 때([]), getBoardList 호출해서 서버에서
   게시글 리스트를 가져옴, 데이터를 받아오면 setBoards로 상태에 저장
   실패하면 콘솔에 에러 출력
  */  
  useEffect(() => {
    getBoardList()
      .then((res) => res.data)
      .then((data) => setBoards(data))
      .catch((err) => console.error("게시글 불러오기 실패:", err))
  }, []);

  // 화면에 표시할 내용
  return (
    <div className='new_board'>
      <div className='pageheader'>
        <p> 게시판 </p>
        <button>게시글 등록</button>
        <button>게시글 수정</button>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>카테고리</th>
              <th>제목</th>
              <th>날짜</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {/* ContentsInfoDTO의 객체와 동일한 값
                boards: 게시글 목록이 담긴 배열 (예: 서버에서 받아온 데이터).
                map(): 배열을 순회하면서 각 항목(item)에 대해 JSX 요소를 생성.
                i: 배열의 인덱스 번호. map()이 현재 몇 번째 요소를 반복 중인지 알려주는 숫자 인덱스
                item: boards 배열 안의 각 게시글 객체. 
                division(category_idx로 수정해야됨), title, sdate, nickname 등의 데이터를 포함하고 있음.
                key={i}: React가 리스트 렌더링할 때 각 요소를 구분하기 위한 고유값. 
                item.idx + '_div'
                : 게시글의 고유 ID에 "div"라는 문자열을 붙여서 만든 고유한 문자열
                  React의 key 속성으로 사용하여 각 요소를 구분함  
                  
                요약: 
                게시글 목록이 담긴 boards라는 배열을 순회하면서 각 게시글 객체인 item과 
                배열의 인덱스 번호(i)' 값을 key 값으로 받아 게시글 고유 ID에 '_' 문자열을 붙여 
                입력한 값을 출력하는 것 
                + <tr> 한 줄로 만들어 게시판 형식의 테이블로 렌더링하는 코드 
            */}
            {
              boards.map((item, i)=> 
              <tr key={i}>
                <td key={item.idx + '_div'}>{item.division}</td>
                <td key={item.idx + '_tit'}>{item.title}</td>
                <td key={item.idx + '_sde'}>{item.sdate}</td>
                <td key={item.idx + '_nic'}>{item.nickname}</td>
              </tr>) 
            }
          </tbody>
        </table>
      </div>

      <div className='pagefooter'>
        {/* drop down 태그 써야됨 */}
        카테고리 선택
        <input type='text' value={"검색어 입력창"}></input>
        <button>게시글 검색</button>
      </div>      

       {/* <BoardList boards={boards} />      */}
    </div>
  );
};

export default BoardListPage;