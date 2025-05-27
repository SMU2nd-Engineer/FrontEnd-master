import React from "react";
import "../style/favorite.css";

export default function FavoriteCategory({ category, register }) {
  return (
    <div className="favorite-main">
      <input
        type="checkbox"
        {...register("favorites[]")}
        value={`FAV_${category.subIdx}`}
        id={`${category.subIdx}`}
        className="favorite-CheckBox"
      />
      <label htmlFor={`${category.subIdx}`} className="favorite-label">
        {" "}
        {category.name}{" "}
      </label>
    </div>
  );
}
