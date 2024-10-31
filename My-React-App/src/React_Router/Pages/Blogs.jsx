import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { blogsData } from "./Data";
import { Helmet } from "react-helmet";

//! Daynamic Routing using Parems Start !//

const Blogs = () => {
  const Navigation = useNavigate();
  const [blogs, setBlogs] = useState(blogsData);

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      str;
    }
  };

  return (
    <div className="blog_page">
      <Helmet>
        <title>Blogs Page</title>
      </Helmet>
      <h1>Blogs Page</h1>
      <section>
        {blogs.map((blogs) => {
          const { id, title, desc } = blogs;
          return (
            <article key={id}>
              <h1>{title}</h1>
              <p>{truncateString(desc, 250)}</p>
              <Link to={title} state={{id, title, desc}}>Learn More</Link>
            </article>
          );
        })}
      </section>
      <button
        onClick={() => {
          Navigation("/");
        }}
      >
        Back To Home Page
      </button>
    </div>
  );
};

export default Blogs;

//! Daynamic Routing using Parems End !//

// const Blogs = () => {
// const Navigation = useNavigate()
//   return (
//     <div>
//       <h1>Blog Page</h1>
//       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi quis corporis iure doloremque, tempore numquam quod earum quia perferendis esse neque eum! Porro, provident laborum corporis voluptatem assumenda cum modi dignissimos mollitia aliquid, in totam facilis vero? Corporis aliquam harum ut qui beatae, asperiores ipsam est quas recusandae quod eos pariatur eius atque debitis minima, rem impedit consequatur praesentium quidem illum cumque commodi error! Id numquam nisi earum dolore porro dicta quod alias consequatur fugit? Minus voluptate quia excepturi! Vitae, voluptas in qui labore rem cupiditate amet veniam. Voluptas minima dolorem delectus voluptate aspernatur ratione rerum vero asperiores fugiat animi.</p>
// <button onClick={()=>{Navigation("/")}}>Back To Home Page</button>
//     </div>
//   )
// }

// export default Blogs;
