import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FavoriteCategory from "../components/FavoriteCategory";
import { useNavigate } from "react-router-dom";
import Button from "@/components/Button";
import { getMyPageData } from "../services/getMyPageDate";
import { registrationUserFavorite } from "@user/services/registrationUserFavorite";
import { updateUserFavorites } from "../services/updateUserFavorites";

export default function FavoritesSelector({ mode = "register" }) {
  // 선호도 카테고리 정보 저장할 배열
  const [categories, setCategories] = useState([]);
  const {
    register, // 입력 폼 등록
    handleSubmit, // 폼 제출시 사용하여
    setValue, // 외부 API 값이나 수동 입력 처리
  } = useForm();

  const navigate = useNavigate();

  // 마운트시 카테고리 정보 저장하기 및 mode === edit일 때 기존 정보 가져오기 넣기
  useEffect(() => {
    const saveCategoryAndInfo = async () => {
      const result = await getMyPageData("FAVORITE_CATEGORIES");
      setCategories(result);
      if (mode === "edit") {
        const userFavorites = await getMyPageData("USER_FAVORITES");
        // 렌더링 전
        setTimeout(() => {
          setValue(
            "favorites[]",
            userFavorites.favorites.map((idx) => String(idx)) // 숫자가 오지만 체크박스는 문자열이여 하므로 체크박스를 string 처리
          );
        }, 0);
      }
    };
    saveCategoryAndInfo();
  }, [mode, setValue]);

  // 콜백 함수를 만들어서 API 호출
  const submitForm = async (formData) => {
    try {
      if (mode === "edit") {
        // 수정하기
        await updateUserFavorites(formData);
        alert("정상적으로 수정되었습니다.");
        navigate("/mypage/main");
      } else {
        // 등록하기
        await registrationUserFavorite(formData);
        alert(
          "관심사가 등록되었습니다! 저희 사이트를 방문해 주셔서 감사합니다!"
        );
        navigate("/user/home");
      }
    } catch (error) {
      alert("문제가 발생했습니다. 관리자에게 문의하세요.");
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      {categories.map((category) => (
        <FavoriteCategory
          key={category.id}
          category={category}
          register={register}
          setValue={setValue}
        />
      ))}
      <br />
      <Button
        text={"취소"}
        onClick={() => {
          mode === "edit"
            ? navigate("/mypage/main")
            : navigate("/user/home", { replace: true });
        }}
      />
      <Button text={mode === "edit" ? "수정하기" : "등록하기"} type="submit" />
    </form>
  );
}
