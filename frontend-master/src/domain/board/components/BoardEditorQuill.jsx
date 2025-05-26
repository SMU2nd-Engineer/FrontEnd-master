// BoardEditorQuill.jsx
import React, { useMemo } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import BoardCustomToolbar from "./BoardCustomToolbar"; // 툴바 컴포넌트 import

const BoardEditorQuill = ({ contentData, setContentData }) => {
  // 에디터의 사용할 기능(글꼴, 색상, 스타일 등)들을 모아놓은 항목들
  const formats = [
    "header", "size", "align",
    "bold", "italic", "underline", "strike",
    "color", "background",
    "list", "bullet", "indent",
    "image"
  ];

  // Quill에서 설정할 모듈: 툴바 container만 지정
  // useMemo: 성능 최적화를 위해 사용(렌더링할때 마다 modules 객체 생성 방지용)
  const modules = useMemo(() => ({
    toolbar: {
      container: "#toolbar", // 툴바 ID로 연결하여 설정함
    },
  }), []);

  return (
    <div>
      {/* 사용자 맞춤으로 만든 툴바 기능 모음집 (화면에 출력될 기능들) 연결함 */}
      <BoardCustomToolbar />

      {/* React Quill 텍스트 에디터 연결함 */}
      <ReactQuill
        style={{ height: "350px", margin: "4px" }}
        name="content"
        value={contentData}
        onChange={setContentData}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default BoardEditorQuill;
