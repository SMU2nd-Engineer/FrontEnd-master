import Button from "@/components/Button";
import React, { useEffect, useReducer, useState } from "react";
import { getUserInfo } from "../services/getUserInfo";
import userReducer from "@user/utils/userReducer";
import Address from "@user/components/Address";
import RegistrationEmail from "@user/components/RegistrationEmail";
import { duplicateCheckService } from "@user/services/duplicateCheckService";
import { useNavigate } from "react-router-dom";
import { updateUserInfo } from "../services/updateUserInfo";

export default function MyInfoList({ isSocialLogin }) {
  // 필요한 데이터 설정
  const initialState = {
    name: "",
    password: "",
    passwordCheck: "",
    nickName: "",
    address: "",
    detailAddress: "",
    emailLocal: "",
    emailDomain: "",
    isNickNameCheck: false,
    isSamePassword: false,
  };
  // 리듀서 설정
  const [state, dispatch] = useReducer(userReducer, initialState);
  // 네이게이트 설정
  const navigate = useNavigate();
  // 기존 닉네임 저장하여 닉네임 변화 확인하기
  const [existingNickname, setExistingNickname] = useState("");

  // 입력폼 변화 캐치
  const handleChange = (e) => {
    // 중복 구조 개선
    const { name, value } = e.target;
    const payload = { [name]: value };

    if (name === "nickName") {
      payload.isNickNameCheck = false;
    }

    dispatch({ type: "CHANGE_FIELD", payload });
  };

  // 비밀번호 동일한 것을 체크하기 위한 useEffect
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

  // 회원 정보 가져오기
  useEffect(() => {
    const getUserInfoByToken = async () => {
      const userInfo = await getUserInfo();
      console.log(userInfo);
      // 가져온 정보에서 주소와 이메일 입력 폼에 맞게 분리 함수 호출
      const editUserInfo = userInfoSplit(userInfo);
      dispatch({
        type: "CHANGE_FIELD",
        payload: editUserInfo,
      });
      setExistingNickname(editUserInfo.nickName); // 기존 닉네임 저장
    };
    getUserInfoByToken();
  }, []);

  /**
   * 이메일, 주소 분리 함수
   * @param {Object} userInfo
   * @returns 분리된 주소가 포함된 userInfo
   */
  const userInfoSplit = (userInfo) => {
    // 괄호로 나눈다. ex: '도로명주소 (지번)' 나뉘고 나머지: 상세주소
    const fullAddress = userInfo.address ?? "";
    // 정규 표현식으로 나누기
    const addressMatch = fullAddress.match(/^(.*?)\)\s*(.*)$/);

    // 분리가 안되면 기존 주소를 사용하기 위하여 미리 선언
    let address = fullAddress;
    let detailAddress = "";

    if (addressMatch) {
      // Match의 경우 전체 값이 0 번에 위치하여 1번부터 사용
      address = addressMatch[1] + ")";
      detailAddress = addressMatch[2];
    }

    // 이메일 분리하기 - 배열 구조 분해 할당, 오류 방지 위하여 빈칸 넣기
    const [emailLocal = "", emailDomain = ""] = (userInfo.email ?? "").split(
      "@"
    );

    return {
      ...userInfo,
      address: address.trim(),
      detailAddress: detailAddress.trim(),
      emailLocal: emailLocal,
      emailDomain: emailDomain.trim(),
    };
  };

  return (
    <div>
      <h1>개인 정보 페이지</h1>
      <br />
      <label htmlFor="name">
        이름
        <input
          type="text"
          name="name"
          value={state.name ?? ""}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="nickName">
        닉네임
        <input
          type="text"
          name="nickName"
          value={state.nickName ?? ""}
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
          console.log("새롭운 닉네임 : ", state.nickName);
          console.log(" 기존 닉네임 : ", existingNickname);
          if (state.nickName === existingNickname) {
            dispatch({
              // 기존과 동일하면 디스패치로 변경
              type: "CHANGE_FIELD",
              payload: { isNickNameCheck: true },
            });
          } else {
            duplicateCheckService(state.nickName, dispatch, "nickName");
          }
        }}
      />
      {!isSocialLogin && (
        <>
          <label htmlFor="password">
            패스워드
            <input
              type="password"
              name="password"
              value={state.password ?? ""}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="passwordCheck">
            패스워드확인
            <input
              type="password"
              name="passwordCheck"
              value={state.passwordCheck ?? ""}
              onChange={handleChange}
            />
          </label>
          {state.passwordCheck.length > 0 && !state.isSamePassword && (
            <p>입력한 비밀 번호가 다릅니다.</p>
          )}
          {state.passwordCheck.length > 0 && state.isSamePassword && (
            <p>비밀번호가 일치 합니다.</p>
          )}
        </>
      )}
      <Address state={state} dispatch={dispatch} />
      <RegistrationEmail state={state} dispatch={dispatch} />
      <Button
        text={"취소"}
        onClick={() => {
          navigate("/mypage/main");
        }}
      />
      <Button
        text={"수정하기"}
        onClick={() => {
          updateUserInfo(state);
          alert("개인 정보가 업데이트 되었습니다.");
          navigate("/mypage/main");
        }}
        disabled={
          !(state.isNickNameCheck && (isSocialLogin || state.isSamePassword))
        }
      />
    </div>
  );
}
