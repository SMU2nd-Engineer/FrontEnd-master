import React, { useEffect, useReducer } from "react";
import Button from "../../../components/Button";
import Address from "../components/Address";
import RegistrationEmail from "../components/RegistrationEmail";
import userReducer from "../utils/userReducer";
import { duplicateCheckService } from "../services/duplicateCheckService";
import regitrationService from "../services/registrationService";

/**
 * id : 아이디
 * name : 이름
 * password : 비밀번호
 * passwordCheck : 비밀 번호 확인
 * address : 주소 입력
 * detailAddress : 상세 주소
 * emailLocal : 이메일 앞 부분
 * emailDomain : 이메일 뒷 부분
 * isIdCheck : 아이디 중복 체크 여부
 * isNickNameCheck : 닉네임 중복 체크 여부
 * isSamePassword : 비밀 번호 & 비밀 번호 확인 모두 일치하는지 체크 여부
 * isSocialLogin : 소셜 로그인 여부
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
    isSamePassword: false,
    isSocialLogin: false,
    socialProvider: "",
  };

  const reducer = userReducer;

  const [state, dispatch] = useReducer(reducer, initialState);

  // input 창에서 onChange로 같은 단어를 매번 다르게 쓸려니 어려워 찾아본 결과 함수로 모아서 쓰면 된다.
  // 이벤트 발생할 때 이름과 값만 가져오면 되므로 어렵지 않다.
  const handleChange = (e) => {
    if (e.target.name === "id") {
      dispatch({
        type: "CHANGE_FIELD",
        payload: { [e.target.name]: e.target.value, isIdCheck: false },
      });
    }
    if (e.target.name === "nickName") {
      dispatch({
        type: "CHANGE_FIELD",
        payload: { [e.target.name]: e.target.value, isNickNameCheck: false },
      });
    }
    dispatch({
      type: "CHANGE_FIELD",
      payload: { [e.target.name]: e.target.value },
    });
  };

  useEffect(() => {
    dispatch({
      type: "CHANGE_FIELD",
      payload: {
        isSamePassword:
          state.password === state.passwordCheck &&
          state.password.length &&
          state.passwordCheck.length > 0,
      },
    });
  }, [state.password, state.passwordCheck]);

  useEffect(() => {
    const socialId = sessionStorage.getItem("socialId");
    const socialProvider = sessionStorage.getItem("provider");
    if (state.socialId !== "") {
      dispatch({
        type: "CHANGE_FIELD",
        payload: {
          id: socialId,
          isIdCheck: true,
          isSocialLogin: true,
          socialProvider: socialProvider,
          isSamePassword: true,
        },
      });
    }
  }, []);

  console.log({ ...state });

  // 회원 가입 등록 버튼 작동 비밀 번호 동일할 경우만 진행 아닐 경우 안내 창 이동

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
              readOnly={state.isSocialLogin}
            />
          </label>
        </div>
        {!state.isSocialLogin && (
          <>
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
          </>
        )}

        <div>
          <label htmlFor="name">
            이름
            <input
              type="text"
              name="name"
              value={state.name}
              onChange={handleChange}
            />
          </label>
        </div>
        {!state.isSocialLogin && (
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
            <label htmlFor="passwordCheck">
              패스워드확인
              <input
                type="password"
                name="passwordCheck"
                value={state.passwordCheck}
                onChange={handleChange}
              />
            </label>
            {state.passwordCheck.length > 0 && !state.isSamePassword && (
              <p>입력한 비밀 번호가 다릅니다.</p>
            )}
            {state.passwordCheck.length > 0 && state.isSamePassword && (
              <p>비밀번호가 일치 합니다.</p>
            )}
          </div>
        )}
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
          {state.nickName.length > 0 && !state.isNickNameCheck && (
            <p>중복 체크 해주세요.</p>
          )}
          {state.nickName.length > 0 && state.isNickNameCheck && (
            <p>사용 가능 합니다.</p>
          )}
          <Button
            text={"중복 체크"}
            onClick={() => {
              duplicateCheckService(state.nickName, dispatch, "nickName");
            }}
          />
        </div>
        <Address state={state} dispatch={dispatch} />
        <RegistrationEmail state={state} dispatch={dispatch} />
      </form>
      <Button
        text={"취소"}
        onClick={() => {
          window.location.href = "/user/login";
        }}
      />

      <Button
        text={"가입"}
        onClick={() => {
          regitrationService(state);
        }}
        disabled={
          !(state.isIdCheck && state.isNickNameCheck && state.isSamePassword)
        }
      />
    </div>
  );
}
