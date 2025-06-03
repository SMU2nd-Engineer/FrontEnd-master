import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getBoardDetail } from "../services/boardService";
import BoardSubmitPage from "../page/BoardSubmitPage";
import usePreventBackNavigation from "@/hooks/usePreventBackNavigation";

// 백엔드에서 받은 이미지 저장경로를 상세페이지에서 보이게 설정하는 함수
// 여러개의 이미지를 순서에 따라 넣음
function pushImgSrc(html, getBoardImageUrls) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const boardImgTags = doc.querySelectorAll("img");

  boardImgTags.forEach((img, index) => {
    img.setAttribute("src", getBoardImageUrls[index] || ""); // 순서대로 적용
  });

  return doc.body.innerHTML;
}

// 등록 완료하고 상세페이지로 이동 후 수정버튼 누르면 등록페이지 틀과 같은
// 다시 등록된 게시글 내용을 불러와서 수정하는 컴포넌트
const BoardEdit = () => {
  // 게시글의 idx(순번)를 이용해서 게시글 내용을 가져오기 위해 idx값을 저장
  // 이름은 id로 되어 있음
  const { id } = useParams();
  // 상세페이지 게시글 전체 수정하는 값
  const [updateContentsData, setUpdateContentsData] = useState({
    category_idx: "",
    title: "",
    content: "",
  });

  // 뒤로가기 방지 hook 사용
  usePreventBackNavigation();

  // idx 값이 변하면 게시글 내용을 계속 불러옴
  useEffect(() => {
    // 게시판 등록페이지 등록 데이터 가져오는 것
    getBoardDetail(id) // API 호출
      .then((response) => {
        //setUpdateContentsData(response.data); // 받아온 등록 데이터 상태에 저장

        // 이미지 URL 배열을 detailImageList에서 꺼내기
        const imageUrls = response.data.detailImageList.map(
          (item) => item.image_url
        );

        // pushImgSrc 함수를 호출 시 두 번째 인자로 imageUrls 넣기
        const processedContent = pushImgSrc(response.data.content, imageUrls);

        // 상태에 저장 후 렌더링
        setUpdateContentsData({
          ...response.data,
          content: processedContent,
        });
      })
      .catch((error) => console.error(error));
  }, [id]);

  // 저장된 값이 없을 경우의 조건: 아래 문구 출력
  if (!updateContentsData) return <p>Loading...</p>;

  // 화면에 표시될 내용
  return (
    <div className="new_board_update">
      {/* updateContentsData: 등록페이지에 불러온 id를 이용해서 원하는 
                            게시글 데이터 불러와서 넘겨주기 위해 설정 
        isModify: 수정모드인걸 알려주기 위해 사용 */}
      <BoardSubmitPage
        updateContentsData={updateContentsData}
        isModify={true}
        id={id}
      />
    </div>
  );
};

export default BoardEdit;
