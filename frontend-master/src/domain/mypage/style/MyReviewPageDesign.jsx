import React from "react";
import styled from "styled-components";

// import 명 이렇게 사용하시면 됩니다(경로는 각자 수정 필요!)
// import * as MyReview from "../style/MyReviewPageDesign";

export const ReviewPageMain = styled.div`
  color: #333;
  display: flex;
  gap: 20px;
  width: 100%;
  height: 700px;
  p {
    font-size: 24px;
    font-weight: bold;
    padding: 20px;
    text-align: center;
    color: #222;
    border-bottom: 1px solid #e0e0e0;
  }
`;

export const ReviewUserName = styled.div`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  width: 20%;
  align-items: center;
`;

export const ReviewPageLeft = styled.div`
  width: 50%;
`;
export const ReviewPageRight = styled.div`
  width: 30%;
`;

export const ReviewMyStars = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 30px;
  height: 20%;
  margin-top: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 -2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
`;

export const DetailTextReview = styled.div`
  height: 70%;
`;

export const DetailCheckReview = styled.div`
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 -2px 4px rgba(0, 0, 0, 0.05);
  margin: 20px auto 20px;
  max-width: 800px;
  height: 96%;
`;
export const CheckReviewMain = styled.div`
  h3 {
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
    color: #222;
    padding: 20px;
    border-bottom: 2px solid #cfcfcf;
  }
`;
export const DetailCheckReviewList = styled.table`
  thead {
    th {
      background-color: #f4f7fb;
      color: #555;
      text-align: center;
      padding: 12px 15px;
      font-size: 16px;
      border-bottom: 1px solid #ddd;
    }
  }
  tbody {
    tr {
      border-bottom: 1px solid #eee;
      transition: background-color 0.2s;
      &:hover {
        background-color: #f5f8fc;
        transform: scale(1.005);
      }
    }
    td {
      padding: 14px 15px;
      font-size: 15px;
      /* color: #161616; */
      vertical-align: top;
      &:last-child {
        color: #888;
        font-size: 14px;
        text-align: right;
      }
    }
  }
`;
export const DetailTextReviewMain = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 -2px 4px rgba(0, 0, 0, 0.05);
  p {
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 25px;
    color: #222;
    padding: 20px;
    border-bottom: 2px solid #cfcfcf;
  }
  a {
    display: block;
    text-align: right;
    margin-top: 20px;
    color: #007bff;
    font-weight: 500;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const DetailTextReviewList = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  thead {
    th {
      background-color: #f4f7fb;
      color: #555;
      text-align: center;
      padding: 12px 15px;
      font-size: 16px;
      border-bottom: 1px solid #ddd;
    }
  }
  tbody {
    tr {
      border-bottom: 1px solid #eee;
      transition: background-color 0.2s;
      &:hover {
        background-color: #f9fafc;
      }
    }
    td {
      padding: 14px 15px;
      font-size: 15px;
      color: #161616;
    }
  }
`;

export const DetailTextReviewArray = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const PaginationWrapper = styled.div`
  /* margin-top: auto; */
`;
