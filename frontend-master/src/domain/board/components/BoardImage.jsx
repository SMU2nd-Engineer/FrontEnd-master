const BoardImage = ({ boardImageList, title , mode = 'all'}) => {
  // 기본 설정 URL 주소
  const BASE_URL = import.meta.env.VITE_BACK_API_IMG_URL;

  // 게시글 이미지 리스트가 없을 때 조건
  if (!boardImageList?.length) return <div className="board_null_image"/>;

  


};