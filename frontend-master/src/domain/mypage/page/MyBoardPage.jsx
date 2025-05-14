import React from "react";
import MyPageLink from "../components/MyPageLink";

export default function MyBoardPage() {
  return (
    <div>
      <p>마이페이지 게시판 입니다.</p>
      <MyPageLink />
      <p>내가 작성한 게시글나오는 컴포넌트</p>
      <p>내가 작성한 댓글 나오는 컴포넌트</p>
    </div>
  );
}
