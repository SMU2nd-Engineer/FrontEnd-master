import React, { useReducer } from "react";
import Button from "../components/Button";
import Address from "../components/Address";
import { duplicateCheckService } from "../services/DuplicateCheckService";

/**
 * id
 * name
 * password
 * passwordCheck
 * address : 주소 입력
 * detailAddress : 상세 주소
 * emailLocal : 이메일 앞 부분
 * emailDomain : 이메일 뒷 부분
 * isIdCheck : 아이디 중복 체크 여부
 * isNickNameCheck : 닉네임 중복 체크 여부
 * isIdCheckComplete : 아이디 중복 체크 완료
 * isNickNameCheckComplete : 닉네임 중복 체크 완료
 * @return : 회원 가입 폼
 */

export default function UserRegistrationPage() {
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
    isIdCheck: false,
    isNickNameCheck: false,
    isIdCheckComplete: false,
    isNickNameCheckComplete: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_FIELD":
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // input 창에서 onChange로 같은 단어를 매번 다르게 쓸려니 어려워 찾아본 결과 함수로 모아서 쓰면 된다.
  // 이벤트 발생할 때 이름과 값만 가져오면 되므로 어렵지 않다.
  const handleChange = (e) => {
    if (e.target.name === "id") {
      dispatch({
        type: "CHANGE_FIELD",
        payload: { [e.target.name]: e.target.value },
      });
    }
    dispatch({
      type: "CHANGE_FIELD",
      payload: { [e.target.name]: e.target.value },
    });
  };

  console.log({ ...state });

  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="id">
            아이디
            <input
              type="text"
              name="id"
              value={state.id}
              onChange={handleChange}
            />
          </label>
          {state.id.length > 0 && !state.isIdCheck && (
            <p>중복 체크 해주세요.</p>
          )}
          {state.id.length > 0 && state.isIdCheck && <p>사용 가능 합니다.</p>}
          <Button
            text={"중복 체크"}
            onClick={() => {
              duplicateCheckService(state.id, dispatch, "id");
            }}
          />
        </div>
        <div>
          <label htmlFor="name">
            이름
            <input
              type="text"
              name="name"
              value={state.name}
              onChange={handleChange}
            />
            {!state.isIdCheck ? (
              <p>아이디 중복입니다. 새로운 아이디를 입력해주세요</p>
            ) : null}
          </label>
        </div>
        <div>
          <label htmlFor="password">
            패스워드
            <input
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="passwordCheck">
            패스워드확인
            <input
              type="password"
              name="passwordCheck"
              value={state.passwordCheck}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="nickName">
            닉네임
            <input
              type="text"
              name="nickName"
              value={state.nickName}
              onChange={handleChange}
            />
          </label>
          <Button
            text={"중복 체크"}
            onClick={() => {
              duplicateCheckService(state.id, dispatch, "nickName");
            }}
          />
        </div>
        <Address state={state} dispatch={dispatch} />
        {/* 이메일 넣을 곳 */}
      </form>
      <Button text={"취소"} />
      {state.isIdCheckComplete && state.isNickNameCheckComplete ? (
        <Button text={"가입"} onClick={""} />
      ) : (
        <Button text={"가입"} />
      )}
    </div>
  );
}
