import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteContentsDetail } from "../services/boardService";
import * as Details from "../styles/BoardDetailDesign";
import { FaUserLarge } from "react-icons/fa6";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import useLoginUserInfoStore from "@/store/useLoginUserInfoStore";

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
  const {userInfo} = useLoginUserInfoStore();
  console.log("로그인한 사람 맞아? :", userInfo.userName, userInfo.userNickName);

  // 게시판 리스트 홈페이지로 이동
  const handleBackHome = () => {
    console.log("게시판 홈페이지로 이동");
    navigate(`/board/list`);
  };

  // 게시글 수정 버튼 선택
  const handleRegister = () => {
    console.log("게시글 수정 클릭");
    navigate(`/board/edit/${id}`);
  };

  // 게시글 삭제 버튼 선택
  const handleDeleteDetail = async () => {
    try {
      await deleteContentsDetail(id);
      alert("게시글 삭제 클릭");
      navigate(`/board/list`); // 게시판 리스트로 이동
    } catch (error) {
      console.error("삭제 실패:", error);
      alert("게시글 삭제 실패했습니다.");
    }
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

      <Details.UserAuth id="sidis">
        <div className="author">
          {/* 작성자 */}
          <FaUserLarge style={{ marginRight: "5px" }} />
          <h2>{nickname}</h2>
          <div className="meta">
            <button onClick={handleRoomClick}>1:1 채팅</button>
            <p>{sdate}</p>
          </div>
        </div>
        <div className="brn-group">
          {/* 게시판 리스트 홈페이지로 이동 - 게시글 수정+삭제 X */}
          <button onClick={handleBackHome}>뒤로가기</button>
          {/* 게시글 수정 버튼 */}

          { user_idx === userInfo.userIdx && (<button onClick={handleRegister}>수정</button>)}
          {/* 게시글 삭제 버튼 */}
          { user_idx === userInfo.userIdx && (<button onClick={handleDeleteDetail}>삭제</button>)}
        </div>
      </Details.UserAuth>
    </div>
  );
};

export default BoardDetailHeader;
