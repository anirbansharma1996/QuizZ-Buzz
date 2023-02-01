import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Components/Home";
import { Quiz } from "./Components/Quiz";
import { Result } from "./Components/Result";
import { Signup } from "./Components/Signup";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/result" element={<Result />}></Route>
      </Routes>
    </>
  );
};
