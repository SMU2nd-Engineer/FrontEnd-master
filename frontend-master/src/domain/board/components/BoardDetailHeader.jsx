import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteContentsDetail } from "../services/boardService";
import * as Details from "../styles/BoardDetailDesign";
import { FaUserLarge } from "react-icons/fa6";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import useLoginUserInfoStore from "@/store/useLoginUserInfoStore";
import { useModalStore } from "@/store/useModalStore";

const BoardDetailHeader = ({
  category_idx,
  title,
  nickname,
  id,
  sdate,
  user_idx,
  handleRoomClick = (f) => f,
}) => {
  const navigate = useNavigate();

  // 로그인한 상태에서 전역변수 가져옴 - 로그인한 사람만 수정+삭제 하도록 설정
  const { userInfo } = useLoginUserInfoStore();
  const openModal = useModalStore((state) => state.open);

  // 게시글 상세페이지 게시글 삭제버튼 선택시 확인하는 팝업창(화면 이동O)
  const handleContentsDelete = async () => {
    const confirmed = await openModal("confirm", {
      title: "게시글 삭제",
      message: "정말 삭제하시겠습니까? 되돌릴 수 없습니다.",
    });

    // confirm 일때 확인 클릭시 적용됨
    if (confirmed) {
      try {
        await deleteContentsDetail(id);
        navigate(`/board/list`); // 게시판 리스트로 이동
      } catch (error) {
        console.error("삭제 실패:", error);
        await openModal("alert", {
          title: "게시글 삭제 성공",
          message: "게시글 삭제를 성공했습니다!",
        });
      }
    }
  };

  // 게시판 리스트 홈페이지로 이동
  const handleBackHome = () => {
    navigate(`/board/list`);
  };

  // 게시글 수정 버튼 선택
  const handleRegister = () => {
    navigate(`/board/edit/${id}`);
  };

  // 화면에 표시될 내용
  return (
    <div>
      <p className="pagetitle">
        <HiOutlineChatBubbleLeftRight
          style={{ color: "#6b4b4b", marginRight: "15px" }}
        />
        자유게시판
      </p>
      <Details.CategoryAndTitle>
        {/* 카테고리 : 잡담 / 팝니다 / 삽니다 / 기타 */}
        <h2 className="category">[{category_idx}]</h2>
        {/* 제목 */}
        <h2 className="title">{title}</h2>
      </Details.CategoryAndTitle>

      <Details.UserAuth>
        <div className="author">
          {/* 작성자 */}
          <FaUserLarge style={{ marginRight: "5px" }} />
          <h2>{nickname}</h2>
          <div className="meta">
            {user_idx !== userInfo.userIdx && (
              <button onClick={handleRoomClick}>1:1 채팅</button>
            )}
            <p>{sdate.replace("T", " ")}</p>
          </div>
        </div>
        <div className="brn-group">
          <div>
            {/* 게시판 리스트 홈페이지로 이동 - 게시글 수정+삭제 X */}
            <button onClick={handleBackHome}>글 목록</button>
          </div>
          {/* 게시글 수정 버튼 */}
          <div>
            {user_idx === userInfo.userIdx && (
              <button onClick={handleRegister}>수정</button>
            )}
          </div>
          <div>
            {/* 게시글 삭제 버튼 */}
            {user_idx === userInfo.userIdx && (
              <button onClick={handleContentsDelete}>삭제</button>
            )}
          </div>
        </div>
      </Details.UserAuth>
    </div>
  );
};

export default BoardDetailHeader;
