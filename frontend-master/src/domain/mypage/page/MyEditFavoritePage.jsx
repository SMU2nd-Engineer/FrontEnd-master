import React from "react";
import FavoritesSelector from "../components/FavoritesSelector";
import MyPageLink from "../components/MyPageLink";

export default function MyEditFavoritePage() {
  return (
    <div>
      <div className="sticky-navbar">
        <MyPageLink />
      </div>
      <FavoritesSelector mode="edit" />
    </div>
  );
}
