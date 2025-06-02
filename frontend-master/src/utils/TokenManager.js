/**
 *getAccessToken
 * localStorage에서 accessToken을 가져옴옴
 */
export const getAccessToken = () =>
  localStorage.getItem("accessToken") || sessionStorage.getItem("accessToken");

/**
 * setAccessToken
 * @param {String} token : access 토큰을 입력
 */
export const setAccessToken = (token) => {
  console.log("📦 accessToken 저장:", token);
  const autoLogin = sessionStorage.getItem("autoLogin") === "true";
  if (autoLogin) {
    localStorage.setItem("accessToken", token);
  } else {
    sessionStorage.setItem("accessToken", token);
  }
};
/**
 * removeAccessToken
 * localStorage 에서 accessToken 제거
 */
export const removeAccessToken = () => {
  localStorage.removeItem("accessToken");
  sessionStorage.removeItem("accessToken");
};
