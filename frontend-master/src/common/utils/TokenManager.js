/**
 *getAccessToken
 * localStorage에서 accessToken을 가져옴옴
 */
export const getAccessToken = () => localStorage.getItem("accessToken");

/**
 * setAccessToken
 * @param {String} token : access 토큰을 입력
 */
export const setAccessToken = (token) =>
  localStorage.setItem("accessToken", token);

/**
 * removeAccessToken
 * localStorage 에서 accessToken 제거
 */
export const removeAccessToken = () => localStorage.removeItem("accessToken");
