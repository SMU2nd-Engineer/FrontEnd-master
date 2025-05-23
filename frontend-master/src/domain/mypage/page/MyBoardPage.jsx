import React, { useEffect, useState } from "react";
import MyPageLink from "../components/MyPageLink";
import MyBoard from "../components/MyBoard";
import MyComment from "../components/MyComment";
import { getMyPageData } from "../services/getMyPageDate";

export default function MyBoardPage() {
  const [myBoardPageInfo, setMyBoardPageInfo] = useState({});

  useEffect(() => {
    const callBoardInfo = async () => {
      const result = await getMyPageData("MY_BOARD_COMMENT_LIST");
      setMyBoardPageInfo(result);
    };
    callBoardInfo();
  }, []);

  return (
    <div>
      <p>마이페이지 게시판 입니다.</p>
      <MyPageLink />
      {/* <p>내가 작성한 게시글나오는 컴포넌트</p> */}
      <MyBoard boards={myBoardPageInfo.myBoardLists} />
      {/* <p>내가 작성한 댓글 나오는 컴포넌트</p> */}
      <MyComment comments={myBoardPageInfo.myCommentLists} />
    </div>
  );
}
