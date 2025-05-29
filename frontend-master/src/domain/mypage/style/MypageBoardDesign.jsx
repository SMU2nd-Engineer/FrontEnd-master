import styled from "styled-components";

export const MyBoardContainer = styled.div`
  width: 100;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

/* 게시글 컨테이너 */
export const MyBoardContentsContainer = styled.div`
  width: 100;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 1rem;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

/* 댓글 컨테이너 */
export const MyBoardCommentContainer = styled.div`
  width: 100;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 1rem;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

/**
 * 게시판 및 댓글 테이블 스타일
 */
export const ContentsAndCommentTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
`;

/**
 * 테이블 제목 스타일
 */
export const ContentsAndCommentTableTh = styled.th`
  text-align: left;
  font-weight: bold;
  padding: 0.75rem 1rem;
  color: #222;
`;

/**
 * 테이블 제목 날짜용 스타일
 */
export const ContentsAndCommentTableDayTh = styled.th`
  text-align: right;
  font-weight: bold;
  padding: 0.75rem 1rem;
  color: #222;
`;

/**
 * 테이블 내용 스타일
 */
export const ContentsAndCommentTableTd = styled.td`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  color: #333;
  vertical-align: top;
  text-align: left;

  &:last-child {
    text-align: right;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &:hover {
    cursor: pointer;
  }
`;
