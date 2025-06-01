import { useState, useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { getUserPeakInfo } from "@user/services/getUserPeakInfo";
import { updateUserPeak } from "@mypage/services/updateUserPeak";
import { insertUserPeak } from "@/domain/mypage/services/insertUserPeak";
import usePickStore from "@/domain/mypage/store/usePickStore";
import { useLocation } from "react-router-dom";

const PeakButton = ({ idx }) => {
  const { triggerRefresh } = usePickStore();
  const [isPeak, setIsPeak] = useState(false);

  // 찜목록 삭제 알람을 위한 경로확인
  const location = useLocation();
  const isPickPage = location.pathname.includes("/mypage/peakList");

  useEffect(() => {
    // 상품 정보와 내 정보를 이용해서 찜 상품인지 아닌지 확인을 위한 정보 호출
    const saveUserPeakInfo = async () => {
      try {
        const result = await getUserPeakInfo(idx);
        setIsPeak(!!result.isPick);
      } catch (error) {
        console.log(`내 찜 정보 불러오기 실패! ${error}`);
        throw error;
      }
    };
    saveUserPeakInfo();
  }, [idx]);

  const handleClick = async (e) => {
    e.stopPropagation();

    if (isPeak) {
      if (isPickPage) {
        const confirmed = confirm("찜 목록에서 삭제하시겠습니까?");
        if (confirmed) {
          await updateUserPeak(idx);
          alert("찜 목록에서 삭제되었습니다.");
          setIsPeak(false);
        }
      } else {
        await updateUserPeak(idx);
        setIsPeak(false);
      }
    } else {
      await insertUserPeak(idx);
      setIsPeak(true);
    }
    triggerRefresh();
  };

  return (
    <button onClick={handleClick}>
      {isPeak ? (
        <AiFillHeart size={24} color="red" />
      ) : (
        <AiOutlineHeart size={24} color="gray" />
      )}
    </button>
  );
};

export default PeakButton;
