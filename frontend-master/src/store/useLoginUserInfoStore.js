import { create } from "zustand";

/**
 * 유저 정보를 저장할 전역 상태 관리
 */
const useLoginUserInfoStore = create((set) => ({
  // 기본 로그인 유저 정보 상태
  userInfo: {
    userIdx: 0,
    userName: "",
    userNickName: "",
    userId: "",
  },

  // 로그인 유저 정보를 상태에 저장하는 함수
  setLoginUserInfo: (newLoginUserInfo) =>
    set(() => ({ userInfo: newLoginUserInfo })),

  setDefaultUser: ()=> set(()=> ({
    userIdx: 0,
    userName: "",
    userNickName: "",
    userId: "",
  }))
}));

export default useLoginUserInfoStore;
