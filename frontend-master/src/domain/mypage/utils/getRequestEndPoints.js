export const MYPAGE_ENDPOINTS = Object.freeze({
  MY_MAIN_INFO: "getMyMainInfo", // 가장 최신 2개 찜 목록.
  MY_BOARD_LIST: "getMyBoardList", // 사용자 작성 게시판 정보.
  MY_COMMENT_LIST: "getMyCommentList", // 사용자 작성 댓글 정보.
  MY_BUY_LIST: "getMyBuyList", // 구매 내역 조회.
  MY_SELL_LIST: "getMySellList", // 판매 내역.
  MY_REVIEW_LIST: "getMyReviewList", // 마이페이지 리뷰 탭 정보 얻기.
  TOTAL_RATING: "myTotalRating", // 총 별점 점수 합.
  PEAK_LIST_INFO: "peakListInfo", // 마이페이지 찜 탭 전체 목록.
  USER_INFO: "getUserInfo", // 유저 정보(개인정보 탭).
  CHECK_SOCIAL: "checkSocial", // 소셜 로그인 확인.
  FAVORITE_CATEGORIES: "getCategory", // 관심사 카테고리 가져오기
  USER_FAVORITES: "userFavorites", // 사용자 관심사 가져오기
  MY_TRANSACTION_LIST: "getMyTransactionList", // 사용자 거래 내역 정보 가져오기
});
