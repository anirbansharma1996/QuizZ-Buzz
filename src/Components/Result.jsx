import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { QuizAction } from "../Redux/Quiz/quiz.action";

export const Result = () => {
  const [topic, setTopic] = useState("");
  let data = JSON.parse(localStorage.getItem("mock15"));
  let score = localStorage.getItem("score") || 0;

  const dispatch = useDispatch();
  const quiz = useSelector((state) => state.quiz);
  useEffect(() => {
    dispatch(QuizAction());
  }, []);

 
  

  return (
    <Box w={"100%"} m={"auto"} mb={6}>
      <Heading color={"green.400"} mt={4} mb={1} textAlign={"center"}>
        RESULT
      </Heading>

      {quiz.loading ? (
        <Box
          mt={"9rem"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Spinner mt={"-9rem"} />
        </Box>
      ) : (
        <Box w={"90%"} m={"auto"} display={"flex"}>
          <Box
            p={2}
            textAlign={"center"}
            h={["32vh", "55vh", "55vh"]}
            border={"1px solid"}
            w={["80%", "60%", "40%"]}
            m={"auto"}
            mt={6}
            borderRadius={"10px"}
          >
            <Text fontSize={"2xl"}>
              {" "}
              <b>{data.username}</b>{" "}
            </Text>
            <br />
            <hr />
            <br />
            <Text fontSize={"md"}>
              Difficulty Level : <b>{data.difficulty.toUpperCase()}</b>{" "}
            </Text>
            <Text fontSize={"md"}>
              {" "}
              Total Questions : <b>{data.number}</b>{" "}
            </Text>
            <Text fontSize={"md"}>
              Your Score : <b> {score}</b>
            </Text>
            <br />
           {data.number/2 <= score ?  <Text color={"green.400"} as={"b"}>
              Well Done !!!
            </Text>:  <Text color={"red.400"} as={"b"}>
              Try Again !!!
            </Text> }

           
          </Box>
        </Box>
      )}
    </Box>
  );
};
