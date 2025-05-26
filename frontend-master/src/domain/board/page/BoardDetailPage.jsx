import { p, title } from 'framer-motion/client';
import React from 'react';
import {getBoardComment, getBoardDetail, getBoardAddComment, postBoardDeleteComment} from "../services/boardService"
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { CloseButton } from "@chakra-ui/react"

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

  // 새 댓글 입력값
  const [newCommentText, setNewCommentText] = useState("");

  // 입력한 댓글 목록으로 불러오기
  const [commentList, setCommentList] = useState([]);

  // 게시글 상세데이터 상태
  const [loading, setLoading] = useState(); // 로딩 상태

  useEffect(() => console.log(newCommentText), [commentList])

  useEffect(() => {
    // 게시판 등록페이지 등록 데이터 가져오는 것
    getBoardDetail(id) // API 호출
      .then((response) => {
        setDetailBoard(response.data); // 받아온 등록 데이터 상태에 저장
        setLoading(false); // 로딩 완료 표시
      });
    // 댓글 목록 가져오는 서비스 작성(DB 포함)
    getBoardComment(id) // API 호출
      .then((response) => {
        setCommentList(response.data); // 받아온 댓글 데이터 상태에 저장
        setLoading(false); // 로딩 완료 표시
      });
    
  }, []);

  // 댓글 등록 버튼 선택
  const handleSubmit =async function(e){
  // preventDefault: 페이지 새로고침 방지
    e.preventDefault();

    console.log(newCommentText)

    // 서버에 댓글 등록 요청 보내는 함수
    // - 비동기처리해서 기다렸다가 다음것이 실행되게 설정
    await getBoardAddComment({id, text: newCommentText})
      .then((res) => {
        console.log("댓글정보:" , newCommentText)
        alert('댓글 등록 성공');
        console.log(res)
        setNewCommentText('');
      })
      .catch((error) => {
        console.error("댓글 등록 실패: ", error);
        alert("댓글 등록 실패했습니다.");
      });
  

    // 댓글 목록 가져오는 함수 
    // - 비동기처리해서 기다렸다가 다음것이 실행되게 설정
    await getBoardComment(id) // API 호출
      .then((response) => {
        console.log(response.data)
        setCommentList(response.data); // 받아온 댓글 데이터 상태에 저장
        setLoading(false); // 로딩 완료 표시
      });
  };
   
  // 댓글 등록 취소 버튼 선택 - 게시글 상세페이지로 머무는 것
  const handleCancel = (e) => {
    // 새로고침 방지
    e.preventDefault();

    // 댓글 등록 취소하고 선택하는 팝업창
    const commentAddCancel = window.confirm("게시글 댓글 등록을 취소하시겠습니까?");

    // 확인 누르면 게시글 상세페이지에 머무름
    if(!commentAddCancel) return;

    // 상태 초기화
    setNewCommentText("");
  };

  // 댓글 삭제 기능 구현
  const handleDelete = async function(comment_idx){

    // 서버에 댓글 등록 요청 보내는 함수
    // - 비동기처리해서 기다렸다가 다음것이 실행되게 설정
    await postBoardDeleteComment(comment_idx)
      .then((res) => {
        console.log("댓글 삭제 정보:" , comment_idx)
        alert('댓글 삭제 성공');
        console.log(res); 
      })
      .catch((error) => {
        console.error("댓글 삭제 실패: ", error);
        alert("댓글 삭제 실패했습니다.");
      });
    await getBoardComment(id) // API 호출
      .then((response) => {
        console.log(response.data)
        setCommentList(response.data); // 받아온 댓글 데이터 상태에 저장
        setLoading(false); // 로딩 완료 표시
      });
    };

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
      
      {/* 상세내용 */}
      <p>상세내용</p>
      {/* quill 에서 받아온 데이터를 화면에 출력하는 방법(태그 데이터) 
          HTML(예: <p>안녕하세요</p>)을 
          게시글 상세페이지에서 HTML 태그 그대로 렌더링해서 보여주기 */}
      <div
        dangerouslySetInnerHTML={{__html: detailBoard.content}} />

      {/* 댓글 */}
      <p>댓글</p>

      <textarea
        value={newCommentText}
        onChange={(e) => setNewCommentText(e.target.value)}
        placeholder="댓글을 입력해주세요."
      />
      {/* 댓글 등록 onClick */}
      <button onClick={handleSubmit}>댓글 등록</button>

      {/* 댓글 등록 취소 버튼 onClick */}
      <button onClick={handleCancel}>댓글 등록 취소</button>  

      {/* 기존 댓글 내역 출력 - 댓글이 없으면 '댓글이 없습니다. 문구 출력' */}  
      <h5>댓글 목록</h5> 

      {/* 중복되지 않게 key값을 2개를 주는게 조건 - 
          리스트 안에 safeKey를 임시 키로 줘서 단독 idx를 출력함 
          닉네임, 입력한 댓글, 날짜 순으로 출력되게 설정 
          */}  
      <ul>
        {commentList.map((comment, index) => {
          const safeKey = comment?.id ?? `fallback-${index}`; // undefined 방지
          return (
            <li key={safeKey}>
                <p>
                  <strong>{comment.nickname}</strong>
                </p>
                <p>{comment.text}</p>
                <strong>{comment.sdate}</strong>
                {/* 댓글 삭제 button */}
                <CloseButton onClick={()=> {handleDelete(comment.comment_idx)}}/>
              </li>
            );
        })}
      </ul>

    </div>
  );

};


export default BoardDetailPage;