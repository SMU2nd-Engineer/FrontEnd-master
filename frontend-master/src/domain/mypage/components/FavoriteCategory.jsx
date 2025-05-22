import React from "react";

export default function FavoriteCategory({ category, register }) {
  return (
    <>
      <input
        type="checkbox"
        {...register("favorites[]")}
        value={String(category.subIdx)}
        id={`${category.idx}`}
      />
      <label htmlFor={`${category.subIdx}`}> {category.name} </label>
    </>
  );
}
