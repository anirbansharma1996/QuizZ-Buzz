import { QUIZ_REQUEST, QUIZ_SUCCESS, QUIZ_FAILURE } from "./quiz.type";

const initialState = {
  loading: false,
  quiz: [],
  error: null,
};

export default function QuizReducer(state = initialState, action) {
  switch (action.type) {
    case QUIZ_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case QUIZ_SUCCESS:
      return {
        ...state,
        loading: false,
        quiz: action.payload,
        error: null,
      };
    case QUIZ_FAILURE:
      return {
        ...state,
        loading: false,
        quiz: [],
        error: action.payload,
      };
    default:
      return state;
  }
}
