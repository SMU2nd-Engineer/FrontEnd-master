import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { updateUserPeak } from "@mypage/services/updateUserPeak";
import { insertUserPeak } from "@/domain/mypage/services/insertUserPeak";
import usePickStore from "@/domain/mypage/store/usePickStore";
import { useLocation } from "react-router-dom";
import { useModalStore } from "@/store/useModalStore";

const PeakButton = ({ idx, pick }) => {
  const { triggerRefresh } = usePickStore();
  const [isPeak, setIsPeak] = useState(pick);
  const openModal = useModalStore((state) => state.open);
  // 찜목록 삭제 알람을 위한 경로확인
  const location = useLocation();
  const isPickPage = location.pathname.includes("/mypage/peakList");

  const handleClick = async (e) => {
    e.stopPropagation();

    if (isPeak) {
      if (isPickPage) {
        const confirmed = await openModal("confirm", {
          title: "찜 삭제 확인",
          message: "찜 목록에서 삭제하시겠습니까?",
        });
        if (confirmed) {
          await updateUserPeak(idx);
          await openModal("alert", {
            title: "찜 삭제",
            message: "찜 목록에서 삭제되었습니다.",
          });
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
        <AiFillHeart size={24} color="#f0b8b8 " />
      ) : (
        <AiOutlineHeart size={24} color="gray" />
      )}
    </button>
  );
};

export default React.memo(PeakButton);
