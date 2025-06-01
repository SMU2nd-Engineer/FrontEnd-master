import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "@/utils/TokenManager";
import { logout } from "@/services/LogoutService";
import axios from "axios";
import { useAxiosAlertStore } from "@/store/useAxiosAlertStore";

// 요청 대기 큐 + 상태
let isRefreshing = false;
let requestQueue = [];

/**
 * axiosInstance
 * axios 사용할 때 헤더에 주소를 넣기 위해서 만듦, 쿠키가 전달되도록 기본 설정 세팅
 */
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACK_API_URL, // 환경 변수에 있는 backUrl
  withCredentials: true, // cors 정책으로 쿠키가 전달되도록 허용
});

/**
 * 인터셉터를 활용하여 요청할 때 마다 로컬에 저장된 토큰을 헤더에 추가
 */
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * 오류 반환에 따른 추가 로직을 위한 interceptor 처리
 * 401에러의 경우 refresh로 재발급 처리 진행 이외에는 로그 아웃 처리 및 로그인 페이지 이동
 */
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const alertState = useAxiosAlertStore.getState();
    // 에러가 발생했을 때 원본 요청 설정을 저장함.
    const originalRequest = error.config;
    // 에러 상태를 확인 후 에러에 따른 요청을 진행.
    if (
      error.response.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/refresh") // refresh 에 대해서는 재시도하지 않도록 수정함.
    ) {
      //._retry는 반복되는 요청을 진행하지 않도록 하기위해서 설정
      originalRequest._retry = true;

      // refresh 진행 중이면 요청 큐에 넣고 대기
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          requestQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return axiosInstance(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      // refresh 시작
      isRefreshing = true;

      // 새로운 accessToken 발급 요청
      try {
        const refreshRes = await axiosInstance.post(
          "/refresh",
          {}, // body에 넣을 내용이 없어서 빼기
          { withCredentials: true } // 쿠키 전송을 위해서 추가
        );
        const newToken = refreshRes.data.accessToken;
        if (newToken) {
          setAccessToken(newToken);
          // 대기 요청 재시도
          requestQueue.forEach(({ resolve }) => {
            resolve(newToken);
          });
          requestQueue = [];
          originalRequest.headers = {
            ...originalRequest.headers,
            Authorization: `Bearer ${newToken}`, // 확실히 헤더에 넣기 위해서 선택한 방법
          };
          return axiosInstance(originalRequest);
        }
      } catch (refreshError) {
        // 실패 시 큐 전체 reject
        requestQueue.forEach(({ reject }) => reject(refreshError));
        requestQueue = [];
        // refresh 토큰이 만료되거나 문제가 생겼을 때
        if (!alertState.hasShowAlert) {
          alert("로그인 세션이 만료되었습니다. 다시 로그인 해주세요.");
          alertState.setHasShowAlert(true);
          alertState.resetAlertFlag(); // 3초 후 초기화
        }
        removeAccessToken();
        try {
          // 로그 아웃을 위한 경로 지정
          await logout();
          window.location.href = "/user/login";
        } catch (error) {
          console.log("세션 만료에 따른 페이지 이동 중 오류 발생 : ", error);
          window.location.href = "/user/login";
        }
      }
      return Promise.reject(error);
    }
    if (error.response.status === 402) {
      const { socialId, provider } = error.response.data;
      sessionStorage.setItem("socialId", socialId);
      sessionStorage.setItem("provider", provider);
      confirm("가입된 정보가 없습니다. 회원 가입 페이지로 이동 하시겠습니까?")
        ? (window.location.href = "/user/registration")
        : (window.location.href = "/user/login");
    }
    if (error.response.status === 400) {
      alert("입력된 정보를 다시 확인해 주세요.");
    }
  }
);

export default axiosInstance;
