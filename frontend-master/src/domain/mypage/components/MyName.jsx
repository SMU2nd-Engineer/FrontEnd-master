import React, { useEffect, useState } from "react";
import { getMyPageData } from "../services/getMyPageDate";
import { MyMainName } from "../style/MyMainPageDesign";

export default function MyName() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const getUserName = async () => {
      const userInfo = await getMyPageData("USER_INFO");
      setUserName(userInfo.name);
    };
    getUserName();
  }, []);
  return <MyMainName>{userName}님</MyMainName>;
}
