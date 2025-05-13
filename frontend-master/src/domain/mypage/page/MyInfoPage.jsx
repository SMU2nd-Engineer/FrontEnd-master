import React, { useEffect, useState } from "react";
import MyPageLink from "../components/MyPageLink";
import MyInfoPasswordCheck from "../components/MyInfoPasswordCheck";
import { myInfoCheckSocialLogin } from "../services/myInfoCheckSocialLogin";

export default function MyInfo() {
  // 소셜 로그인의 경우 비밀번호가 없으니 pass
  useEffect(() => {
    const checkSocial = myInfoCheckSocialLogin();
    if (checkSocial !== "regularLogin") {
      setIsMyInfoPasswordCheck(true);
    }
  }, []);

  const [isMyInfoPasswordCheck, setIsMyInfoPasswordCheck] = useState(false);
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
