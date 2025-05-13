import React, { useEffect, useState } from "react";
import MyPageLink from "../components/MyPageLink";
import MyInfoPasswordCheck from "../components/MyInfoPasswordCheck";
import { myInfoCheckSocialLogin } from "../services/myInfoCheckSocialLogin";
import MyInfoList from "../components/MyInfoList";

export default function MyInfo() {
  // 소셜 로그인의 경우 비밀번호가 없으니 pass
  useEffect(() => {
    const checkSocialLogin = async () => {
      const whereSocial = await myInfoCheckSocialLogin();
      console.log(whereSocial);
      if (whereSocial !== "regularLogin" && whereSocial !== null) {
        setIsMyInfoPasswordCheck(true);
      }
    };
    checkSocialLogin();
  }, []);
  const [isMyInfoPasswordCheck, setIsMyInfoPasswordCheck] = useState(false);
  // console.log(isMyInfoPasswordCheck);
  return (
    <div>
      <MyPageLink />
      <p>개인정보수정</p>
      {!isMyInfoPasswordCheck ? (
        <MyInfoPasswordCheck
          setIsMyInfoPasswordCheck={setIsMyInfoPasswordCheck}
        />
      ) : (
        <MyInfoList /> // 소셜 로그인에 따라 보여주는 정보가 달라질것.
      )}
    </div>
  );
}
