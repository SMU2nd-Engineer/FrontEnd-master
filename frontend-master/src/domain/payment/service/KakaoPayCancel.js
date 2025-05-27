import axiosInstance from '@/lib/axiosInstance';

const KakaoPayCancel = async ( {tid} ) => {

  try {
    const res = await axiosInstance.post("/payment/cancel", {
      tid
    })

    if (res?.data) {
      console.log("환불 성공 응답:", res.data);
      return res.data;
    } else {
      console.warn("응답 데이터가 없습니다:", res);
      return null;
    }
  
  } catch (error) {
    console.error("환불 에러: ", error)
    throw error;
  }
};

export default KakaoPayCancel;