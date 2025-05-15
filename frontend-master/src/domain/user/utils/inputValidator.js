import * as yup from "yup";

// 유효성 검사 스키마 정의
const SCHEMA = yup.object({
  id: yup
    .string()
    .required("아이디를 입력해 주세요.")
    .matches(
      /^[a-zA-Z0-9]{4,25}$/,
      "4~25자의 영문 대소문자와 숫자만 입력해 주세요."
    ),
  name: yup
    .string()
    .required("이름을 입력해 주세요.")
    .matches(/^[가-힣a-zA-Z]{2,6}$/, "이름은 한글 또는 영문만 입력해 주세요."),
  password: yup
    .string()
    .required("비밀번호를 입력해 주세요.")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&()\-_=+]).{8,16}$/,
      "8~16자, 영문, 숫자, 특수문자를 각각 하나 이상 포함해야 합니다."
    ),
  passwordCheck: yup
    .string()
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다."),
  nickName: yup
    .string()
    .required("닉네임을 입력해 주세요.")
    .max(10, "닉네임은 최대 10자까지 입력할 수 있습니다."),
  address: yup.string().required("주소 찾기 버튼을 눌러 주소를 입력해 주세요."),
  detailAddress: yup.string(),
  emailLocal: yup.string().required("이메일 아이디를 입력해 주세요."),
  emailDomain: yup.string().required("이메일 도메인을 입력해 주세요."),
});

export default SCHEMA;
