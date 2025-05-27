import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FavoriteCategory from "../components/FavoriteCategory";
import { useNavigate } from "react-router-dom";
import Button from "@/components/Button";
import { getMyPageData } from "../services/getMyPageDate";
import { registrationUserFavorite } from "@user/services/registrationUserFavorite";
import { updateUserFavorites } from "../services/updateUserFavorites";
import "../style/favorite.css";
import { div } from "framer-motion/client";

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
      const result = await getMyPageData("FAVORITE_CATEGORIES");
      setCategories(result);
      if (mode === "edit") {
        const userFavorites = await getMyPageData("USER_FAVORITES");
        console.log("userFavorites````````````", userFavorites.userFavoriteMap);
        // 가져온 데이터가 key:value 형태의 map이므로 처리하기 위해서
        const selectedKeys = Object.entries(userFavorites.userFavoriteMap) // 객체의 값만 가져옴(map객체)
          .filter(([key, value]) => value === 1) // 선택된 값만 선택
          .map(([key]) => key);
        // 기존 항목 저장.
        console.log("selectedKeys : ", selectedKeys);
        // 렌더링 과정에 순서때문인지 받아오지 못 해서 간격을 줌.
        setTimeout(() => {
          setValue("favorites[]", selectedKeys);
        }, 0);
      }
    };
    saveCategoryAndInfo();
  }, [mode, setValue]);

  // 콜백 함수를 만들어서 API 호출
  const submitForm = async (formData) => {
    try {
      console.log("formData ~~~~~~~~~~~~ : ", formData);
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
    <div className="favorite-main">
      <form onSubmit={handleSubmit(submitForm)} className="category-form">
        <div>
          <h2 className="form-title">선호하는 카테고리를 선택해주세요.</h2>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <FavoriteCategory
              key={category.subIdx}
              category={category}
              register={register}
              setValue={setValue}
            />
          ))}
        </div>
        <div className="form-actions">
          <Button text={"취소"} onClick={handleCancel} className="button1" />
          <Button
            text={mode === "edit" ? "수정하기" : "등록하기"}
            type="submit"
            className="button2"
          />
        </div>
      </form>
    </div>
  );
}
