import React from "react";
import { useNavigate } from "react-router-dom";
import {
  postBoardSubmit,
  putEditContentsDetail,
} from "../services/boardService";
import * as Submit from "../styles/BoardSubmitDesign";
import { useModalStore } from "@/store/useModalStore";

// 본문 HTML 저장 전 clearImgSrc 함수로 src 빈 문자열로 치환 후 저장하는 함수
function clearImgSrc(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  doc.querySelectorAll("img").forEach((img) => {
    img.setAttribute("src", "");
  });

  return doc.body.innerHTML;
}

const BoardSubmitFooter = ({
  contentData,
  newsubmit,
  isModify,
  id,
  setNewSubmit,
  setContentData,
}) => {
  // 페이지 이동을 처리 하는 함수
  const navigate = useNavigate();
  const openModal = useModalStore((state) => state.open);

  // 게시글 상세페이지 게시글 등록버튼 선택(수정모드 포함)시 확인하는 팝업창(화면 이동O)
  // preventDefault: 페이지 새로고침 방지
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newsubmit.category_idx) {
      await openModal("alert", {
        title: "게시글 카테고리 선택",
        message: "글 카테고리 선택은 필수입니다.",
      });
      return;
    }

    const confirmed = await openModal("confirm", {
      title: "게시글 등록",
      message: "게시글 등록하시겠습니까?",
    });

    // confirm 일때 확인 클릭시 적용됨
    if (confirmed) {
      /*
      1. quill 에서 img_src 태그만 별도로 처리
      2. tempdata: <img > src 프로퍼티> 안에 base64 형식 이미지를 파일형식 변환 후
         데이터를  uploadImage에 저장하고 src 프로퍼티 안에 내용을 지움
      3. postFiles: Blob 객체 받음
    */
      const imgRegex = /<img[^>]+src="([^"]+)"[^>]*>/g; // `<img>` 태그를 찾는 정규 표현식
      let tempdata = contentData;
      let uploadImage = [];
      let postFiles = [];
      let currentUrls = [];
      let imgMatch; // 이미지 주소

      while ((imgMatch = imgRegex.exec(tempdata)) !== null) {
        uploadImage.push(imgMatch[1]); // src 값을 배열에 저장
      }

      uploadImage.forEach((src, i) => {
        if (src.startsWith("data:image/")) {
          // base64 데이터인지 확인
          const byteString = atob(src.split(",")[1]); // base64 데이터를 문자열로 변환
          const arrayBuffer = new ArrayBuffer(byteString.length); // ArrayBuffer 생성
          const arrayBufferView = new Uint8Array(arrayBuffer); // Uint8Array 생성
          for (let i = 0; i < byteString.length; i++) {
            arrayBufferView[i] = byteString.charCodeAt(i); // 문자열을 ArrayBuffer에 저장
          }
          const blob = new Blob([arrayBuffer], {
            type: src.split(";")[0].split(":")[1],
          });
          const file = new File([blob], "image.png", {
            type: src.split(";")[0].split(":")[1],
          });
          postFiles.push(file);
          currentUrls.push(`newImage${i}`);
        } else {
          // 이미지 URL인 경우
          currentUrls.push(src);
        }
      });

      // img 태그 src 속성만 빈 문자열로 변경
      const filterdData = clearImgSrc(tempdata);

      // 게시글 등록 요청을 서버로 보낼때 사용될 데이터 객체 만듬
      const postContent = {
        category_idx: newsubmit.category_idx,
        title: newsubmit.title,
        content: filterdData, // 글 내용 입력 - 리액트 에디터 내용 => tempdata
      };

      // 게시판 등록 양식 사용 - 수정
      if (isModify) {
        putEditContentsDetail(id, postContent, postFiles, currentUrls)
          .then((response) => response.data)
          .then((data) => {
            /* 상세페이지의 게시글 수정 버튼 누르면 발생
             - 게시글 등록페이지 틀과 동일하게 입력된 값 불러옴  
             replace: true - 수정모드일때 다시 수정하는 페이지로 돌아가지 않도록 함(뒤로가기 방지)
          */
            navigate(`/board/detail/${data.idx}`, { replace: true });
          })
          .catch((error) => {
            console.error("게시글 수정 실패: ", error);
            openModal("alert", {
              title: "게시글 수정 실패",
              message:
                "게시글 수정을 실패했습니다! \n혹시 오류가 지속되면 운영자에게 문의해주세요.",
            });
          });
      } else {
        // 게시판 등록하는 양식
        postBoardSubmit(postContent, postFiles)
          .then((response) => response.data)
          .then((data) => {
            /* 상세 페이지로 이동(백엔드 서버가 새로 생성한 게시글 고유 식별자) 
             replace: true - 새로운 글 등록시 뒤로가기 버튼을 눌러도 기존의 등록페이지로
             돌아가는 걸 막음(뒤로가기 방지) 
          */
            navigate(`/board/detail/${data.idx}`, { replace: true });
          })
          .catch((error) => {
            console.error("게시글 등록 실패: ", error);
            openModal("alert", {
              title: "게시글 등록 실패",
              message:
                "게시글 등록을 실패했습니다! \n혹시 오류가 지속되면 운영자에게 문의해주세요.",
            });
          });
      }
    }
  };

  /*
    1. 게시글 내용 입력 후 클릭하는 버튼 - 게시글 등록 버튼
    => 등록 성공시 게시글 상세페이지로 이동
    2. preventDefault: 페이지 새로고침 방지
  */

  // 게시글 상세페이지 게시글 취소버튼 선택시 확인하는 팝업창(화면 이동O)
  const handleCancel = async (e) => {
    // 새로고침 방지
    e.preventDefault();
    const confirmed = await openModal("confirm", {
      title: "게시글 등록취소",
      message:
        "정말 취소하고 게시글 목록으로 돌아가시겠습니까? 되돌릴 수 없습니다.",
    });

    if (confirmed) {
      try {
        // 상태 초기화
        setNewSubmit({
          category_idx: "",
          title: "",
          content: "",
        });
        // 글 내용 - 텍스트 에디터 quill의 데이터 초기화
        setContentData("");
        navigate(`/board`); // 게시글 리스트 페이지로 이동
      } catch (error) {
        console.log("게시글 등록취소 실패:", error);
        await openModal("alert", {
          title:
            "게시글 등록취소를 실패했습니다. \n혹시 오류가 지속되면 운영자에게 문의해주세요.",
        });
      }
    }
  };

  // 화면에 표시
  return (
    <Submit.ButtonMain>
      <Submit.SubmitButton>
        {/* 게시글 등록 페이지 - 게시글 등록/수정 버튼 */}
        <button onClick={handleSubmit}>{isModify ? "수정" : "등록"}</button>
      </Submit.SubmitButton>

      <Submit.CancleButton>
        {/* 게시글 등록 페이지 - 게시글 취소 버튼 */}
        <button onClick={handleCancel}>취소</button>
      </Submit.CancleButton>
    </Submit.ButtonMain>
  );
};

export default BoardSubmitFooter;
