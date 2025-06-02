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
      <Favorite.FavoriteLabel htmlFor={`${category.subIdx}`}>
        <div style={{ marginLeft: "37px", marginRight: "10px" }}>
          <Favorite.FavoriteCheckbox
            type="checkbox"
            {...register("favorites[]")}
            value={`FAV_${category.subIdx}`}
            id={`${category.subIdx}`}
          />
        </div>
        {category.name === "기타" && category.subIdx === 1007
          ? "기타(상품)"
          : category.name === "기타" && category.subIdx === 2005
          ? "기타(장르)"
          : category.name}
      </Favorite.FavoriteLabel>
    </Favorite.FavoriteMain>
  );
}
