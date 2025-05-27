import React, { useEffect, useState } from "react";
import MyPageLink from "../components/MyPageLink";
import MyInfoPasswordCheck from "../components/MyInfoPasswordCheck";
import MyInfoList from "../components/MyInfoList";
import { getMyPageData } from "../services/getMyPageDate";
import "@user/style/UserRegistrationPage.css";

export default function MyInfo() {
  // 소셜 로그인의 경우 비밀번호가 없으니 pass
  useEffect(() => {
    const checkSocialLogin = async () => {
      const whereSocial = await getMyPageData("CHECK_SOCIAL");
      if (whereSocial.socialLogin !== "regularLogin" && whereSocial !== null) {
        setIsSocialLogin(true); // 소셜 로그인 true
        setIsMyInfoPasswordCheck(true); // 비밀번호 체크 안 하도록
      }
    };
    checkSocialLogin();
  }, []);
  const [isMyInfoPasswordCheck, setIsMyInfoPasswordCheck] = useState(false);
  const [isSocialLogin, setIsSocialLogin] = useState(false);
  // console.log(isMyInfoPasswordCheck);
  return (
    <div>
      <div className="sticky-navbar">
        <MyPageLink />
      </div>
      <br />
      {!isMyInfoPasswordCheck ? (
        <MyInfoPasswordCheck
          setIsMyInfoPasswordCheck={setIsMyInfoPasswordCheck}
        />
      ) : (
        <MyInfoList isSocialLogin={isSocialLogin} /> // 소셜 로그인에 따라 보여주는 정보가 달라질것.
      )}
    </div>
  );
}
