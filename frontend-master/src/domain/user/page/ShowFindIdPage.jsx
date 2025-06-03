import React from "react";
import { useLocation } from "react-router-dom";
import {
  BackButton,
  EmphasizedId,
  Header,
  MainContainer,
  Message,
} from "../style/ShowFindIdPageDesign";

export default function ShowFindIdPage() {
  const location = useLocation();
  const findId = location.state?.findId;
  return (
    <MainContainer>
      <Header>아이디 찾기</Header>
      {findId.socialLogin !== "regularLogin" ? (
        <Message>소셜 로그인 계정입니다. 소셜 로그인 해주세요.</Message>
      ) : (
        <Message>
          당신의 아이디는 : <EmphasizedId>{findId?.id}</EmphasizedId>
        </Message>
      )}
      <BackButton
        onClick={() => {
          window.location.href = "/user/login";
        }}
      >
        로그인 페이지로 돌아가기
      </BackButton>
    </MainContainer>
  );
}
