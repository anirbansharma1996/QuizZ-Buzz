import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Radio,
  Heading,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { QuizAction } from "../Redux/Quiz/quiz.action";
import { useNavigate } from "react-router-dom";
export const Quiz = () => {
  let data = JSON.parse(localStorage.getItem("mock15"));
  const [score, setScore] = useState(localStorage.getItem("score") || 0);
  const toast = useToast();
  const dispatch = useDispatch();
  const quiz = useSelector((state) => state.quiz);
  const [result, setResult] = useState(Array(+data.number).fill(0));
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(QuizAction());
  }, [count]);

  const handleClick = (e, id) => {
    quiz.quiz?.map((el) => {
      if (el.correct_answer == e) {
        toast({
          title: "Correct Answer",
          status: "success",
          duration: 1000,
          isClosable: true,
          position: "top",
        });
        setScore((prev) => +prev + 1);
        const updatedAnswers = [...result];
        updatedAnswers[id] = 1;
        setResult(updatedAnswers);
      } else {
        setScore((prev) => prev + 0);
      }
    });
    
  };

  let page = JSON.parse(localStorage.getItem("mock15"));
  const handleRes = () => {
    if (+page.number > count) {
      setCount((count) => count + 1);
    } else {
      localStorage.setItem("score", score);
       
        navigate("/result");
   
    }
  };

  return (
    <>
      <Heading color={"green.400"} mt={4} mb={1} textAlign={"center"}>
        QUIZ
      </Heading>
      <Text fontSize={"lg"} mt={2} textAlign={"center"}>
        Level : <b>{data.difficulty} </b> | Questions : <b>{data.number}</b>
        <br />
        Score : <b>{score}</b>
      </Text>
      {quiz.loading ? (
        <Box
          mt={"9rem"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          mb={6}
        >
          <Spinner mt={"-9rem"} />
        </Box>
      ) : (
        <Box w={["87%", "70%", "85%"]} m={"auto"} >
          {quiz.quiz?.map((el, i) => (
            <Box  key={i} p={6} m={2} borderRadius={"20px"} border={"2px solid white"} boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px">
              <ul>
                {count}.{" "}
                <Text as={"b"} color={"green.300"}>
                  {(el.question).split("&quot").join(" ").split("&#039").join(" ").split(";").join("'")}
                </Text>
                <br />
                <Box  key={i} onChange={() => handleClick(el.correct_answer, i)}>
                  <Radio colorScheme="green">{el.correct_answer}</Radio>
                </Box>
                <ol>
                  {" "}
                  <Radio
                    onChange={() => handleClick(el.incorrect_answers[0], i)}
                    colorScheme="red"
                  >
                    {el.incorrect_answers[0]}
                  </Radio>
                </ol>
                <ol>
                  {" "}
                  <Radio
                    onChange={() => handleClick(el.incorrect_answers[1], i)}
                    colorScheme="red"
                  >
                    {el.incorrect_answers[1]}
                  </Radio>
                </ol>
                <ol>
                  {" "}
                  <Radio
                    onChange={() => handleClick(el.incorrect_answers[2], i)}
                    colorScheme="red"
                  >
                    {el.incorrect_answers[2]}
                  </Radio>
                </ol>
              </ul>
            </Box>
          ))}
        </Box>
      )}

      <Button
        onClick={handleRes}
        color={"white"}
        bgColor={"green.400"}
        ml={["16rem", "22rem", "68rem"]}
        mb={10}
      >
        {+page.number > count ? "NEXT" : "RESULT"}
      </Button>
    </>
  );
};
