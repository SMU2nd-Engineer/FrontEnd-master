import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FavoriteCategory from "../components/FavoriteCategory";
import { useNavigate } from "react-router-dom";
import { getMyPageData } from "../services/getMyPageDate";
import { registrationUserFavorite } from "@user/services/registrationUserFavorite";
import { updateUserFavorites } from "../services/updateUserFavorites";

import * as Favorite from "../style/FavoriteDesign";

export default function FavoritesSelector({ mode = "register" }) {
  // 선호도 카테고리 정보 저장할 배열
  const [categories, setCategories] = useState([]);

  // react-hook-form 생성
  const {
    register, // 입력 폼 등록
    handleSubmit, // 폼 제출시 사용하여
    setValue, // 외부 API 값이나 수동 입력 처리
  } = useForm();

  const navigate = useNavigate();

  // 마운트시 카테고리 정보 저장하기 및 mode === edit일 때 기존 정보 가져오기 넣기
  useEffect(() => {
    const saveCategoryAndInfo = async () => {
      if (mode === "edit") {
        const userFavorites = await getMyPageData("USER_FAVORITES");
        setCategories(userFavorites.categories);
        // 가져온 데이터가 key:value 형태의 map이므로 처리하기 위해서
        const selectedKeys = Object.entries(userFavorites.userFavoriteMap) // 객체의 값만 가져옴(map객체)
          .filter(([key, value]) => value === 1) // 선택된 값만 선택
          .map(([key]) => key);
        // 렌더링 과정에 순서때문인지 받아오지 못 해서 간격을 줌.
        setTimeout(() => {
          setValue("favorites[]", selectedKeys);
        }, 0);
      } else {
        const result = await getMyPageData("FAVORITE_CATEGORIES");
        setCategories(result);
      }
    };
    saveCategoryAndInfo();
  }, [mode, setValue]);

  // 콜백 함수를 만들어서 API 호출
  const submitForm = async (formData) => {
    try {
      if (mode === "edit") {
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

  // 취소 버튼 진행해도 원상 복귀 하도록 만들기
  const handleCancel = async () => {
    if (mode === "edit") {
      navigate("/mypage/main");
    } else {
      await registrationUserFavorite([]);
      navigate("/user/home", { replace: true });
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Favorite.CategoryForm onSubmit={handleSubmit(submitForm)}>
        <Favorite.FormTitle>
          선호하는 카테고리를 선택해주세요.
        </Favorite.FormTitle>

        <Favorite.CategoryGrid>
          {categories.map((category) => (
            <FavoriteCategory
              key={category.subIdx}
              category={category}
              register={register}
              setValue={setValue}
            />
          ))}
        </Favorite.CategoryGrid>
        <Favorite.FormActions>
          <Favorite.EndButton onClick={handleCancel}>취소</Favorite.EndButton>
          <Favorite.EndButton type="submit">
            {mode === "edit" ? "수정하기" : "등록하기"}
          </Favorite.EndButton>
        </Favorite.FormActions>
      </Favorite.CategoryForm>
    </div>
  );
}
