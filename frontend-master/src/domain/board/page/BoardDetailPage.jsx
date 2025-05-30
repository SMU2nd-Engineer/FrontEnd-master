import { p, title } from 'framer-motion/client';
import React from 'react';
import {getBoardComment, getBoardDetail, postBoardDeleteComment, postBoardAddComment, deleteContentsDetail} from "../services/boardService"
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { CloseButton } from "@chakra-ui/react"
import BoardDetailHeader from '../components/BoardDetailHeader';
import BoardDetailTextEditor from '../components/BoardDetailTextEditor';
import BoardDetailFooter from '../components/BoardDetailFooter';


// 백엔드에서 받은 이미지 저장경로를 상세페이지에서 보이게 설정하는 함수
// 여러개의 이미지를 순서에 따라 넣음
function pushImgSrc(html, getBoardImageUrls) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  const boardImgTags = doc.querySelectorAll('img');

  boardImgTags.forEach((img, index) => {
    img.setAttribute('src', "http://localhost:8100/board"+getBoardImageUrls[index] || ''); // 순서대로 적용
  });

  return doc.body.innerHTML;
}

// 게시글 상세 페이지
const BoardDetailPage = () => {

  const {id} = useParams(); // URL에서 게시글 ID 가져오기 
  // contents_idx: 게시글 상세페이지 댓글의 고유 idx 
  const [ detailBoard, setDetailBoard ] = useState({
    category_idx: "",
    title: "",
    nickname: "",
    content : "",
    contents_idx: "",
    text: "",
    sdate:"",
  }); 
  
  // 사용자가 quill 에디터에서 작성한 글의 원본 html 저장하는 값
  // const [contentsQuillHtml, setContentsQuillHtml] = useState("");

  // 새 댓글 입력값
  const [newCommentText, setNewCommentText] = useState("");

  // 입력한 댓글 목록으로 불러오기
  const [commentList, setCommentList] = useState([]);

  // 로그인한 사람의 user_idx를 가져와야함 - 숫자 가져옴
  // ContentsService, ContentsCommentService에 어떻게 불러올지 생각
  const [userIdx, setUserIdx ] = useState(0);

  // 게시글 상세데이터 상태
  const [loading, setLoading] = useState(); // 로딩 상태

    // 카테고리 구분자 사용
    const getText = (category_idx) => {
      switch (category_idx) {
        case 4001: // 잡담
          return '잡담';
        case 4002: // 삽니다
          return '삽니다';
        case 4003: // 팝니다
          return '팝니다';
        case 4004: // 기타
          return '기타';  
        default:
          return category_idx;
       }   
    }

  useEffect(() => console.log(newCommentText), [commentList])

  useEffect(() => {
    // 게시판 등록페이지 등록 데이터 가져오는 것
    getBoardDetail(id) // API 호출
      .then((response) => {
        setDetailBoard(response.data); // 받아온 등록 데이터 상태에 저장

        // 이미지 URL 배열을 detailImageList에서 꺼내기
        const imageUrls = response.data.detailImageList.map(item => item.image_url);

        // pushImgSrc 함수를 호출 시 두 번째 인자로 imageUrls 넣기
        const processedContent = pushImgSrc(response.data.content, imageUrls);

        console.log("배열 밖으로 나왔니? ",processedContent);

        // 상태에 저장 후 렌더링
        setDetailBoard({
          ...response.data,
          content: processedContent,
        });

        setLoading(false); // 로딩 완료 표시
      });
    // 댓글 목록 가져오는 서비스 작성(DB 포함)
    getBoardComment(id) // API 호출
      .then((response) => {
        setCommentList(response.data); // 받아온 댓글 데이터 상태에 저장
        setLoading(false); // 로딩 완료 표시
      });
    
  }, []);


  // 화면에 표시될 내용
  return (
    <div className='board_detail'>
    
    {/* 카테고리 선택, 제목, 작성자, 게시글 수정+삭제 버튼 */}
      <BoardDetailHeader 
        category_idx={getText(detailBoard.category_idx)} title={detailBoard.title} 
        nickname={detailBoard.nickname} id={id}
      />
      
      {/* 상세내용 */}
      <BoardDetailTextEditor content={{__html: detailBoard.content}}/>

      {/* 댓글 등록 + 삭제버튼, 댓글 목록 보이기 */}
      <BoardDetailFooter newCommentText={newCommentText} setNewCommentText={setNewCommentText} 
                         commentList={commentList} setCommentList={setCommentList} id={id}
                         setLoading={setLoading}
      />

    </div>
  );

};


export default BoardDetailPage;