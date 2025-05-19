import FavoritesSelector from "@/domain/mypage/components/FavoritesSelector";
import React from "react";

export default function ChooseFavoritePage() {
  return (
    <div>
      <h2>관심있는 좋아하는 아티스트를 선택해주세요.</h2>
      <FavoritesSelector mode="register" />
    </div>
  );
}
