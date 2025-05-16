import React, { useEffect, useState } from "react";
import ProductList from "@/domain/products/components/ProductList";
import { getLastestPeakInfo } from "../services/getLatestPeakInfo";
import { Link } from "react-router-dom";

export default function MyMainPeak() {
  const [latestPeak, setLatestPeak] = useState([]);

  // 최신 항목 2개만 가져오기
  useEffect(() => {
    const latestListInfo = async () => {
      const result = await getLastestPeakInfo();
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

      <ProductList products={latestPeak} />
    </div>
  );
}
