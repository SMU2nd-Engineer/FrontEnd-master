import React from "react";
import MyPageLink from "../components/MyPageLink";
import MyBoard from "../components/MyBoard";
import MyComment from "../components/MyComment";

export default function MyBoardPage() {
  return (
    <div>
      <p>마이페이지 게시판 입니다.</p>
      <MyPageLink />
      {/* <p>내가 작성한 게시글나오는 컴포넌트</p> */}
      <MyBoard />
      {/* <p>내가 작성한 댓글 나오는 컴포넌트</p> */}
      <MyComment />
    </div>
  );
}
