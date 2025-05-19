import React from "react";
import FavoritesSelector from "../components/FavoritesSelector";
import MyPageLink from "../components/MyPageLink";

export default function MyEditFavoritePage() {
  return (
    <div>
      <MyPageLink />
      <h2>관심있는 좋아하는 아티스트를 선택해주세요.</h2>
      <FavoritesSelector mode="edit" />
    </div>
  );
}
