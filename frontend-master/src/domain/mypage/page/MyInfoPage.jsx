import React, { useEffect, useState } from "react";
import MyPageLink from "../components/MyPageLink";
import MyInfoPasswordCheck from "../components/MyInfoPasswordCheck";
import MyInfoList from "../components/MyInfoList";
import { getMyPageData } from "../services/getMyPageDate";

import * as Nav from "../style/MyPageNavDesign";

export default function MyInfo() {
  useEffect(() => {
    const checkSocialLogin = async () => {
      const whereSocial = await getMyPageData("CHECK_SOCIAL");
      if (whereSocial.socialLogin !== "regularLogin" && whereSocial !== null) {
        setIsSocialLogin(true);
        setIsMyInfoPasswordCheck(true);
      }
    };
    checkSocialLogin();
  }, []);
  const [isMyInfoPasswordCheck, setIsMyInfoPasswordCheck] = useState(false);
  const [isSocialLogin, setIsSocialLogin] = useState(false);
  return (
    <div>
      <Nav.StickyNavbar>
        <MyPageLink />
      </Nav.StickyNavbar>
      <br />
      {!isMyInfoPasswordCheck ? (
        <MyInfoPasswordCheck
          setIsMyInfoPasswordCheck={setIsMyInfoPasswordCheck}
        />
      ) : (
        <MyInfoList isSocialLogin={isSocialLogin} />
      )}
    </div>
  );
}
