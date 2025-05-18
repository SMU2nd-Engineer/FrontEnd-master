import React from "react";

export default function FavoriteCategory({ category, register }) {
  return (
    <>
      <input
        type="checkbox"
        {...register("favorites[]")}
        value={String(category.idx)}
        id={`${category.idx}`}
      />
      <label htmlFor={`${category.idx}`}> {category.name} </label>
    </>
  );
}
