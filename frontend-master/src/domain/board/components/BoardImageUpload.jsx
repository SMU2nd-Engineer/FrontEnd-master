import SelectBox from "@/components/SelectBox";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

// 게시글 이미지 등록 페이지
const BoardImageUpload = ({ boardUploadImage, setBoardUploadImae }) => {
  const [ boardPreviewUrl, setBoardPreviewUrl ] = useState([]);

  const navigate = useNavigate();

  // 사용자가 이미지 선택한 업데이트되어 화면에 표시 
  const handleFileChange = (e) => {
    // boardFiles로 된 것을 찾으면 이벤트가 발생 
    const boardFiles = e.target.boardFiles;
    if (boardFiles) {
      const boardNewFiles = Array.from(boardFiles).slice(0, 10);

      // 파일 상태 업데이트
      const boardUpdateFiles = [...boardUploadImage, ...boardNewFiles].slice(0, 10);
      setBoardUploadImae(boardNewFiles);
      
      // 미리보기 URL 생성 
      // - 게시글 이미지 등록 할때 사용자가 미리 사진을 확인해야해서 설정
      boardNewFiles.forEach((file) => {
        // 파일 읽어오기
        const boardReader = new FileReader();
        // 파일 읽어오면 실행
        boardReader.onloadend = () => {
          const boardImage_Url = boardReader.result;
          // 현재 상태값 가져오기
          setBoardPreviewUrl((prev) => {
            const boardUpdateUrls = [...prev, boardImage_Url].slice(0, 10);
            return boardUpdateUrls;
          });
        };
        boardReader.readAsDataURL(boardFiles);
      });            
    }
  };

  return (
    <>
      <p className="pagecategory"></p>

      <form onSubmit={handleSubmit}>

      {/* form-row: 요소들 한줄로 출력 */}

      <div className="form-row">
        <label htmlFor="category_idx">카테고리</label>
        <SelectBox 
        id="category"
        name="category" 
        category_idx={getCategoryIdx("BOARD")}
        handleChange={(e) => setNewBoard(e.target.value)}/>


        
      </div>  







      </form>

    </>
  );

}

export default BoardImageUpload;