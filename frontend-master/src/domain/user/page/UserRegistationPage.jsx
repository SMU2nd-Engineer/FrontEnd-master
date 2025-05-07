import React, { useReducer, useState } from "react";
import Button from "../components/Button";
import Address from "../components/Address";

/**
 * id
 * name
 * password
 * passwordCheck
 * address : 주소 입력
 * @returns
 */

export default function UserRegistationPage() {
  //   const [id, setId] = useState("");
  //   const [name, setName] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [passwordCheck, setPasswordCheck] = useState("");
  //   const [nickName, setNickName] = useState("");
  //   const [address, setAddress] = useState("");
  //   const [detailAddress, setDetailAddress] = useState("");

  // 찾아보다가 reducer 방식이 있어서 고쳐봄
  //   const [form, setForm] = useState({
  //     id: "",
  //     name: "",
  //     password: "",
  //     passwordCehck: "",
  //     nickName: "",
  //   });

  const initialState = {
    id: "",
    name: "",
    password: "",
    passwordCheck: "",
    nickName: "",
    address: "",
    detailAddress: "",
    emailLocal: "",
    emailDomain: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_FIELD":
        return {
          ...state,
          [action.name]: action.value,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // input 창에서 onChange로 같은 단어를 매번 다르게 쓸려니 어려워 찾아본 결과 함수로 모아서 쓰면 된다.
  // 이벤트 발생할 때 이름과 값만 가져오면 되므로 어렵지 않다.
  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_FIELD",
      name: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="">
            아이디{" "}
            <input
              type="text"
              name="id"
              value={state.id}
              onChange={() => {
                handleChange;
              }}
            />
          </label>
        </div>
        <div>
          <label htmlFor="">
            이름{" "}
            <input
              type="text"
              name="name"
              value={state.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="">
            패스워드{" "}
            <input
              type="password"
              name="password"
              value={state.password}
              onChange={() => {
                handleChange;
              }}
            />
          </label>
        </div>
        <div>
          <label htmlFor="">
            패스워드확인{" "}
            <input
              type="password"
              name="passwordCheck"
              value={state.passwordCheck}
              onChange={() => {
                handleChange;
              }}
            />
          </label>
        </div>
        <div>
          <label htmlFor="">
            닉네임{" "}
            <input
              type="text"
              name="nickName"
              value={state.nickName}
              onChange={() => {
                handleChange;
              }}
            />
          </label>
        </div>
        <Address state={state} dispatch={dispatch} />
        {/* 이메일 넣을 곳 */}
      </form>
      <Button text={"취소"} />
      <Button text={"가입"} />
    </div>
  );
}
