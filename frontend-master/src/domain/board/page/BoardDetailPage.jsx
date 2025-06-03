import React from "react";
import { getBoardComment, getBoardDetail } from "../services/boardService";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import BoardDetailHeader from "../components/BoardDetailHeader";
import BoardDetailTextEditor from "../components/BoardDetailTextEditor";
import BoardDetailFooter from "../components/BoardDetailFooter";
import usePreventBackNavigation from "@/hooks/usePreventBackNavigation";
import * as Details from "../styles/BoardDetailDesign";
import ChatPopup from "@/domain/chat/components/ChatPopup";
import { postChatRooms } from "@/domain/chat/services/ChatService";

// 백엔드에서 받은 이미지 저장경로를 상세페이지에서 보이게 설정하는 함수
// 여러개의 이미지를 순서에 따라 넣음
function pushImgSrc(html, getBoardImageUrls) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const boardImgTags = doc.querySelectorAll("img");

  boardImgTags.forEach((img, index) => {
    img.setAttribute("src", getBoardImageUrls[index] || "");
  });

  return doc.body.innerHTML;
}

// 게시글 상세 페이지
const BoardDetailPage = () => {
  const { id } = useParams(); // URL에서 게시글 ID 가져오기
  // contents_idx: 게시글 상세페이지 댓글의 고유 idx
  const [detailBoard, setDetailBoard] = useState({
    category_idx: "",
    title: "",
    nickname: "",
    content: "",
    contents_idx: "",
    text: "",
    sdate: "",
    user_idx: "",
  });

  // 새 댓글 입력값
  const [newCommentText, setNewCommentText] = useState("");

  // 입력한 댓글 목록으로 불러오기
  const [commentList, setCommentList] = useState([]);

  // 게시글 상세데이터 상태
  const [loading, setLoading] = useState(); // 로딩 상태

  const [chatPopup, setChatPopup] = useState(0);

  // 카테고리 구분자 사용
  const getText = (category_idx) => {
    switch (category_idx) {
      case 4001: // 잡담
        return "잡담";
      case 4002: // 삽니다
        return "삽니다";
      case 4003: // 팝니다
        return "팝니다";
      case 4004: // 기타
        return "기타";
      default:
        return category_idx;
    }
  };

  useEffect(() => {
    // 게시판 등록페이지 등록 데이터 가져오는 것
    getBoardDetail(id) // API 호출
      .then((response) => {
        setDetailBoard(response.data); // 받아온 등록 데이터 상태에 저장

        // 이미지 URL 배열을 detailImageList에서 꺼내기
        const imageUrls = response.data.detailImageList.map(
          (item) => item.image_url
        );

        // pushImgSrc 함수를 호출 시 두 번째 인자로 imageUrls 넣기
        const processedContent = pushImgSrc(response.data.content, imageUrls);

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

  const handleRoomClick = () => {
    postChatRooms(detailBoard.user_idx, detailBoard.title).then((res) => {
      setChatPopup(res.data.id);
    });
  };

  const closePopup = () => {
    setChatPopup(0);
  };

  // 화면에 표시될 내용
  return (
    <Details.BoardDetailMain>
      {chatPopup === 0 || (
        <ChatPopup
          selectRoom={{ id: chatPopup, nickname: detailBoard.nickname }}
          handleClose={closePopup}
        />
      )}
      <Details.BoardDetailTop>
        {/* 카테고리 선택, 제목, 작성자, 게시글 수정+삭제 버튼 */}
        <BoardDetailHeader
          category_idx={getText(detailBoard.category_idx)}
          title={detailBoard.title}
          nickname={detailBoard.nickname}
          id={id}
          user_idx={detailBoard.user_idx}
          sdate={detailBoard.sdate}
          handleRoomClick={handleRoomClick}
        />
      </Details.BoardDetailTop>
      <Details.BoardDetailMiddle>
        {/* 상세내용 */}
        <BoardDetailTextEditor content={{ __html: detailBoard.content }} />
      </Details.BoardDetailMiddle>
      <Details.BoardDetailBottom>
        {/* 댓글 등록 + 삭제버튼, 댓글 목록 보이기 */}
        <BoardDetailFooter
          newCommentText={newCommentText}
          setNewCommentText={setNewCommentText}
          commentList={commentList}
          setCommentList={setCommentList}
          id={id}
          user_idx={detailBoard.user_idx}
          setLoading={setLoading}
        />
      </Details.BoardDetailBottom>
    </Details.BoardDetailMain>
  );
};

export default BoardDetailPage;
