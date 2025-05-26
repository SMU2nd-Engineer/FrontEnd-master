import axiosInstance from '@/lib/axiosInstance';
import React from 'react';

const KakaoPayCancel = async ( tid ) => {

  try {
    const res = await axiosInstance.post("/payment/cancel?payMethod=6001", {
      tid
    })

    console.log(res.data);
    return res.data;
  
  } catch (error) {
    console.error("환불 에러: ", error)
    kakaoPayFail({tid, error});
  }
};

export default KakaoPayCancel;