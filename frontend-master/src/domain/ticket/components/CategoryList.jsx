import React, { useEffect, useState } from "react";
import axiosInstance from "@/lib/axiosInstance";

const CategoryList = ({ selectedIds, searchTerm }) => {
  const [infos, setInfos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const categoriesParam = selectedIds.join(",");
    axiosInstance
      .get("/ticket/search", {
        params: {
          categories: categoriesParam,
          query: searchTerm,
        },
      })
      .then((res) => {
        console.log("검색 결과:", res.data);
        setInfos(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("검색 실패:", err);
        setLoading(false);
      });
  }, [selectedIds, searchTerm]);

  // 검색어가 있으면 필터링, 없으면 전체 infos 보여주기
  const filteredInfos = infos.filter((info) =>
    (info.title || info.name || "")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>정보 로딩 중...</p>;
  if (filteredInfos.length === 0) return <p>검색 결과가 없습니다.</p>;

  return (
    <ul>
      {filteredInfos.map((info) => (
        <li key={info.id}>{info.title || info.name || JSON.stringify(info)}</li>
      ))}
    </ul>
  );
};

export default CategoryList;
