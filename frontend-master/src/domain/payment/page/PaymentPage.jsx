import React, { useState } from 'react';
import Address from '@/domain/user/components/RegistrationAddress';
import Button from '@/components/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SCHEMA } from '@/domain/user/utils/userFormValidator';
import { Input } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

const PaymentPage = () => {
  const YUPSCHEMA = SCHEMA;
  const location = useLocation();
  const product = location.state?.product;
  
  if (!product) {
    return <p>상품 정보가 없습니다. 다시 시도해주세요.</p>
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewProduct({
      [name]: value,
    });
  };

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

  return (
    <div>
      <p>결제 화면입니다.</p>
      <p>이미지</p>
      <p>상품 정보</p>
      <div className="form-row">
        <label htmlFor="address">배송지 입력</label>
        <Input
          type="text"
          id="address"
          name="address"
          // value={address}
          onChange={handleChange}
          placeholder="주소"
        />
      </div>
      <Address
        register={register}
        setValue={setValue}
        watch={watch}
        errors={errors}
      />
      <Button 
        text={`${product.price.toLocaleString()}원 결제하기`}
        type='submit'
      />
    </div>
  );
};

export default PaymentPage;