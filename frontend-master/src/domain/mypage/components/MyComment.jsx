import React, { useState } from "react";
import { getMyCommentList } from "../services/getMyCommentList";
import { commentMook } from "../utils/mook";
import CommentListcomp from "./CommentListcomp";

export default function MyComment() {
  const [commentInfo, setCommentInfo] = useState(commentMook);
  if (!commentInfo.length) {
    return <p>댓글 정보가 없습니다.</p>;
  }
  //   useEffect(() => {
  //     const callCommentInfo = async () => {
  //       const result = await getMyCommentList();
  //       setCommentInfo(result);
  //     };
  //     callCommentInfo();
  //   }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>제목</th>
            <th>날짜</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {commentInfo.map((item) => (
            <CommentListcomp key={item.idx} text={item.text} date={item.date} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
