import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {Home} from "./components/Home";
import Advanced_python from "./components/Advanced_python";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course/:name" element={<Advanced_python />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
