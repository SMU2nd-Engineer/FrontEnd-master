import React, { useEffect, useState } from "react";
import getLatestPeakInfo from "../services/getLatestPeakInfo";

export default function MyMainPeak() {
  const [latestPeak, setLatestPeak] = useState([]);

  // 최신 항목 2개만 가져오기
  useEffect(() => {
    const latestListInfo = async () => {
      const result = await getLatestPeakInfo();
      setLatestPeak(result);
    };
    latestListInfo();
  }, []);
  return (
    <div
      id="wishlistBody"
      style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
    >
      <p>찜 목록</p>
      <Link to="/myPage/peakList">더 보기</Link>
      <br />

      {currentItems.map((item, key) => (
        <MyPageCardForm
          key={key}
          img={item.img}
          name={item.title}
          contents={item.contents}
          price={item.price}
        />
      ))}
    </div>
  );
}
