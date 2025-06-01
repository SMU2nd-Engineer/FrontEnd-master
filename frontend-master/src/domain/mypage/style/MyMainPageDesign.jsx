import styled from "styled-components";

/**
 * 마이페이지 메인 컨테이너
 */
export const MyMainContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-template-areas:
    " header header"
    " sell reviewAndrating"
    " peak reviewAndrating"
    " button button";
  width: auto;
  gap: 1rem;
  background-color: #fdfdfd;
  border: 1px solid #ddd;
  border-radius: 1rem;
  margin-top: 2rem;
  user-select: none;
`;

/**
 * 그리드 배열을 위한 구분 styled
 */
export const MyMainGridArea = styled.div`
  grid-area: ${(props) => props.area};
  margin: 1rem;
`;

/* --------------------------------------------------- */

/**
 * 사용자 이름 스타일
 */

export const MyMainName = styled.h2`
  font-weight: 600;
  font-size: 28px;
  display: flex;
  justify-content: center;
  color: #555;
  margin: 10px;
  padding: 10px;
  border-bottom: 2px solid #cfcfcf;
`;

/* --------------------------------------------------- */

/**
 * 판매 / 판매완료 등 구분 하기 위한 스타일
 */
export const SellOptionsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 1rem;
  color: #333;
`;

/**
 * 판매 / 판매 완료에 사용할 버튼 스타일
 */
export const SellOptionButton = styled.button`
  background: none;
  border: none;
  font-size: ${({ selected }) => (selected ? "1.1rem" : "1rem")};
  color: ${({ selected }) => (selected ? "#000" : "#666")};

  cursor: pointer;
  padding: 0;
  position: relative;
  width: 8rem;

  &:hover {
    text-decoration: underline;
  }
  &:active {
    border: none;
    outline: none;
  }
  &:focus {
    border: none;
    outline: none;
  }
`;

/**
 * 마이 메인 판매 상품 컨테이너
 */
export const SellContainer = styled.div`
  width: 100;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 1rem;
  gap: 1rem;
`;

/**
 * 상품 판매 중 구분자
 */
export const SellDividerText = styled.span`
  color: #999;
  margin: 0 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;

/**
 * 마이 메인 '더 보기' 컨테이너
 */
export const MoreCell = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

  a {
    text-decoration: none; // 밑줄 제거
    color: inherit; // 글자 색상 상속
    margin: 0 4px;
    &:hover {
      transform: scale(1.1);
      transition: all 0.2s ease-in-out;
    }
  }
`;

/**
 * 내 상품 스타일 헤더
 */
export const SellHedear = styled.h2`
  font-weight: 500;
  display: flex;
  justify-content: baseline;
  align-items: center;
  color: #9a8a8a;
  margin-left: 1rem;
`;
/* --------------------------------------------------- */

/**
 * 리뷰와 거래 후기 컨테이너
 */
export const RatingAndReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  grid-area: "reviewAndrating";
  align-items: center;
  margin-right: 30px;
  height: 97%;
`;

/**
 * 내 점수 헤더 스타일
 */
export const MyRatingName = styled.h3`
  margin: 10px;
  font-weight: 500;
  font-size: 22px;
  display: flex;
  justify-content: baseline;
  align-items: center;
  color: #9a8a8a;
`;

/**
 * 거래 후기 컨테이너
 */
export const TransactionReviewContainer = styled.div`
  width: 100;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 1rem;
  margin: 1rem;
`;

/**
 * 내 거래 후기 헤더 스타일
 */
export const TransactionReviewHedear = styled.h2`
  font-weight: 500;
  display: flex;
  justify-content: baseline;
  align-items: center;
  color: #9a8a8a;
`;

/**
 * 거래 리뷰 테이블 스타일
 */
export const TransactionReviewTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
`;

/**
 * 테이블 제목 스타일
 */
export const TransactionTableTh = styled.th`
  text-align: left;
  font-weight: bold;
  padding: 0.75rem 1rem;
  color: #222;
`;

/**
 * 테이블 내용 스타일
 */
export const TransactionTableTd = styled.td`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  color: #333;
  vertical-align: top;

  &:last-child {
    text-align: right;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
`;

/**
 * 마이 메인 '더 보기' 컨테이너
 */
export const MoreReview = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

/* ----------------------------------------------------- */

/**
 * 마이 찜 컨테이너
 */
export const MyPainPeakContainer = styled.div`
  width: 100;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 1rem;
`;

/**
 * 메인 찜 헤더
 */
export const MyPainPeakHeader = styled.h2`
  font-weight: 500;
  display: flex;
  justify-content: baseline;
  align-items: center;
  color: #9a8a8a;
`;

/**
 * 마이 메인 '더 보기' 컨테이너
 */
export const MorePeak = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  a {
    text-decoration: none; // 밑줄 제거
    color: inherit; // 글자 색상 상속
    margin: 0 4px;
    &:hover {
      transform: scale(1.1);
      transition: all 0.2s ease-in-out;
    }
  }
`;
