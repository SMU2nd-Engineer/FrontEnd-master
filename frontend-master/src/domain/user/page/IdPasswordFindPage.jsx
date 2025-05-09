import React, { useEffect, useReducer } from "react";
import Button from "../../../components/Button";
import { useParams } from "react-router-dom";
import userReducer from "../utils/userReducer";

export default function IdPasswordFindPage() {
  const initialState = {
    id: "",
    name: "",
    email: "",
  };
  const { type } = useParams();

  const reducer = userReducer;

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {};

  return (
    <div>
      {type === id ? (
        <>
          <h2>아이디 찾기</h2>
          <form action="">
            <label htmlFor="name">
              <input type="text" name="name" />
            </label>
            <label htmlFor="email">
              <input type="text" name="email" />
            </label>
            <Button text={"아이디 찾기"} onClick={handleChange} />
          </form>
        </>
      ) : (
        <>
          <form action="">
            <label htmlFor="id">
              <input type="text" name="id" onChange={""} />
            </label>
            <label htmlFor="name">
              <input type="text" name="name" />
            </label>
            <label htmlFor="email">
              <input type="text" name="email" />
            </label>
            <Button text={"비밀번호 찾기"} onClick={""} />
          </form>
        </>
      )}
    </div>
  );
}
