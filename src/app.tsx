import React from "react";
import { Route, Routes } from "react-router-dom";
import Onboarding from "./components/Onboarding/Onboarding";

export const App = () => {
  return (
    <div className="App">
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Onboarding' element={<Onboarding />} />
        <Home /> */}
      <Onboarding />
      {/* </Routes> */}
    </div>
  );
};
