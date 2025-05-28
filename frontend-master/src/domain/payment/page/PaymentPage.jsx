import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SCHEMA } from '@/domain/user/utils/userFormValidator';
import { useParams, useSearchParams } from 'react-router-dom';
import KakaoPayReady from '../service/KakaoPayReady';
import SelectBox from '@/components/SelectBox';
import { getCategoryIdx } from '@/utils/CategoryHandler';
import { getProductDetail } from '@/domain/products/services/productService';
import { useEffect } from 'react';
import Address from '@/domain/user/components/RegistrationAddress';
import PaymentProductInfo from '../components/PaymentProductInfo';
import * as PaymentDesign from '../styles/PaymentPageDesign'

const PaymentPage = () => {
  const {idx} = useParams();
  const [product, setProduct] = useState(null);
  const YUPSCHEMA = SCHEMA;
  const [searchParams] = useSearchParams();
  const tradeType = Number(searchParams.get('tradeType'));
  const user = {
    idx: 1,
    address: '제주특별자치도 안양시 동안구 봉은사3로 (현정김마을)'
  }
  const [searchValue, setSearchValue] = useState({
    category_idx: 0,
    keyword : ""
  });

  useEffect(() => {
      getProductDetail(idx)
        .then((res) => res.data)
        .then((data) => {
          console.log("=================", data)
          setProduct(data)
        })
        .catch((err) => console.error("상품 불러오기 실패: ", err));
      
    }, [idx]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchValue({...searchValue, [name] : value});
    console.log("카테고리 변경됨:", name, value);
    console.log(typeof searchValue.category_idx);
  }

  const {
    register, // 입력 폼 등록
    setValue, // 외부 API 값이나 수동 입력 처리
    watch, // 실시간 값 확인용
    formState: { errors }, // 각 필드의 유효성 오류 처리
  } = useForm({
    resolver: yupResolver(YUPSCHEMA),
    mode: "onBlur", // 사용자에게 안내 메시지 출력
  });

  if(!product || tradeType === null) {
    console.log('tradeType : ', tradeType);
    return <div>상품 정보를 불러오는 중입니다...</div>;
  }

  const handlePaymentClick = async () => {
    

    const categoryIdx = Number(searchValue.category_idx);
    switch (categoryIdx) {
      case 6001:
        try {
          const result = await KakaoPayReady(product, user, tradeType);
          console.log("카카오 응답 ", result);
      
          if (result) {
            window.location.href = result.nextRedirectPcUrl;
            console.log("카카오 응답 ", result);
          } else {
            alert("결제 요청에 실패했습니다.");
          }
        } catch (error) {
          console.error("카카오페이 요청 중 오류 발생: ", error);
          alert("결제 요청 중 오류가 발생했습니다. 다시 시도해주세요.")
        }
        break;
      case 6002:
        alert('토스페이 준비중');
        break;
      case 6003:
        alert('네이버페이 준비중');
        break;
      default:
        alert('결제수단을 선택해주세요');
        break;
    }
  }

  let total
  if (tradeType === 0) {
    total = product.price + 3000;
  } else if (tradeType === 1) {
    total = product.price;
  }

  return (
    <PaymentDesign.Box>
      <PaymentDesign.PaymentInfo>결제 정보 입력</PaymentDesign.PaymentInfo>
      <PaymentDesign.Adderss>
        <PaymentDesign.AddressP>배송지 입력</PaymentDesign.AddressP>
        <PaymentDesign.AddressComponent>
          <Address
            register={register}
            setValue={setValue}
            watch={watch}
            errors={errors}
          />
        </PaymentDesign.AddressComponent>
      </PaymentDesign.Adderss>
      <PaymentDesign.OrderProduct>주문 상품</PaymentDesign.OrderProduct>
      <PaymentProductInfo product={product} tradeType={{tradeType}}/>
      <PaymentDesign.Paymethod>
        <PaymentDesign.PaymentMethod>결제 방법</PaymentDesign.PaymentMethod>
        <SelectBox id={"pay_method"} name={"category_idx"} category_idx={getCategoryIdx("payment")} handleChange={handleChange}/>
      </PaymentDesign.Paymethod>
      <div className='paybtn'>
        <PaymentDesign.PaymentBtn onClick={handlePaymentClick}>{total}원 결제하기</PaymentDesign.PaymentBtn>
      </div>
    </PaymentDesign.Box>
  );
};

export default PaymentPage;