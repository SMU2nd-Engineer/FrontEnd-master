import React, { useReducer } from "react";
// import Button from "@/components/Button";
import { useNavigate, useParams } from "react-router-dom";
import userReducer from "../utils/userReducer";
import idPasswordFindService from "../services/idPasswordFindService";
import "@user/style/IdPasswordFindPage.css";
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
          backgroundColor="#000000"
          color="#ffffff"
          _hover={{ backgroundColor: "#ffffff", color: "#000000" }}
          fontSize="0.875rem"
          fontWeight="500"
          padding="0.5rem 1.25rem"
          borderRadius="0.375rem"
          border="1px solid transparent"
          transition="all 0.2s ease-in-out"
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
          backgroundColor="#ff9a9a"
          color="#ffffff"
          _hover={{ backgroundColor: "#ffffff", color: "#ff9a9a" }}
          fontSize="0.875rem"
          fontWeight="500"
          padding="0.5rem 1.25rem"
          borderRadius="0.375rem"
          border="1px solid transparent"
          transition="all 0.2s ease-in-out"
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
