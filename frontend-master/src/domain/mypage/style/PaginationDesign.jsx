import styled from "styled-components";

export const PaginationWrapper = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    gap: 0.5rem;
  }

  .pagination li {
    border-radius: 50%; /* 완전한 둥근 형태 */
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .pagination li a {
    /* display: block; */
    padding: 8px 14px;
    border: none; /* 테두리 제거 */
    background-color: transparent; /* 배경 제거 */
    color: #9a8a8a;
    text-decoration: none;
    font-weight: 500;
    cursor: pointer;
    border-radius: 999px;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  /* 마우스 올렸을 때 스타일 */
  .pagination li:hover a {
    background-color: #f0b8b8;
    color: white;
  }

  /* 현재 선택된 페이지 (active) */
  .pagination .active a {
    background-color: #f0b8b8;
    color: white;
  }

  /* 비활성화 상태 */
  .pagination .disabled a {
    color: #ccc;
    cursor: not-allowed;
  }

  /* 이전/다음도 동일 스타일 적용 (선택사항) */
  .pagination .previous a,
  .pagination .next a {
    color: #9a8a8a;
  }

  .pagination .previous:hover a,
  .pagination .next:hover a {
    background-color: #f0b8b8;
    color: white;
  }
`;
