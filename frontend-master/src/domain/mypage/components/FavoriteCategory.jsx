import React from "react";
import * as Favorite from "../style/FavoriteDesign";

export default function FavoriteCategory({ category, register }) {
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
