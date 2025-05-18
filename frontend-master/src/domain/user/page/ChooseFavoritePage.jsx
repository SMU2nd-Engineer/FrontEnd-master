import React, { useEffect, useState } from "react";
import { getCategoryInfo } from "../services/getCategoryInfo";
import { useForm } from "react-hook-form";
import FavoriteCategory from "../components/FavoriteCategory";
import { useNavigate } from "react-router-dom";
import { registrationUserFavorite } from "../services/registrationUserFavorite";
import Button from "@/components/Button";

export default function ChooseFavoritePage() {
  // 선호도 정보 저장할 배열
  const [categories, setCategories] = useState([]);
  const {
    register, // 입력 폼 등록
    handleSubmit, // 폼 제출시 사용하여
    setValue, // 외부 API 값이나 수동 입력 처리
    watch, // 실시간 값 확인용
  } = useForm();

  const navigate = useNavigate();

  // 마운트시 카테고리 정보 저장하기
  useEffect(() => {
    const saveCategory = async () => {
      const result = await getCategoryInfo();
      setCategories(result);
    };
    saveCategory();
  }, []);

  // 콜백 함수를 만들어서 API 호출
  const submitForm = async (formData) => {
    try {
      await registrationUserFavorite(formData);
      navigate("/user/home");
    } catch (error) {
      alert("문제가 발생했습니다. 관리자에게 문의하세요.");
      console.log(error);
    }
  };

  console.log(categories);

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      {categories.map((category) => (
        <FavoriteCategory
          key={category.id}
          category={category}
          register={register}
          setValue={setValue}
          watch={watch}
        />
      ))}
      <br />
      <Button
        text={"취소"}
        onClick={() => {
          navigate("/user/home", { replace: true });
        }}
      />
      <Button text={"등록하기"} type="submit" />
    </form>
  );
}
