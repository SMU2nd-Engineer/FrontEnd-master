import React, { useEffect, useState } from "react";
import MyPageLink from "../components/MyPageLink";
import MyBoard from "../components/MyBoard";
import MyComment from "../components/MyComment";
import { getMyPageData } from "../services/getMyPageDate";
import { useNavigate } from "react-router-dom";

import * as Nav from "../style/MyPageNavDesign";
import { MyBoardContainer } from "../style/MypageBoardDesign";

export default function MyBoardPage() {
  const [myBoardPageInfo, setMyBoardPageInfo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const callBoardInfo = async () => {
      const result = await getMyPageData("MY_BOARD_COMMENT_LIST");
      setMyBoardPageInfo(result);
    };
    callBoardInfo();
  }, []);

  return (
    <div>
      <Nav.StickyNavbar>
        <MyPageLink />
      </Nav.StickyNavbar>
      <MyBoardContainer>
        {/* <p>내가 작성한 게시글나오는 컴포넌트</p> */}
        <MyBoard boards={myBoardPageInfo.myBoardLists} navigate={navigate} />
        {/* <p>내가 작성한 댓글 나오는 컴포넌트</p> */}
        <MyComment
          comments={myBoardPageInfo.myCommentLists}
          navigate={navigate}
        />
      </MyBoardContainer>
    </div>
  );
}
