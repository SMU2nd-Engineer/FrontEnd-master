import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SCHEMA } from "@/domain/user/utils/userFormValidator";
import { useOutletContext, useSearchParams } from "react-router-dom";
import KakaoPayReady from "../service/KakaoPayReady";
import SelectBox from "@/components/SelectBox";
import { getCategoryIdx } from "@/utils/CategoryHandler";
import { useEffect } from "react";
import Address from "@/domain/user/components/RegistrationAddress";
import PaymentProductInfo from "../components/PaymentProductInfo";
import * as PaymentDesign from "../styles/PaymentPageDesign";
import { useRef } from "react";
import { getMyPageData } from "@/domain/mypage/services/getMyPageDate";
import { useProductStore } from "../store/useProductStore";
import { useModalStore } from "@/store/useModalStore";

const PaymentPage = () => {
  const YUPSCHEMA = SCHEMA;
  const openModal = useModalStore((state) => state.open);
  const [searchParams] = useSearchParams();
  const tradeType = Number(searchParams.get("tradeType"));
  const hasFetched = useRef(false);
  const [user, setUser] = useState({
    address: "",
  });
  const [searchValue, setSearchValue] = useState({
    category_idx: 0,
    keyword: "",
  });

  const { productInfo } = useProductStore();
  const { skipBeforeUnload } = useOutletContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchValue({ ...searchValue, [name]: value });
  };

  const {
    register, // 입력 폼 등록
    setValue, // 외부 API 값이나 수동 입력 처리
    watch, // 실시간 값 확인용
    formState: { errors }, // 각 필드의 유효성 오류 처리
  } = useForm({
    resolver: yupResolver(YUPSCHEMA),
    mode: "onBlur", // 사용자에게 안내 메시지 출력
  });

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;
    const getUserInfoByToken = async () => {
      const userInfo = await getMyPageData("USER_INFO");
      const editUserInfo = userInfoSplit(userInfo);
      setValue("address", editUserInfo.address);
      setValue("detailAddress", editUserInfo.detailAddress);
    };
    getUserInfoByToken();
  }, [setValue]);

  const userInfoSplit = (userInfo) => {
    // 괄호로 나눈다. ex: '도로명주소 (지번)' 나뉘고 나머지: 상세주소
    const fullAddress = userInfo.address ?? "";
    // 정규 표현식으로 나누기
    const addressMatch = fullAddress.match(/^(.*?)\)\s*(.*)$/);

    // 분리가 안되면 기존 주소를 사용하기 위하여 미리 선언
    let address = fullAddress;
    let detailAddress = "";

    if (addressMatch) {
      // Match의 경우 전체 값이 0 번에 위치하여 1번부터 사용
      address = addressMatch[1] + ")";
      detailAddress = addressMatch[2];
    }

    return {
      ...userInfo,
      address: address.trim(),
      detailAddress: detailAddress.trim(),
    };
  };

  const watchedAddress = watch("address");
  const watchedDetail = watch("detailAddress");

  useEffect(() => {
    // 주소나 상세주소가 바뀌면 user.address를 업데이트
    if (watchedAddress || watchedDetail) {
      const fullAddress = `${watchedAddress || ""} ${
        watchedDetail || ""
      }`.trim();
      setUser((prev) => ({ ...prev, address: fullAddress }));
    }
  }, [watchedAddress, watchedDetail]);

  if (!productInfo || tradeType === null) {
    return <div>상품 정보를 불러오는 중입니다...</div>;
  }

  // 기능 구현 파라미터 받기 가능 => 삭제나 수정시 적용 가능
  const handleAlert = async (title, message) => {
    const confirmed = await openModal("alert", {
      title: title,
      message: message,
    });
  };

  const handlePaymentClick = async () => {
    const categoryIdx = Number(searchValue.category_idx);
    let title;
    let message;
    switch (categoryIdx) {
      case 6001:
        try {
          const result = await KakaoPayReady(productInfo, user, tradeType);

          if (result) {
            skipBeforeUnload.current = true;
            window.location.href = result.nextRedirectPcUrl;
          } else {
            alert("결제 요청에 실패했습니다.");
          }
        } catch {
          alert("결제 요청 중 오류가 발생했습니다. 다시 시도해주세요.");
        }
        break;
      case 6002:
        title = "토스페이 준비중";
        message = "토스페이 준비 중...";
        handleAlert(title, message);
        // alert("토스페이 준비중");
        break;
      case 6003:
        title = "네이버페이 준비중";
        message = "네이버페이 준비 중...";
        handleAlert(title, message);
        // alert("네이버페이 준비중");
        break;
      default:
        title = "결제수단이 선택되지 않았습니다.";
        message = "결제수단을 선택해주세요";
        handleAlert(title, message);
        // alert("결제수단을 선택해주세요");
        break;
    }
  };

  let total;
  if (tradeType === 0) {
    total = productInfo.price + 3000;
  } else if (tradeType === 1) {
    total = productInfo.price;
  }

  return (
    <PaymentDesign.Box>
      <PaymentDesign.PaymentBox>
        <PaymentDesign.PaymentInfo>결제 정보 입력</PaymentDesign.PaymentInfo>
        <PaymentDesign.Adderss>
          <PaymentDesign.AddressP>배송지 입력</PaymentDesign.AddressP>
          <PaymentDesign.AddressComponent area="address">
            <Address
              register={register}
              setValue={setValue}
              watch={watch}
              errors={errors}
            />
          </PaymentDesign.AddressComponent>
        </PaymentDesign.Adderss>
        <PaymentDesign.OrderProduct>주문 상품</PaymentDesign.OrderProduct>
        <PaymentDesign.ProductInfo>
          <PaymentProductInfo product={productInfo} tradeType={{ tradeType }} />
        </PaymentDesign.ProductInfo>
        <PaymentDesign.Paymethod>
          <PaymentDesign.PaymentMethod>결제 방법</PaymentDesign.PaymentMethod>
          <PaymentDesign.Select>
            <SelectBox
              id={"pay_method"}
              name={"category_idx"}
              category_idx={getCategoryIdx("payment")}
              handleChange={handleChange}
            />
          </PaymentDesign.Select>
        </PaymentDesign.Paymethod>
        <div>
          <PaymentDesign.PaymentBtn onClick={handlePaymentClick}>
            {total}원 결제하기
          </PaymentDesign.PaymentBtn>
        </div>
      </PaymentDesign.PaymentBox>
    </PaymentDesign.Box>
  );
};

export default PaymentPage;
