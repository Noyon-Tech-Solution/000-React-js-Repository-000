// import React, { useEffect, useState } from "react";
// import { blogsData } from "./Data";

import React from "react";
import { useParams, useLocation } from "react-router-dom";

const Blog = () => {
  const { title } = useParams();
  const location = useLocation()


  // const [blogdata, setBlogData] = useState("")
  // useEffect(()=>{
  //   const blogData = blogsData.filter((data)=> data.title=title)
  //   setBlogData(blogData[0].desc)
  // }, [])

  
  return (
    <div>
      <h1>{title}</h1>
      <p>{location.state.desc.slice(0, 500)}</p>
      <p>{location.state.desc.slice(501, 5000)}</p>
    </div>
  );
};

export default Blog;
