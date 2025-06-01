import React from "react";
import MyPageRating from "../components/MyReviewRating";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { REVIEW_SCHEMA } from "@user/utils/userFormValidator";
import Button from "@/components/Button";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import TransactionTextReview from "../components/TransactionTextReview";
import { useEffect } from "react";
import { useState } from "react";
import { getMyPageData } from "../services/getMyPageDate";
import TransactionEvaluation from "../components/TransactionEvaluation";
import { registReview } from "../services/registReview";
import { updateReview } from "../services/updateReview";

import * as TranReview from "../style/TransactionReviewDesign";
import PaymentProductInfo from "@/domain/payment/components/PaymentProductInfo";
import { getReviewInitInfo } from "../services/getReviewInitInfo";
import {
  DisableWhenLoading,
  ErrorFontProduct,
  ErrorFontReviewHeader,
} from "../style/TransactionReviewErrorDesign";

// 검증용 스키마 설정
const SCHEMA = REVIEW_SCHEMA;

/**
 * 리뷰 남기기 페이지, 상세 페이지 역할 및 수정하기 페이지 역할
 * @returns jsx
 */
export default function TransactionReviewRegisterPage() {
  // useEffect 방어 코드 용용
  const defaultProductInfo = {
    idx: 0,
    user_idx: 0,
    title: "",
    price: 0,
    imageUrl: "",
    tradeType: 0,
  };
  const { reviewIdx } = useParams();
  const isNewReview = !reviewIdx;
  const [isEditMode, setIsEditMode] = useState(isNewReview); // 수정모드확인
  const isReadOnly = !isNewReview && !isEditMode; // 수정모드 체크를 위한 변수
  const [sellerInfo, setSellerInfo] = useState(null); // 판매자 정보 등록
  const [evalutaionCategories, setEvalutaionCategories] = useState([]); // 평가 항목
  const [originalReview, setOriginalReview] = useState({}); // 기존 리뷰 정보 저장.
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const tradeType = Number(searchParams.get("tradeType"));
  const location = useLocation();
  const [productInfo, setProductInfo] = useState(
    location.state?.product ?? defaultProductInfo
  );

  const {
    register, // 입력 폼 등록
    handleSubmit, // 폼 제출시 사용하여
    setValue, // 외부 API 값이나 수동 입력 처리
    watch, // 실시간 값 확인용
    formState: { errors }, // 각 필드의 유효성 오류 처리
  } = useForm({
    resolver: yupResolver(SCHEMA),
    mode: "onBlur", // 사용자에게 안내 메시지 출력
    defaultValues: {
      rating: 0,
      reviewText: "",
      sellerIdx: 0,
    },
  });

  /**
   * form 제출용 콜백 함수
   */
  const submitForm = async (formData) => {
    // 기존과 값이 동일한지 확인하기
    const isSame =
      formData.reviewText === originalReview.reviewText &&
      formData.rating === originalReview.rating &&
      isEqualArray(formData.evaluation, originalReview.evaluation);

    if (isSame) {
      alert("변경된 값이 없습니다.");
      return;
    }
    let addCount = [];
    let removeCount = [];
    let changeValueEvaluation = {};
    const currentEvaluations = formData["evaluation"] || [];
    const originalEvaluations = originalReview.evaluation || [];
    if (!isNewReview) {
      addCount = currentEvaluations.filter(
        (item) => !originalEvaluations.includes(item)
      );
      removeCount = originalEvaluations.filter(
        (item) => !currentEvaluations.includes(item)
      );

      // 거래 평가 값을 변경하기 위해서 프론트에서 +/- 처리
      const changeValueEvaluation = {};

      addCount.forEach((evaluation) => {
        changeValueEvaluation[evaluation] = 1;
      });
      removeCount.forEach((evaluation) => {
        changeValueEvaluation[evaluation] = -1;
      });
    }
    const editFormData = {
      ...formData,
      changeValueEvaluation,
    };

    if (isNewReview) {
      const result = await registReview(formData);
      alert("리뷰를 남겨주셔서 감사합니다!");
      navigate("/product/list");
    } else {
      const result = await updateReview(editFormData);
      alert("리뷰가 업데이트 되었습니다!");
      navigate("/mypage/myReview");
    }
  };

  // 배열 비교 함수
  const isEqualArray = (a, b) => {
    if (!a || !b) return false; // 배열이 비어 있을 때
    if (a.length !== b.length) return false; // 길이 다를 때

    const sortedA = [...a].sort(); // 실제 값은 건드리지 않기 위하여 복사 후 정렬
    const sortedB = [...b].sort();

    return sortedA.every((val, idx) => val === sortedB[idx]); // 정렬된 두 배열의 각 요소가 모두 일치하는지 확인
  };

  const rating = watch("rating"); // 변수 선언 및 실시간 체크

  // 필요한 정보 - 판매자의 정보-> 이름 정도 가져오기
  // 구매자(사용자) - 인증 객체에서 확인 가능
  // 거래 평가 하기 위한 카테고리 가져오기
  useEffect(() => {
    const saveInfo = async () => {
      if (!productInfo || productInfo.idx === 0 || productInfo.user_idx === 0) {
        console.log("productInfo가 아직 준비되지 않음");
        return;
      }
      if (reviewIdx) {
        const getReview = await getMyPageData("REVIEW_DETAIL", reviewIdx);
        setEvalutaionCategories(getReview.evaluationCategories);
        setValue("rating", getReview.fetchReviewRegisterInfo.rating);
        setValue("reviewText", getReview.fetchReviewRegisterInfo.reviewText);
        setValue("reviewIdx", getReview.fetchReviewRegisterInfo.reviewIdx);
        setValue(
          "sellerIdx",
          getReview?.fetchReviewRegisterInfo?.sellerIdx ?? 0
        ); // 폼 제출이 안되서 지정해주기
        setSellerInfo(getReview.fetchReviewRegisterInfo);
        setProductInfo(getReview.fetchReviewProductInfoDTO);
        const selectedKeys = Object.entries(getReview.reviewEvaluationRecord) // 객체의 값만 가져옴(map객체)
          .filter(([key, value]) => value === 1) // 선택된 값만 선택
          .map(([key]) => key);
        // 렌더링 과정에 순서때문인지 받아오지 못 해서 간격을 줌.
        setOriginalReview({
          rating: getReview.fetchReviewRegisterInfo.rating,
          reviewText: getReview.fetchReviewRegisterInfo.reviewText,
          evaluation: selectedKeys,
        });
        setTimeout(() => {
          setValue("evaluation[]", selectedKeys);
        }, 0);
      } else {
        // 거래 남기기 위하여 초기 정보 불러오기
        const result = await getReviewInitInfo(
          productInfo.user_idx,
          productInfo.idx
        );
        setSellerInfo(result.sellerInfo ?? "");
        setEvalutaionCategories(result.evaluationCategories);
        setValue("sellerIdx", productInfo.user_idx); // 폼 제출이 안되서 지정해주기
        setValue("transactionIdx", result?.sellerInfo?.transactionIdx ?? 0); // 폼 제출이 안되서 지정해주기
      }
    };
    saveInfo();
  }, [productInfo, productInfo.idx, productInfo.user_idx, setValue, reviewIdx]);

  return (
    <TranReview.TRmain>
      <TranReview.PaymentProductInfo>
        {productInfo.idx === 0 ? (
          <ErrorFontProduct>상품 정보를 불러오는 중입니다...</ErrorFontProduct>
        ) : (
          <PaymentProductInfo product={productInfo} tradeType={{ tradeType }} />
        )}
      </TranReview.PaymentProductInfo>
      <TranReview.Line>
        <ErrorFontReviewHeader>
          {sellerInfo && sellerInfo.sellerName
            ? `${sellerInfo.sellerName}님과 진행한 거래에 대한 평가를 남겨주세요`
            : "거래 정보 로딩 중..."}
        </ErrorFontReviewHeader>
      </TranReview.Line>
      <TranReview.ReviewMainForm
        onSubmit={handleSubmit(submitForm, (error) => {
          console.log("유효성 검증 실패", error);
        })}
      >
        <TranReview.ChoiceStarRating>
          <MyPageRating
            myRating={rating}
            isReadOnly={isReadOnly}
            setRating={(val) => {
              setValue("rating", val);
            }}
          />
        </TranReview.ChoiceStarRating>
        <TranReview.CheckReview>
          {evalutaionCategories.map((category) => (
            <TransactionEvaluation
              key={category.subIdx}
              category={category}
              register={register}
              setValue={setValue}
              readOnly={isReadOnly}
            />
          ))}
        </TranReview.CheckReview>
        <TranReview.TextReview>
          <TransactionTextReview
            register={register}
            setValue={setValue}
            readOnly={isReadOnly}
            errors={errors}
          />
        </TranReview.TextReview>
        <TranReview.CheckButton>
          <input type="hidden" {...register("sellerIdx")} />
          {isNewReview && (
            <input type="hidden" {...register("transactionIdx")} />
          )}
          {isEditMode && <input type="hidden" {...register("reviewIdx")} />}

          <Button
            text={"다음에"}
            onClick={() => {
              navigate("/mypage/sellAndPurchaselist");
            }}
          />

          {isNewReview && <Button type="submit" text={"리뷰 작성하기"} />}

          {isReadOnly && (
            <DisableWhenLoading disabled={productInfo.idx === 0}>
              <Button
                text={"수정하기"}
                onClick={() => {
                  setIsEditMode(true);
                }}
              />
            </DisableWhenLoading>
          )}

          {isEditMode && !isNewReview && (
            <Button type="submit" text={"리뷰 수정하기"} />
          )}
        </TranReview.CheckButton>
      </TranReview.ReviewMainForm>
    </TranReview.TRmain>
  );
}
