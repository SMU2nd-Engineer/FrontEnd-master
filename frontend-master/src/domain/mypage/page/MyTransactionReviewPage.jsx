import React from "react";
import MyPageLink from "../components/MyPageLink";
import MyPageRating from "../components/MyReviewRating";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { REVIEW_SCHEMA } from "@user/utils/userFormValidator";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
import TransactionTextReview from "../components/TransactionTextReview";
import { useEffect } from "react";
import { useState } from "react";
import { getMyPageData } from "../services/getMyPageDate";
import TransactionEvaluation from "../components/TransactionEvaluation";
import { registReview } from "../services/registReview";

// 검증용 스키마 설정
const SCHEMA = REVIEW_SCHEMA;

export default function MyTransactionReviewPage() {
  const [sellerInfo, setSellerInfo] = useState("");
  const [evalutaionCategories, setEvalutaionCategories] = useState([]);
  const navigate = useNavigate();

  const {
    register, // 입력 폼 등록
    handleSubmit, // 폼 제출시 사용하여
    setValue, // 외부 API 값이나 수동 입력 처리
    watch, // 실시간 값 확인용
    formState: { errors }, // 각 필드의 유효성 오류 처리
  } = useForm({
    resolver: yupResolver(SCHEMA),
    defaultValues: {
      rating: 0,
      reviewText: "",
    },
  });

  const submitForm = async (formData) => {
    console.log("제출 데이터 확인하기 : " + formData);
    const result = await registReview(formData);
    alert("리뷰를 남겨주셔서 감사합니다!");
    navigate("/product/list");
  };

  const rating = watch("rating"); // 변수 선언 및 실시간 체크

  // 필요한 정보 - 판매자의 정보-> 이름 정도 가져오기
  // 구매자(사용자) - 인증 객체에서 확인 가능
  // 거래 평가 하기 위한 카테고리 가져오기
  useEffect(() => {
    const saveInfo = async () => {
      const result = await getMyPageData("SELLER_AND_CATEGORIES");
      setSellerInfo(result.sellerInfo);
      setEvalutaionCategories(result.evaluationCategories);
      setValue("sellerIdx", result.sellerInfo.sellerIdx); // 폼 제출이 안되서 지정해주기
      setValue("transactionIdx", result.sellerInfo.transactionIdx); // 폼 제출이 안되서 지정해주기
    };
    saveInfo();
  }, []);
  return (
    <div>
      <MyPageLink />
      <h1>{sellerInfo.sellerName}님과 진행한 거래에 대한 평가를 남겨주세요</h1>
      <form
        onSubmit={handleSubmit(submitForm, (error) => {
          console.log("유효성 검증 실패", error);
        })}
      >
        <br />
        <MyPageRating
          myRating={rating}
          isReadOnly={false}
          setRating={(val) => {
            setValue("rating", val);
          }}
        />
        <p>상대방과의 거래 평가하기 컴포넌트</p>
        {evalutaionCategories.map((category) => (
          <TransactionEvaluation
            key={category.subIdx}
            category={category}
            register={register}
            setValue={setValue}
          />
        ))}
        <TransactionTextReview register={register} setValue={setValue} />
        <input type="hidden" {...register("sellerIdx")} />
        <input type="hidden" {...register("transactionIdx")} />
        <Button
          text={"다음에"}
          onClick={() => {
            navigate("/mypage/sellAndPurchaselist");
          }}
        />
        <Button type="submit" text={"리뷰 남기기"} />
      </form>
    </div>
  );
}
