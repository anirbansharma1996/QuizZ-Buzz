import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "./signup.type";
import axios from "axios";

export const SignupAction = (user) => {
  return (dispatch) => {
    dispatch({ type: SIGNUP_REQUEST });
    axios
      .post("https://mock-car-api.onrender.com/user", user)
      .then((response) => {
        console.log(response.data)
        dispatch({ type: SIGNUP_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: SIGNUP_FAILURE, payload: error });
      });
  };
};
