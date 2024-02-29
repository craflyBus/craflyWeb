import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/home/index.js";
import Login from "../pages/login/index.js";

export const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
