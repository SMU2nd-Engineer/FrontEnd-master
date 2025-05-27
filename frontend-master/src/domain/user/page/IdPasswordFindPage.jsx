import React, { useReducer } from "react";
// import Button from "@/components/Button";
import { useNavigate, useParams } from "react-router-dom";
import userReducer from "../utils/userReducer";
import idPasswordFindService from "../services/idPasswordFindService";
import {
  Box,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Button,
} from "@chakra-ui/react";

/**
 * get 방식으로 전달 받은 파라미터의 값에 따라서 아이디 비밀번호 찾기 페이지 표시
 * @returns 아이디 또는 비밀번호 페이지
 */
export default function IdPasswordFindPage() {
  const initialState = {
    id: "",
    name: "",
    email: "",
  };

  const navigate = useNavigate();
  const { type } = useParams();
  const [state, dispatch] = useReducer(userReducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_FIELD",
      payload: { [e.target.name]: e.target.value },
    });
  };

  return (
    // <div className="find-container">
    //   {type === "id" ? (
    //     <>
    //       <h2>아이디 찾기</h2>
    //       <form onSubmit={(e) => e.preventDefault()}>
    //         <label htmlFor="name">
    //           이름 :
    //           <input
    //             type="text"
    //             name="name"
    //             value={state.name}
    //             onChange={handleChange}
    //           />
    //         </label>
    //         이메일 :
    //         <label htmlFor="email">
    //           <input
    //             type="text"
    //             name="email"
    //             value={state.email}
    //             onChange={handleChange}
    //           />
    //         </label>
    //         <Button
    //           text={"아이디 찾기"}
    //           onClick={() => {
    //             idPasswordFindService(
    //               { name: state.name, email: state.email },
    //               navigate
    //             );
    //           }}
    //           type={"submit"}
    //         />
    //       </form>
    //     </>
    //   ) : (
    //     <>
    //       <h2>비밀번호 찾기</h2>
    //       <form onSubmit={(e) => e.preventDefault()}>
    //         <label htmlFor="id">
    //           아이디 :
    //           <input
    //             type="text"
    //             name="id"
    //             onChange={handleChange}
    //             value={state.id}
    //           />
    //         </label>
    //         이름 :
    //         <label htmlFor="name">
    //           <input
    //             type="text"
    //             name="name"
    //             onChange={handleChange}
    //             value={state.name}
    //           />
    //         </label>
    //         이메일 :
    //         <label htmlFor="email">
    //           <input
    //             type="text"
    //             name="email"
    //             onChange={handleChange}
    //             value={state.email}
    //           />
    //         </label>
    //         <Button
    //           text={"비밀번호 찾기"}
    //           onClick={() => {
    //             idPasswordFindService(
    //               {
    //                 id: state.id,
    //                 name: state.name,
    //                 email: state.email,
    //               },
    //               navigate
    //             );
    //           }}
    //           type={"submit"}
    //         />
    //       </form>
    //     </>
    //   )}
    //   <Button
    //     text={"로그인 화면으로 돌아가기"}
    //     onClick={() => {
    //       window.location.href = "/user/login";
    //     }}
    //   />
    // </div>

    <Box
      maxW="lg"
      mx="auto"
      mt={10}
      p={6}
      borderRadius="lg"
      boxShadow="md"
      bg="white"
    >
      <Heading size="md" mb={6} textAlign="center">
        {type === "id" ? "아이디 찾기" : "비밀번호 찾기"}
      </Heading>
      <VStack
        as="form"
        spacing={4}
        onSubmit={(e) => e.preventDefault()}
        ml="10px"
        lineHeight="3rem"
      >
        {type === "password" && (
          <FormControl isRequired>
            <FormLabel>아이디</FormLabel>
            <Input name="id" value={state.id} onChange={handleChange} />
          </FormControl>
        )}

        <FormControl isRequired>
          <FormLabel>이름</FormLabel>
          <Input name="name" value={state.name} onChange={handleChange} />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>이메일</FormLabel>
          <Input name="email" value={state.email} onChange={handleChange} />
        </FormControl>

        <Button
          mt="2rem"
          colorScheme="teal"
          width="100%"
          onClick={() => {
            if (type === "id") {
              idPasswordFindService(
                { name: state.name, email: state.email },
                navigate
              );
            } else {
              idPasswordFindService(
                { id: state.id, name: state.name, email: state.email },
                navigate
              );
            }
          }}
        >
          {type === "id" ? "아이디 찾기" : "비밀번호 찾기"}
        </Button>

        <Button
          variant="outline"
          width="100%"
          onClick={() => navigate("/user/login")}
        >
          로그인 화면으로 돌아가기
        </Button>
      </VStack>
    </Box>
  );
}
