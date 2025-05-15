import * as yup from "yup";

// 유효성 검사 스키마 정의
const SCHEMA = (isSocialLogin) =>
  yup.object({
    name: yup
      .string()
      .required("이름을 입력해 주세요.")
      .matches(
        /^[가-힣a-zA-Z]{2,6}$/,
        "이름은 한글 또는 영문만 빈칸 없이 입력해 주세요."
      ),
    password: yup
      .string()
      .transform((value) => (value === "" ? undefined : value)) // 값이 없으면 undefined로 넘기기
      .when([], {
        is: () => !isSocialLogin,
        then: (schema) =>
          schema
            .matches(
              /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&()\-_=+]).{8,16}$/,
              "빈칸 없이 8~16자, 영문, 숫자, 특수문자를 각각 하나 이상 포함해야 합니다."
            )
            .notRequired(), // 값이 있을 때 만 유효성 검사사
        otherwise: (schema) => schema.strip(), // password 넘기지 않음
      }),
    passwordCheck: yup
      .string()
      //value는 when("password")로 참조한 password 필드의 값
      .when("password", {
        is: (value) => !!value,
        then: (schema) =>
          schema
            .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다.")
            .required("값을 입력해 주세요."),
        otherwise: (schema) => schema.strip(), // 동일성 및 확장서을 생각하여 삭제 추가
      }),
    nickName: yup
      .string()
      .required("닉네임을 입력해 주세요.")
      .max(10, "닉네임은 최대 10자까지 입력할 수 있습니다."),
    address: yup
      .string()
      .required("주소 찾기 버튼을 눌러 주소를 입력해 주세요."),
    detailAddress: yup.string().required("상세 주소를 입력해 주세요."),
    emailLocal: yup.string().required("이메일 아이디를 입력해 주세요."),
    emailDomain: yup
      .string()
      .required("이메일 도메인을 입력해 주세요.")
      .matches(/^[\w.-]+\.\w+$/, "이메일을 확인해주세요."),
  });

export default SCHEMA;
