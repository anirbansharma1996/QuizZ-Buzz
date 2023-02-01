import "./App.css";
import { AllRoutes } from "./AllRoutes";
import { Box, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import Theme from "./Components/Theme";
import {
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Footer from "./Components/Footer";

////////////////////////////////
function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const navigate = useNavigate();
  const handleReset = () => {
    localStorage.removeItem("mock15");
    localStorage.removeItem("answer");
    localStorage.removeItem("score");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  const handleHome = () => {
    navigate("/signup");
  };
  const handleQuiz = () => {
    if (localStorage.getItem("mock15")) {
      navigate("/quiz");
    } else {
      toast({
        title: "Setup First .",
        description: "In order to play the game you need to set up first.",
        status: "info",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
  };
  const handleHomenew = () => {
    navigate("/");
  };
  const handleResult = () => {
    if (localStorage.getItem("mock15")) {
      navigate("/result");
    } else {
      toast({
        title: "Setup First .",
        description: "In order to play the game you need to set up first.",
        status: "info",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
  };
  let username = JSON.parse(localStorage.getItem("mock15"));
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box display={["none", "none", "flex"]} mr={10}>
                <Text
                  ml={"3rem"}
                  cursor={"pointer"}
                  as={"b"}
                  onClick={handleHomenew}
                >
                  HOME
                </Text>
              </Box>
              {username ? (
                <Text color={"green.400"} fontSize={"xl"} as={"b"}>
                  {username.username}
                </Text>
              ) : (
                <Text cursor={"pointer"} onClick={handleHome} as={"b"}>
                  SET UP
                </Text>
              )}
              <Box display={["none", "none", "flex"]}>
                {/* <Text
                  ml={"3rem"}
                  cursor={"pointer"}
                  as={"b"}
                  onClick={handleHomenew}
                >
                  HOME
                </Text> */}
                <Text
                  ml={"3rem"}
                  cursor={"pointer"}
                  as={"b"}
                  onClick={handleQuiz}
                >
                  QUIZ
                </Text>
                <Text
                  ml={"3rem"}
                  cursor={"pointer"}
                  as={"b"}
                  onClick={handleResult}
                >
                  RESULT
                </Text>
              </Box>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            ></HStack>
          </HStack>
          <Flex alignItems={"center"}>
            {username ? (
              <Button mr={"1rem"} onClick={handleReset}>
                REST
              </Button>
            ) : null}
            <Theme />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Box mt={2} textAlign={"center"}>
                <Text
                  cursor={"pointer"}
                  p={2}
                  w={"90%"}
                  m={"auto"}
                  border={"1px solid"}
                  borderRadius={"15px"}
                  _hover={{
                    bg: "green.600",
                  }}
                  onClick={handleHomenew}
                >
                  HOME
                </Text>
                <Text
                  cursor={"pointer"}
                  p={2}
                  w={"90%"}
                  m={"auto"}
                  border={"1px solid"}
                  borderRadius={"15px"}
                  mt={3}
                  onClick={handleQuiz}
                  _hover={{
                    bg: "green.600",
                  }}
                >
                  QUIZ
                </Text>
                <Text
                  cursor={"pointer"}
                  p={2}
                  w={"90%"}
                  m={"auto"}
                  mt={3}
                  border={"1px solid"}
                  borderRadius={"15px"}
                  onClick={handleResult}
                  _hover={{
                    bg: "green.600",
                  }}
                >
                  RESULT
                </Text>
              </Box>
            </Stack>
          </Box>
        ) : null}
      </Box>
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
