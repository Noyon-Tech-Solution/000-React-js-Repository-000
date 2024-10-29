import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Navber from "./Pages/Navber";

const React_Router = () => {
  return (
    <BrowserRouter>
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default React_Router;
