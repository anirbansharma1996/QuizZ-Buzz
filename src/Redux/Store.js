import {
    legacy_createStore,
    combineReducers,
    applyMiddleware,
    compose,
  } from "redux";
  import thunk from "redux-thunk";
  import signupReducer from "./Signup/signup.reducer";
  import QuizReducer from "./Quiz/quiz.reducer";
  let rootReducer = combineReducers({
    signup: signupReducer,
    quiz: QuizReducer,
  });
  
  let createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  export const Store = legacy_createStore(
    rootReducer,
    createComposer(applyMiddleware(thunk))
  );
  