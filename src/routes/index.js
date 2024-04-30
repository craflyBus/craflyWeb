import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "../pages/home/index.js";
import RequestDronePage from "../pages/request/drone/index.js";

export const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/request/drone" element={<RequestDronePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
