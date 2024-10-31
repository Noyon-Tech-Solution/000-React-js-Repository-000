import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Pages/Style.css";

import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
// import Error from "./Pages/Error";
import Navber from "./Pages/Navber";
import User from "./Pages/User";

const React_Router = () => {
  return (
    <BrowserRouter>
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:title" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<Error />} /> */}
        <Route path="/user" element={<User />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default React_Router;
