import { useState, useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { getUserPeakInfo } from "@user/services/getUserPeakInfo";
import { updateUserPeak } from "@mypage/services/updateUserPeak";
import { insertUserPeak } from "@/domain/mypage/services/insertUserPeak";
import usePickStore from "@/domain/mypage/store/usePickStore";

const PeakButton = ({ idx }) => {
  const { triggerRefresh } = usePickStore();
  const [isPeak, setIsPeak] = useState(false);

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
    e.stopPropagation(); // 찜만 클릭되도록 버블링 방지위해 추가됨
    if (isPeak) {
      // 찜 상태에서 누르면 찜 삭제 기능이 작동해야함.
      const confirmed = confirm("찜 목록에서 삭제하시겠습니까?");
      if (confirmed) {
        await updateUserPeak(idx);
        alert("찜 목록에서 삭제되었습니다.");
      }
      setIsPeak(false);
    } else {
      // 찜이 아닌 상태에서 누르면 찜 테이블에 값이 들어가야함.
      await insertUserPeak(idx);
      setIsPeak(true);
    }
    triggerRefresh();
  };

  return (
    <button onClick={handleClick}  >
      {isPeak ? (
        <AiFillHeart size={24} color="#f0b8b8 " />
      ) : (
        <AiOutlineHeart size={24} color="gray" />
      )}
    </button>
  );
};

export default PeakButton;
