import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Select,
  Spinner,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SignupAction } from "../Redux/Signup/signup.action";
export function Signup() {
  const [username, setUsername] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [number, setNumber] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signup = useSelector((state) => state.signup);
  let user = {
    username,
    category,
    difficulty,
    number,
  };

  const handleQuiz = () => {
    localStorage.setItem("mock15", JSON.stringify(user));
    dispatch(SignupAction(user));
    
    if (signup.user && !signup.loading) {
      setTimeout(() => {
        navigate("/quiz");
        window.location.reload()
      }, 2500);
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Set Up Your Quiz</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            enjoy all of our cool <Link color={"green.400"}>Questions</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          w={'110%'}
        >
          <Stack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>User Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter User Name"
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>
            <FormControl id="category" isRequired>
              <FormLabel>Category</FormLabel>
              <Select onChange={(e) => setCategory(e.target.value)}>
                <option value="">select category</option>
                <option value="20">Mythology</option>
                <option value="10">General Knowledge</option>
                <option value="23">History</option>
                <option value="22">Geography</option>
                <option value="21">Sports</option>
              </Select>
            </FormControl>
            <FormControl id="difficulty" isRequired>
              <FormLabel>Difficulty</FormLabel>
              <Select onChange={(e) => setDifficulty(e.target.value)}>
                <option value="">select difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </Select>
            </FormControl>
            <FormControl id="number" isRequired>
              <FormLabel>Number of Questions</FormLabel>
              <Input
                type="number"
                placeholder="XXX"
                onChange={(e) => setNumber(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={"green.400"}
                color={"white"}
                _hover={{
                  bg: "green.500",
                }}
                onClick={handleQuiz}
              >
                {signup.loading ? <Spinner /> : "Start Quiz"}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
