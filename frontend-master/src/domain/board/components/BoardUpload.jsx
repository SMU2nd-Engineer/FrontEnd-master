import SelectBox from "@/components/SelectBox";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

// 게시글 등록 페이지
const BoardUpload = () => {
  const [ newBoard, setNewBoard ] = useState({ 
    category_idx: "",
    title: "",
    sdate: "",
    imageUrl: "",
    content: "",
  }); 

  const { category_idx, title, sdate, imageUrl, content } = newBoard;

  const navigate = useNavigate();

  // 사용자가 선택(입력)한 값 업데이트되어 화면에 표시 
  // ex) 카테고리 선택: category_idx: (4003)팝니다/ (4004)삽니다 
  const handleChange = (e) => {
    const { category_idx, title, value } = e.target;

    setNewBoard({
      ...newBoard,
      [category_idx]: value,
      [title]: value,
    });
  };

  // 게시글 등록 버튼
  const handleSubmit = (e) => {
    // 브라우저 페이지 새로고침 막기
    e.preventDefault();

    // 사용자가 선택한 모든 게시글 정보가 담긴 객체
    postBoard(newBoard)
      .then((response) => response.data)
      .then((result) => {
        console.log("결과: ", result);
        const idx = result.idx;
        // 등록 완료되면 게시판 홈페이지로 돌아가기
        navigate(`/board/list${idx}`, {replace: true});
      })
      // 에러 발생시 화면 출력되는 문구
      .catch((error) => console.error("Error:", error));
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