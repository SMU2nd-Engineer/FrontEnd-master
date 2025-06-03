import React from "react";
import {
  getBoardComment,
  postBoardDeleteComment,
  postBoardAddComment,
} from "../services/boardService";

import * as Details from "../styles/BoardDetailDesign";
import { FaUserLarge } from "react-icons/fa6";
import useLoginUserInfoStore from "@/store/useLoginUserInfoStore";

const BoardDetailFooter = ({
  newCommentText,
  setNewCommentText,
  commentList,
  setCommentList,
  id,
  setLoading,
  user_idx,
}) => {
  // 로그인한 상태에서 전역변수 가져옴 - 로그인한 사람만 댓글삭제 하도록 설정
  const { userInfo } = useLoginUserInfoStore();

  // 댓글 등록 버튼 선택
  const handleSubmit = async function (e) {
    // preventDefault: 페이지 새로고침 방지
    e.preventDefault();

    // 서버에 댓글 등록 요청 보내는 함수
    // - 비동기처리해서 기다렸다가 다음것이 실행되게 설정
    await postBoardAddComment({ id, text: newCommentText })
      .then((res) => {
        // console.log("댓글정보:", newCommentText);
        alert("댓글 등록 성공");
        console.log("댓글정보:", newCommentText);
        console.log(res);
        setNewCommentText("");
      })
      .catch((error) => {
        console.error("댓글 등록 실패: ", error);
        alert("댓글 등록 실패했습니다.");
      });

    // 댓글 목록 가져오는 함수
    // - 비동기처리해서 기다렸다가 다음것이 실행되게 설정
    await getBoardComment(id) // API 호출
      .then((response) => {
        // console.log(response.data);
        setCommentList(response.data); // 받아온 댓글 데이터 상태에 저장
        setLoading(false); // 로딩 완료 표시
      });
  };

  // // 댓글 등록 취소 버튼 선택 - 게시글 상세페이지로 머무는 것
  // const handleCancel = (e) => {
  //   // 새로고침 방지
  //   e.preventDefault();

  //   // 댓글 등록 취소하고 선택하는 팝업창
  //   const commentAddCancel = window.confirm(
  //     "게시글 댓글 등록을 취소하시겠습니까?"
  //   );

  //   // 확인 누르면 게시글 상세페이지에 머무름
  //   if (!commentAddCancel) return;

  //   // 상태 초기화
  //   setNewCommentText("");
  // };

  // 댓글 삭제 기능 구현
  const handleDelete = async function (comment_idx) {
    // 서버에 댓글 등록 요청 보내는 함수
    // - 비동기처리해서 기다렸다가 다음것이 실행되게 설정
    await postBoardDeleteComment(comment_idx)
      .then((res) => {
        // console.log("댓글 삭제 정보:", comment_idx);
        alert("댓글 삭제 성공");
        console.log(res);
      })
      .catch((error) => {
        console.error("댓글 삭제 실패: ", error);
        alert("댓글 삭제 실패했습니다.");
      });
    await getBoardComment(id) // API 호출
      .then((response) => {
        console.log(response.data);
        setCommentList(response.data); // 받아온 댓글 데이터 상태에 저장
        setLoading(false); // 로딩 완료 표시
      });
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!newCommentText.trim()) return;
      handleSubmit(e);
    }
  };
  // 화면에 표시될 내용
  return (
    <Details.CommentMain>
      <Details.CommentSubmit>
        {/* 댓글 */}
        <textarea
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
          placeholder="댓글을 입력해주세요."
          onKeyDown={(e) => handleKeyDown(e)}
        />
        {/* 댓글 등록 onClick */}
        <button onClick={handleSubmit} disabled={!newCommentText.trim()}>
          댓글 등록
        </button>
        {/* 댓글 등록 취소 버튼 onClick */}
        {/* <button onClick={handleCancel}>댓글 등록 취소</button> */}
      </Details.CommentSubmit>
      <Details.CommentList>
        {/* 댓글목록 */}
        {/* 기존 댓글 내역 출력 - 댓글이 없으면 '댓글이 없습니다. 문구 출력' */}
        {!commentList.length && <p>댓글이 없습니다. </p>}
        {/* 중복되지 않게 key값을 2개를 주는게 조건 - 
            리스트 안에 safeKey를 임시 키로 줘서 단독 idx를 출력함 
            닉네임, 입력한 댓글, 날짜 순으로 출력되게 설정 
            */}
        <ul>
          {commentList.map((comment, index) => {
            const safeKey = comment?.id ?? `fallback-${index}`; // undefined 방지
            return (
              <li key={safeKey}>
                <div className="userNameAndDate">
                  <p className="userName">
                    <FaUserLarge
                      style={{ marginRight: "12px", fontSize: "14px" }}
                    />
                    {comment.nickname}
                  </p>
                  <p className="commentTime">
                    {comment.sdate.replace("T", " ")}
                  </p>
                </div>
                <div className="comment">
                  <p>{comment.text}</p>
                </div>

                {/* 댓글 삭제 button 
                    처음 페이지 시작하면 다른 정보와 로그인한 사람의 user_idx를 가져와야함
                    비교해서 작성자랑 같지 않으면 x버튼 사라지게 설정
                  */}
                {/* {userIdx === comment.userIdx &&  */}
                {user_idx === userInfo.userIdx && (
                  <button
                    onClick={() => {
                      handleDelete(comment.comment_idx);
                    }}
                  >
                    {" "}
                    댓글 삭제
                  </button>
                )}
                {/* } */}
              </li>
            );
          })}
        </ul>
      </Details.CommentList>
    </Details.CommentMain>
  );
};

export default BoardDetailFooter;
