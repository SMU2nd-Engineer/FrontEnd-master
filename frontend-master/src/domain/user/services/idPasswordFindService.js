import axiosInstance from "@/lib/axiosInstance";

/**
 * idPasswordFindService
 * 아이디 비밀번호 찾기 API
 * @param {Object} : 전달 받은 id, name, email을 구조 분해 할당
 */

const idPasswordFindService = async ({ id, name, email }, navigate) => {
  if (id === "" || id === null || id === undefined) {
    const res = await axiosInstance.post(
      "/user/idFind",
      { name, email },
      { withCredentials: true }
    );
    const findId = res.data;
    if (res.status === 200 || res.status === 201) {
      navigate("/user/showfindid", { state: { findId } });
    }
  } else {
    const res = await axiosInstance.post(
      "/user/passwordFind",
      { id, name, email },
      { withCredentials: true }
    );
    if (res.status === 200 || res.status === 201) {
      // 정보가 일치하면 비밀번호 변경 페이지로 이동합니다.
      navigate("/user/changePassword", { state: { id: id } });
    }
  }
};

export default idPasswordFindService;
