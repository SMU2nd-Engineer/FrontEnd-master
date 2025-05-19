export const userInfoSplit = (userInfo) => {
  // 괄호로 나눈다. ex: '도로명주소 (지번)' 나뉘고 나머지: 상세주소
  const fullAddress = userInfo.address ?? "";
  // 정규 표현식으로 나누기
  const addressMatch = fullAddress.match(/^(.*?)\)\s*(.*)$/);

  // 분리가 안되면 기존 주소를 사용하기 위하여 미리 선언
  let address = fullAddress;
  let detailAddress = "";

  if (addressMatch) {
    // Match의 경우 전체 값이 0 번에 위치하여 1번부터 사용
    address = addressMatch[1] + ")";
    detailAddress = addressMatch[2];
  }

  // 이메일 분리하기 - 배열 구조 분해 할당, 오류 방지 위하여 빈칸 넣기
  const [emailLocal = "", emailDomain = ""] = userInfo.split("@");

  const editUserInfo = {
    ...userInfo,
    address: address.trim(),
    detailAddress: detailAddress.trim(),
    emailLocal: emailLocal,
    emailDomain: emailDomain.trim(),
  };

  return editUserInfo;
};
