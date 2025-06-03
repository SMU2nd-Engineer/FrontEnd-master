import React from "react";
import * as Favorite from "../style/FavoriteDesign";

export default function FavoriteCategory({ category, register }) {
  const getParentName = (subIdx) => {
    if (subIdx >= 1000 && subIdx < 2000) return "상품";
    if (subIdx >= 2000 && subIdx < 3000) return "장르";
    if (subIdx >= 3000 && subIdx < 4000) return "티켓";
    return "기타";
  };

  const parentName = getParentName(category.subIdx);
  const displayName = `${category.name} (${parentName})`;

  return (
    <Favorite.FavoriteMain>
      <Favorite.FavoriteCheckbox
        type="checkbox"
        {...register("favorites[]")}
        value={`FAV_${category.subIdx}`}
        id={`${category.subIdx}`}
      />
      <Favorite.FavoriteLabel htmlFor={`${category.subIdx}`}>
        {displayName}
      </Favorite.FavoriteLabel>
    </Favorite.FavoriteMain>
  );
}
