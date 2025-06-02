import React from "react";
import KakaoPayCancel from "../service/KakaoPayCancel";
import Button from "@/components/Button";
import Address from "@/domain/user/components/RegistrationAddress";
import { yupResolver } from "@hookform/resolvers/yup";
import { SCHEMA } from "@/domain/user/utils/userFormValidator";
import { useForm } from "react-hook-form";

// 마이페이지에서 환불요청 시 나오는 페이지
const PaymentCancelPage = () => {
  const YUPSCHEMA = SCHEMA;
  // const product = location.state?.product;
  const product = {
    img: "이미지",
    title: "상품이름",
    price: 5000,
  };
  const tid = "T83508ac01c2141f211b";

  const {
    register, // 입력 폼 등록
    setValue, // 외부 API 값이나 수동 입력 처리
    watch, // 실시간 값 확인용
    formState: { errors }, // 각 필드의 유효성 오류 처리
  } = useForm({
    resolver: yupResolver(YUPSCHEMA),
    mode: "onBlur", // 사용자에게 안내 메시지 출력
  });

  const cancelPayment = async () => {
    try {
      await KakaoPayCancel({ tid });
    } catch (err) {
      console.log("환불 요청중 오류 발생: ", err);
      // kakaoPayFail({
      //   tid,
      //   err
      // });
    }
  };

  return (
    <div>
      <p>
        <strong>환불</strong>
      </p>
      <div>
        <div className="img">
          <img src={product.img} alt="상품이미지" />
        </div>
        <div>
          <p>{product.title}</p>
          <h2>{product.price}원</h2>
        </div>
      </div>
      <div className="form-row">
        <label htmlFor="address">반송 배송지 입력</label>
        <Address
          register={register}
          setValue={setValue}
          watch={watch}
          errors={errors}
        />
      </div>
      <div className="paybtn">
        <Button text={"환불요청하기"} type="submit" onClick={cancelPayment} />
      </div>
    </div>
  );
};

export default PaymentCancelPage;
