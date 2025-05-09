import axiosInstance from "@/lib/axiosInstance";

/**
 * duplicateCheckService
 * 중복 체크를 위한 서비스
 * @param {String} name : 검색할 이름
 * @param {Method} dispatch : 디스패치 매서드
 * @param {String} category : 검색할 범위
 */
export const duplicateCheckService = async (name, dispatch, category) => {
  try {
    const res = await axiosInstance.get(
      "/duplicatecheck",
      { params: { checklist: name, category: category } }, // chekcklist 를 불러옴
      { withCredentials: true }
    );
    console.log(res.data);
    if (res.data === true) {
      let payload = {};
      if (category === "id") {
        payload.isIdCheck = true;
      }
      if (category === "nickName") {
        payload.isNickNameCheck = true;
      }
      dispatch({
        type: "CHANGE_FIELD",
        payload: payload,
      });
    } else {
      console.log(`${name} : 중복입니다.`);
      alert(
        `입력하신 ${name} 중복입니다. 다른 ${
          category === "id" ? "아이디" : "닉네임"
        }을(를) 사용해 주세요.`
      );
    }
  } catch (error) {
    console.log("중복 체크 과정에서 문제가 생겼습니다. 내용 : " + error);
  }
};
