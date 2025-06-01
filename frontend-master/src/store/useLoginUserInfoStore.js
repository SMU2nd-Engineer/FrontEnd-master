import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
 * 유저 정보를 저장할 전역 상태 관리
 */
const useLoginUserInfoStore = create(
  persist(
    (set) => ({
      userInfo: {
        userIdx: 0,
        userName: "",
        userNickName: "",
        userId: "",
      },

      setLoginUserInfo: (newLoginUserInfo) =>
        set(() => ({ userInfo: newLoginUserInfo })),
      // 유저 정보를 초기 상태로 되돌리는 함수
      setDefaultUser: () =>
        set(() => ({
          userInfo: {
            userIdx: 0,
            userName: "",
            userNickName: "",
            userId: "",
          },
        })),
    }),

    {
      name: "LoginUserInfo",
    }
  )
);

export default useLoginUserInfoStore;
