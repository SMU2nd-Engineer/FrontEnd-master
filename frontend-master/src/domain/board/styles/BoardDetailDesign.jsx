import styled from "styled-components";

export const BoardDetailMain = styled.div`
  max-width: 100%;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 13px;
`;
export const BoardDetailTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CategoryAndTitle = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 20px;
  margin-bottom: 20px;
  max-height: 45px;
  .category {
    font-size: 28px;
    color: #888;
    font-weight: 500;
  }
  .title {
    font-size: 28px;
    font-weight: bold;
    color: #222;
  }
`;

export const BoardDetailMiddle = styled.div`
  padding: 12px 0;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 50px;
  img {
    max-width: 100%;
    border-radius: 8px;
  }
`;
export const BoardDetailBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 15px;
`;

export const UserAuth = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 25px;
  /* padding: 16px 24px; */
  .author {
    display: flex;
    align-items: center;
    font-size: 13px;
    color: #555;
    gap: 4px;
  }
  .brn-group {
    button {
      width: 75px;
    }
  }
  .meta {
    display: flex;
    flex-direction: column;
    margin: 10px;
    gap: 4px;

    button {
      font-size: 13px;
      background-color: #f0b8b8;
      border: none;
      border-radius: 6px;
      color: white;
      cursor: pointer;
      height: 22px;
      width: 65px;
      &:hover {
        background-color: #ec7d7d;
      }
    }

    p {
      margin: 0;
      font-size: 12px;
      color: #888;
    }
  }
`;

// 댓글
export const CommentMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

// 댓글 입력창 영역
export const CommentSubmit = styled.div`
  display: flex;
  gap: 12px;

  textarea {
    width: 90%;
    height: 20px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
    resize: none;
    font-size: 14px;
    font-family: inherit;

    &:focus {
      outline: none;
      border-color: #999;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
    }
  }

  button {
    align-self: flex-end;
    font-size: 14px;
    border-radius: 6px;
    border: none;
    background-color: #f0b8b8;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.2s;
    height: 46px;

    &:hover {
      background-color: #ec7d7d;
    }
  }
`;

// 댓글 목록 영역
export const CommentList = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  li {
    padding: 16px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
    position: relative;
  }

  li p {
    margin: 15px 0;
    font-size: 14px;
    color: #333;
    strong {
      font-size: 17px;
    }
  }

  li strong {
    font-size: 13px;
    color: #666;
  }

  li button {
    position: absolute;
    top: 12px;
    right: 12px;
    background: transparent;
    color: #c00;
    border: none;
    font-size: 12px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  > p {
    color: #888;
    font-size: 14px;
  }
`;
