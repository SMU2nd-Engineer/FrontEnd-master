import React, { useReducer } from "react";
// import Button from "@/components/Button";
import { useNavigate, useParams } from "react-router-dom";
import userReducer from "../utils/userReducer";
import {
  FindBox,
  FindHeading,
  FindForm,
  FindFormControl,
  FindLabel,
  FindInput,
  FindButton,
  CancelButton,
} from "../style/IdPasswordFindPageDesign";
import { useModalStore } from "@/store/useModalStore";
import { idFindService } from "../services/idFindService";
import { passwordFindService } from "../services/passwordFindService";

/**
 * get 방식으로 전달 받은 파라미터의 값에 따라서 아이디 비밀번호 찾기 페이지 표시
 * @returns 아이디 또는 비밀번호 페이지
 */
export default function IdPasswordFindPage() {
  const initialState = {
    id: "",
    name: "",
    email: "",
  };

  const navigate = useNavigate();
  const { type } = useParams();
  const [state, dispatch] = useReducer(userReducer, initialState);

  const openModal = useModalStore((state) => state.open);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_FIELD",
      payload: { [e.target.name]: e.target.value },
    });
  };

  const handleFind = async () => {
    try {
      if (type === "id") {
        const res = await idFindService({
          name: state.name,
          email: state.email,
        });
        navigate("/user/showfindid", { state: { findId: res.data } });
      } else {
        passwordFindService({
          id: state.id,
          name: state.name,
          email: state.email,
        });
        navigate("/user/changePassword", { state: { id: state.id } });
      }
    } catch (error) {
      console.error(error);
      await openModal("alert", {
        title: "오류",
        message: "정보를 찾을 수 없습니다. 입력 정보를 확인하세요.",
      });
    }
  };

  return (
    <FindBox>
      <FindHeading>
        {type === "id" ? "아이디 찾기" : "비밀번호 찾기"}
      </FindHeading>
      <FindForm onSubmit={(e) => e.preventDefault()}>
        {type === "password" && (
          <FindFormControl>
            <FindLabel>아이디</FindLabel>
            <FindInput name="id" value={state.id} onChange={handleChange} />
          </FindFormControl>
        )}

        <FindFormControl>
          <FindLabel>이름</FindLabel>
          <FindInput name="name" value={state.name} onChange={handleChange} />
        </FindFormControl>

        <FindFormControl>
          <FindLabel>이메일</FindLabel>
          <FindInput name="email" value={state.email} onChange={handleChange} />
        </FindFormControl>

        <FindButton onClick={handleFind}>
          {type === "id" ? "아이디 찾기" : "비밀번호 찾기"}
        </FindButton>

        <CancelButton onClick={() => navigate("/user/login")}>
          로그인 화면으로 돌아가기
        </CancelButton>
      </FindForm>
    </FindBox>
  );
}
