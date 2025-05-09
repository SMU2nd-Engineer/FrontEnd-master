import React, { useEffect, useReducer } from "react";
import Button from "../../../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import userReducer from "../utils/userReducer";
import idPasswordFindService from "../services/idPasswordFindService";

export default function IdPasswordFindPage() {
  const initialState = {
    id: "",
    name: "",
    email: "",
  };

  const navigate = useNavigate();

  const { type } = useParams();

  const reducer = userReducer;

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_FIELD",
      payload: { [e.target.name]: e.target.value },
    });
  };

  return (
    <div>
      {type === "id" ? (
        <>
          <h2>아이디 찾기</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="name">
              이름 :
              <input
                type="text"
                name="name"
                value={state.name}
                onChange={handleChange}
              />
            </label>
            비밀 번호:
            <label htmlFor="email">
              <input
                type="text"
                name="email"
                value={state.email}
                onChange={handleChange}
              />
            </label>
            <Button
              text={"아이디 찾기"}
              onClick={() => {
                idPasswordFindService(...state, navigate);
              }}
              type={"submit"}
            />
          </form>
        </>
      ) : (
        <>
          <h2>비밀번호 찾기 찾기</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="id">
              아이디 :
              <input
                type="text"
                name="id"
                onChange={handleChange}
                value={state.id}
              />
            </label>
            이름 :
            <label htmlFor="name">
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={state.name}
              />
            </label>
            비밀 번호 :
            <label htmlFor="email">
              <input
                type="text"
                name="email"
                onChange={handleChange}
                value={state.email}
              />
            </label>
            <Button
              text={"비밀번호 찾기"}
              onClick={() => {
                idPasswordFindService(...state, navigate);
              }}
              type={"submit"}
            />
          </form>
        </>
      )}
      <Button
        text={"로그인 화면으로 돌아가기"}
        onClick={() => {
          window.location.href = "/user/login";
        }}
      />
    </div>
  );
}
