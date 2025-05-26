import React from "react";

export default function FavoriteCategory({ category, register }) {
  return (
    <>
      <input
        type="checkbox"
        {...register("favorites[]")}
        value={`FAV_${category.subIdx}`}
        id={`${category.subIdx}`}
      />
      <label htmlFor={`${category.subIdx}`}> {category.name} </label>
    </>
  );
}
