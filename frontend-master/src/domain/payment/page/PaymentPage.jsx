import React, { useState } from 'react';
import PaymentAddress from '../components/PaymentAddress';
import Button from '@/components/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SCHEMA } from '@/domain/user/utils/userFormValidator';
import { Input } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import KakaoPayReady from '../service/KakaoPayReady';
import SelectBox from '@/components/SelectBox';
import { getCategoryIdx } from '@/utils/CategoryHandler';

const PaymentPage = () => {
  const YUPSCHEMA = SCHEMA;
  const location = useLocation();
  const {product, tradeType} = location.state || {};
  const user = {
    idx: 1,
    address: '제주특별자치도 안양시 동안구 봉은사3로 (현정김마을)'
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  }
  const {
      register, // 입력 폼 등록
      handleSubmit, // 폼 제출시 사용하여
      setValue, // 외부 API 값이나 수동 입력 처리
      watch, // 실시간 값 확인용
      formState: { errors }, // 각 필드의 유효성 오류 처리
    } = useForm({
      resolver: yupResolver(YUPSCHEMA),
      mode: "onBlur", // 사용자에게 안내 메시지 출력
    });

    const handlePaymentClick = async () => {
      if(!product) {
        alert("상품 정보가 없습니다. 다시 시도해주세요.")
        return;
      }

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
    }

  return (
    <div>
      <p><strong>결제</strong></p>
      <div>
        <div className='img'>
          <img src={product.img} alt="상품이미지" />
        </div>
        <div>
          <p>{product.title}</p>
          <h2>{product.price}원</h2>
          <p>{product.content}</p>
        </div>
      </div>
      <div className="form-row">
        <label htmlFor="address">배송지 입력</label>
        <PaymentAddress
          register={register}
          setValue={setValue}
          watch={watch}
          errors={errors}
        />
      </div>
      <div>
        <label htmlFor='category_idx'>결제 방법</label>
        {/* <SelectBox id={"pay_method"} name={"pay_method"} category_idx={getCategoryIdx("payment")} handleChange={handleChange}/> */}
      </div>
      <div className='paybtn'>
        <Button 
          text={`${product.price}원 결제하기`}
          type='submit'
          onClick={handlePaymentClick}
        />
      </div>
    </div>
  );
};

export default PaymentPage;