import React from "react";

import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Box} from "./components/views/box";
import { Secondview } from "./components/views/secondview";
import { Signin } from "./components/views/signin";

export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Box/>}/>
      <Route path="/secondview" element={<Secondview/>}/>
      <Route path="/signin" element={<Signin/>}/>
    </Routes>
  );
}
