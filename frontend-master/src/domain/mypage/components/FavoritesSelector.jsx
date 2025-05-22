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
  // 선호도 체크 변경을 위한 기존 선호도 정보 저장할 state
  const [oldFavorites, setOldFavorite] = useState([]);

  const {
    register, // 입력 폼 등록
    handleSubmit, // 폼 제출시 사용하여
    setValue, // 외부 API 값이나 수동 입력 처리
  } = useForm();

  const navigate = useNavigate();

  // 컬럼에 맞추기 위하여 카테고리 sub_idx에 붙이기
  const formatFavoritesForDB = (favoritesArray) => {
    return favoritesArray.map((item) => `FAV_${item}`);
  };

  // 마운트시 카테고리 정보 저장하기 및 mode === edit일 때 기존 정보 가져오기 넣기
  useEffect(() => {
    const saveCategoryAndInfo = async () => {
      const result = await getMyPageData("FAVORITE_CATEGORIES");
      setCategories(result);
      if (mode === "edit") {
        const userFavorites = await getMyPageData("USER_FAVORITES");
        // 기존 항목 저장.
        console.log("userFavorites````````````", userFavorites);
        setOldFavorite(userFavorites.favorites.map(String));
        // 렌더링 과정에 순서때문인지 받아오지 못 해서 간격을 줌.
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
        // react-hook-form 객체인 formData를 배열로 바꾸기
        const changeArray = [].concat(formData["favorites"] || []).map(String); // 오류방지 빈 배열 및 문자열 비교를 위하여 문자열화
        // 새로 추가된 항목과 비활성화활 항목 비교하여 나눠서 전달하기.(나머지는 그대로 유지)
        // 새로 추가된 항목 : 기존 항목에 없는데 새로운 항목에 있는 경우
        console.log("changeArray " + changeArray);
        console.log(`formData["favorites"] 의 값은` + formData["favorites"]);

        const insertNewFavorites = changeArray.filter(
          (item) => !oldFavorites.includes(item)
        );
        // 관심사였다가 관심사가 아니게 된 항목
        const notFavorites = oldFavorites.filter(
          (item) => !changeArray.includes(item)
        );
        console.log(`insertNewFavoite : `, insertNewFavorites);
        console.log(`notFavorite : `, notFavorites);
        // 변경 사항이 없으면 종료
        if (insertNewFavorites.length === 0 && notFavorites.length === 0) {
          alert("변경된 항목이 없습니다.");
          return;
        }
        // 수정하기
        await updateUserFavorites(insertNewFavorites, notFavorites);
        alert("정상적으로 수정되었습니다.");
        navigate("/mypage/main");
      } else {
        // 등록하기
        const fitToColumnFomData = formatFavoritesForDB(
          formData["favorites"] || [] // formData가 json형태인듯
        );
        await registrationUserFavorite(fitToColumnFomData);
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
  console.log("------categories------", categories);
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      {categories.map((category) => (
        <FavoriteCategory
          key={category.subIdx}
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
