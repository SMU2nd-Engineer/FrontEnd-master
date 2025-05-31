import React from "react";
import { useNavigate } from "react-router-dom";
import {
  getBoardDetail,
  postBoardSubmit,
  putEditContentsDetail,
} from "../services/boardService";
import * as Submit from "../styles/BoardSubmitDesign";

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

  // 게시글 내용 입력 후 클릭하는 버튼 - 게시글 등록 버튼
  // 등록 성공시 게시글 상세페이지로 이동
  // preventDefault: 페이지 새로고침 방지
  const handleSubmit = (e) => {
    e.preventDefault();

    // quill 에서 img_src 태그만 별도로 처리
    // tempdata: <img > src 프로퍼티> 안에 base64 형식 이미지를 파일형식 변환 후
    // 데이터를  uploadImage에 저장하고 src 프로퍼티 안에 내용을 지움
    // postFiles: Blob 객체 받음
    let tempdata = contentData;
    // img 태그 src 속성만 빈 문자열로 변경
    // tempdata = clearImgSrc(tempdata);
    let uploadImage = [];
    let postFiles = [];

    const imgRegex = /<img[^>]+src="([^"]+)"[^>]*>/g; // `<img>` 태그를 찾는 정규 표현식
    let imgMatch; // 이미지 주소

    while ((imgMatch = imgRegex.exec(tempdata)) !== null) {
      uploadImage.push(imgMatch[1]); // src 값을 배열에 저장
    }

    console.log(uploadImage);

    uploadImage.forEach((src) => {
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
        }); // Blob 객체 생성
        console.log("Blob 객체:", blob);
        const file = new File([blob], "image.png", {
          type: src.split(";")[0].split(":")[1],
        });
        postFiles.push(file);
      } else {
        // 이미지 URL인 경우
        console.log("이미지 URL:", src);

        postFiles.push(src);
      }
    });
    const filterdData = clearImgSrc(tempdata);

    // 게시글 등록 요청을 서버로 보낼때 사용될 데이터 객체 만듬
    const postContent = {
      category_idx: newsubmit.category_idx,
      title: newsubmit.title,
      content: filterdData, // 글 내용 입력 - 리액트 에디터 내용 => tempdata
      // uploadImage를 백엔드로 넘겨주는 건 위에서 함
    };
    console.log("postContent: ", postContent);
    // =>
    // 서버에 게시글 등록 요청을 보내는 함수

    // 게시판 양식 사용 - 수정
    if (isModify) {
      putEditContentsDetail(id, postContent, postFiles)
        .then((response) => response.data)
        .then((data) => {
          console.log("서버응답 확인: ", data);

          /* 상세페이지의 게시글 수정 버튼 누르면 발생
             - 게시글 등록페이지 틀과 동일하게 입력된 값 불러옴  
             replace: true - 수정모드일때 다시 수정하는 페이지로 돌아가지 않도록 함(뒤로가기 방지)
          */
          navigate(`/board/detail/${data.idx}`, { replace: true });
        })
        .catch((error) => {
          console.error("게시글 수정 실패: ", error);
          alert("게시글 수정 실패했습니다...");
        });
    } else {
      // 게시판 등록하는 양식
      postBoardSubmit(postContent, postFiles)
        .then((response) => response.data)
        .then((data) => {
          console.log("서버응답 확인: ", data);

          /* 상세 페이지로 이동(백엔드 서버가 새로 생성한 게시글 고유 식별자) 
             replace: true - 새로운 글 등록시 뒤로가기 버튼을 눌러도 기존의 등록페이지로
             돌아가는 걸 막음(뒤로가기 방지) 
          */
          navigate(`/board/detail/${data.idx}`, { replace: true });
        })
        .catch((error) => {
          console.error("게시글 등록 실패: ", error);
          alert("게시글 등록 실패했습니다...");
        });
    }
  };

  // 게시글 취소 버튼 누르면 게시글 리스트 페이지로 이동하는 함수
  const handleCancel = (e) => {
    // 새로고침 방지
    e.preventDefault();

    // 취소하고 홈페이지로 돌아갈건지 선택하는 팝업창
    const submitCancel = window.confirm(
      "게시글 등록을 취소하고 게시글 홈페이지로 돌아가시겠습니까?"
    );

    // 취소 누르면 게시글 등록페이지에 머무름
    if (!submitCancel) return;

    // 상태 초기화
    setNewSubmit({
      category_idx: "",
      title: "",
      content: "",
    });
    // 글 내용 - 텍스트 에디터 quill의 데이터 초기화
    setContentData("");

    // 게시글 리스트 페이지로 이동
    navigate(`/board`);
  };

  // 화면에 표시
  return (
    <Submit.ButtonMain>
      <Submit.SubmitButton>
        {/* 게시글 등록 페이지 - 게시글 등록 버튼 */}
        <button onClick={handleSubmit}>등록</button>
      </Submit.SubmitButton>

      <Submit.CancleButton>
        {/* 게시글 등록 페이지 - 게시글 취소 버튼 */}
        <button onClick={handleCancel}>취소</button>
      </Submit.CancleButton>
    </Submit.ButtonMain>
  );
};

export default BoardSubmitFooter;
