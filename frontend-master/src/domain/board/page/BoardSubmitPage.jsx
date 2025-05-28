// BoardSubmitPage.jsx
import { useState } from "react";
import { getBoardSubmit, getBoardDetail } from "../services/boardService"
import { div, title } from "framer-motion/client";
import BoardEditorQuill from "../components/BoardEditorQuill";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SelectBox from "@/components/SelectBox";
import { getCategoryIdx } from "@/utils/CategoryHandler";
import { useRef } from "react";


// 본문 HTML 저장 전 clearImgSrc 함수로 src 빈 문자열로 치환 후 저장하는 함수
function clearImgSrc(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  doc.querySelectorAll('img').forEach(img => {
    img.setAttribute('src', '');
  });

  return doc.body.innerHTML;
}

// 게시글 등록 페이지
const BoardSubmitPage = () => {

  // 게시글을 등록하고 저장하는 함수 
  // boardSubs: 게시글 입력한 데이터 담아서 백엔드로 보냄 

  // 게시글 등록 (제목, 등록일자, 작성자(닉네임), 이미지, 글내용(React Quill Toollbar))
  const [ newsubmit, setNewSubmit ] = useState({
    category_idx: "",
    title: "",
    // imageUrl: "",
    content: "",
  });   
  
  const { category_idx, title, content } = newsubmit;
  // 글 내용 입력 - quill 툴바 커스텀
  const [ contentData, setContentData ] = useState (""); 

  // 사용자가 quill 에디터에서 작성한 글의 원본 html 저장하는 값
  const [contentsQuillHtml, setContentsQuillHtml] = useState("");

  // 페이지 이동을 처리 하는 함수
  const navigate = useNavigate();

  // quill 확인
  const quillRef = useRef();

  // 입력 값 처리 함수
  const handleChange = (e) => {
    const { name, value } = e.target;

    // 현재 상태값 newsubmit을 안전하게 업데이트
    // 사용자가 선택한 타입에 따라 파일 등록 처리 함수(imageUrl != value)
    setNewSubmit((prev) => ({
      ...prev,
      [name]: value, 
    }));
  };
   console.log(quillRef);
  // 게시글 내용 입력 후 클릭하는 버튼
  // preventDefault: 페이지 새로고침 방지
  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(quillRef.current);

    // // 1. 에디터 내용 가져오기
    // const originalHtml = quillRef.current.root.innerHTML;

    // console.log(originalHtml);


    // // 2. 이미지 src 속성만 제거
    // const deleteSrcHtml = removeImgSrc(originalHtml);

    // // 3. 텍스트 에디터 quill에 상태 저장
    // setContentData(deleteSrcHtml);

    // quill 에서 img_src 태그만 별도로 처리
    // tempdata: <img > src 프로퍼티> 안에 base64 형식 이미지를 파일형식 변환 후
    // 데이터를  uploadImage에 저장하고 src 프로퍼티 안에 내용을 지움
    // postFiles: Blob 객체 받음
    let tempdata = contentData
    // img 태그 src 속성만 빈 문자열로 변경
    // tempdata = clearImgSrc(tempdata);
    let uploadImage = []
    let postFiles = []

    const imgRegex = /<img[^>]+src="([^"]+)"[^>]*>/g; // `<img>` 태그를 찾는 정규 표현식
    let imgMatch; // 이미지 주소

    while ((imgMatch = imgRegex.exec(tempdata)) !== null) {
      uploadImage.push(imgMatch[1]); // src 값을 배열에 저장
    }

    console.log(uploadImage);

    uploadImage.forEach(src => {
      if (src.startsWith('data:image/')) { // base64 데이터인지 확인
        const byteString = atob(src.split(',')[1]); // base64 데이터를 문자열로 변환
        const arrayBuffer = new ArrayBuffer(byteString.length); // ArrayBuffer 생성
        const arrayBufferView = new Uint8Array(arrayBuffer); // Uint8Array 생성
        for (let i = 0; i < byteString.length; i++) {
          arrayBufferView[i] = byteString.charCodeAt(i); // 문자열을 ArrayBuffer에 저장
        }
        const blob = new Blob([arrayBuffer], { type: src.split(';')[0].split(':')[1] }); // Blob 객체 생성
        console.log('Blob 객체:', blob);
        const file = new File([blob], 'image.png', { type: src.split(';')[0].split(':')[1] });
        postFiles.push(file)
      } else { // 이미지 URL인 경우
        console.log('이미지 URL:', src);
      }
    });
    const filterdData = clearImgSrc(tempdata)

    // 게시글 등록 요청을 서버로 보낼때 사용될 데이터 객체 만듬
    const postContent = {
      category_idx: newsubmit.category_idx,
      title: newsubmit.title,
      content: filterdData, // 글 내용 입력 - 리액트 에디터 내용 => tempdata
      // uploadImage를 백엔드로 넘겨주는 건 위에서 함
      
    };
    console.log("postContent: ", postContent);
    // => 게시글 등록버튼 눌렀을때 성공하면 게시글 상세페이지로 이동
    // 서버에 게시글 등록 요청을 보내는 함수
    getBoardSubmit(postContent, postFiles)
      .then((response) => response.data)
      .then((data) => {
        console.log("서버응답 확인: ", data)

        // 상세 페이지로 이동(백엔드 서버가 새로 생성한 게시글 고유 식별자)
        navigate(`/board/detail/${data.idx}`);
      })
      .catch((error) => {
        console.error("게시글 등록 실패: ", error);
        alert("게시글 등록 실패했습니다...");
      });
  };

  // 게시글 취소 버튼 누르면 게시글 리스트 페이지로 이동하는 함수
  const handleCancel = (e) => {
    // 새로고침 방지
    e.preventDefault();

    // 취소하고 홈페이지로 돌아갈건지 선택하는 팝업창
    const submitCancel = window.confirm("게시글 등록을 취소하고 게시글 홈페이지로 돌아가시겠습니까?");

    // 취소 누르면 게시글 등록페이지에 머무름
    if(!submitCancel) return;

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


  // 화면에 표시될 내용
  return (
    <div className='new_board_submit'>
 
        {/* 카테고리 선택 : 잡담 / 팝니다 / 삽니다 / 기타 */}  
        <SelectBox 
          id="category_idx"
          name="category_idx" 
          category_idx={getCategoryIdx("BOARD")}
          handleChange={handleChange}/>

        {/* 제목 입력창 */}
        <input 
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleChange}
          placeholder="제목을 입력해주세요."     
        />   

        {/* 글 내용 입력하는 창 */}
        <p>글 내용</p>
        <BoardEditorQuill
        contentData={contentData} setContentData={setContentData} quillRef={quillRef}/>
     
      {/* 게시글 등록 페이지 - 게시글 등록 버튼 */}        
      <button onClick={handleSubmit}>등록</button>

      {/* 게시글 등록 페이지 - 게시글 취소 버튼 */}        
      <button onClick={handleCancel}>취소</button>
    </div>
  )


};

export default BoardSubmitPage;