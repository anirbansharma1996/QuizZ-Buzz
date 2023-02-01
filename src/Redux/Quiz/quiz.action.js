import { QUIZ_REQUEST, QUIZ_SUCCESS, QUIZ_FAILURE } from "./quiz.type";
import axios from "axios";
const m = JSON.parse(localStorage.getItem("mock15"));
export const QuizAction = () => {
  return (dispatch) => {
    dispatch({ type: QUIZ_REQUEST });
    axios
      .get(
        `https://opentdb.com/api.php?amount=${1}&category=${
          m.category
        }&difficulty=${m.difficulty}&type=multiple&_limit=1`
      )
      .then((response) => {
        dispatch({ type: QUIZ_SUCCESS, payload: response.data.results });
      })
      .catch((error) => {
        dispatch({ type: QUIZ_FAILURE, payload: error });
      });
  };
};
