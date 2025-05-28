import React from "react";
import * as Favorite from "../style/FavoriteDesign";

export default function FavoriteCategory({ category, register }) {
  return (
    <Favorite.FavoriteMain>
      <Favorite.FavoriteCheckbox
        type="checkbox"
        {...register("favorites[]")}
        value={`FAV_${category.subIdx}`}
        id={`${category.subIdx}`}
      />
      <Favorite.FavoriteLabel htmlFor={`${category.subIdx}`}>
        {" "}
        {category.name}{" "}
      </Favorite.FavoriteLabel>
    </Favorite.FavoriteMain>
  );
}
