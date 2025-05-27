import React from "react";
import FavoritesSelector from "../components/FavoritesSelector";
import MyPageLink from "../components/MyPageLink";

export default function MyEditFavoritePage() {
  return (
    <div>
      <MyPageLink />
      <FavoritesSelector mode="edit" />
    </div>
  );
}
