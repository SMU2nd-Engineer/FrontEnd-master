import axiosInstance from "@/lib/axiosInstance";
import { useNavigate } from "react-router-dom";

/**
 * idPasswordFindService
 * 아이디 비밀번호 찾기 API
 * @param {Object} : 전달 받은 id, name, email을 구조 분해 할당
 */

const idPasswordFindService = async ({ id, name, email }, navigate) => {
  if (id === "") {
    try {
      const res = await axiosInstance.post(
        "/idFind",
        { name, email },
        { withCredentials: true }
      );
      const findId = res.data;
      navigate("/showfindid", { state: { findId } });
    } catch (error) {}
  } else {
    try {
      const res = await axiosInstance.post(
        "/passwordFind",
        { name, email },
        { withCredentials: true }
      );
      navigate("/showfindid", { state: { findId } });
    } catch (error) {}
  }
};

export default idPasswordFindService;
