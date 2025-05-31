import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function HomePage() {
  const [homePageInfo, setHomePageInfo] = useState({});

  // 로그인 페이지로 이동할 경우 불러올 정보 가져오기
  useEffect(() => {
    const saveHomePageInfo = async () => {
      const result = await getHomePageInfo();
    };
  }, []);

  return <div>홈페이지 입니다.</div>;
}
