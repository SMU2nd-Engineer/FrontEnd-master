import React from "react";

export default function FavoriteCategory({
  category,
  register,
  setValue,
  watch,
}) {
  return (
    <>
      <input
        type="checkbox"
        {...register("favorites[]")}
        value={category.idx}
        id={`${category.idx}`}
      />
      <label htmlFor={`${category.idx}`}> {category.name} </label>
    </>
  );
}
