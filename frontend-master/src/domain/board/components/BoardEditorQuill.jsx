import React, { useMemo } from "react";
import ReactQuill, {Quill} from "react-quill";
import "react-quill/dist/quill.snow.css";
import BoardCustomToolbar from "./BoardCustomToolbar"; // 툴바 컴포넌트 import
import { ImageActions } from '@xeger/quill-image-actions';
import { ImageFormats } from '@xeger/quill-image-formats';

// quill 이미지 모듈 등록
// 이미지 삭제, 정렬, 팝업 기능, 스타일 속성 등 확장
Quill.register('modules/imageActions', ImageActions);
Quill.register('modules/imageFormats', ImageFormats);

const BoardEditorQuill = ({ contentData, setContentData }) => {
  // 에디터의 사용할 기능(글꼴, 색상, 스타일 등)들을 모아놓은 항목들
  const formats = [
    "header",
    "size",
    "align",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "list",
    "bullet",
    "indent",
    "image",
    "height",
    "width"
  ];

  // 최대 파일 크기 설정 (예: 2MB)
  const MAX_IMAGE_SIZE = 2 * 1024 * 1024; // 2MB

  function imageHandler() {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (!file) return;

      // 용량 체크
      if (file.size > MAX_IMAGE_SIZE) {
        alert('이미지 크기는 최대 2MB까지 허용됩니다.');
        return;
      }

      // base64로 인코딩하여 삽입 (또는 서버 업로드)
      const reader = new FileReader();
      reader.onload = () => {
        const range = this.quill.getSelection(true);
        this.quill.insertEmbed(range.index, 'image', reader.result);
      };
      reader.readAsDataURL(file);
    };
  }

  // Quill에서 설정할 모듈: 툴바 container만 지정
  // useMemo: 성능 최적화를 위해 사용(렌더링할때 마다 modules 객체 생성 방지용)
  const modules = useMemo(
    () => ({
      // quill 이미지 사이즈 조절(높이, 넓이) 하는 모듈
      imageActions: {},
      imageFormats: {},
      toolbar: {
        container: "#toolbar", // 툴바 ID로 연결하여 설정함    
        handlers: {
          image: imageHandler,
        },
      },

    }),
    []
  );

  return (
    <div style={{ marginTop: "16px" }}>
      <div
        style={{
          backgroundColor: "#f9fafb",
          border: "2px solid #e5e7eb",
          borderRadius: "12px 12px 0 0",
          padding: "12px 16px",
          fontWeight: "600",
          color: "#ec7d7d",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "1.1rem",
        }}
      >
        ✏️ 글을 자유롭게 써보세요!
      </div>
      <div
        style={{
          border: "2px solid #e5e7eb",
          borderTop: "none",
          borderRadius: "0 0 12px 12px",
          overflow: "hidden",
          boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
        }}
      >
        {/* 사용자 맞춤으로 만든 툴바 기능 모음집 (화면에 출력될 기능들) 연결함 */}
        <BoardCustomToolbar />

        {/* React Quill 텍스트 에디터 연결함 */}
        <ReactQuill
          style={{
            height: "350px",
            backgroundColor: "#ffffff",
            border: "none",
            fontFamily: "'Pretendard', sans-serif",
            fontSize: "16px",
            padding: "0 8px",
          }}
          name="content"
          value={contentData}
          onChange={setContentData}
          modules={modules}
          formats={formats}
          theme="snow"
        />
      </div>
    </div>
  );
};

export default BoardEditorQuill;
