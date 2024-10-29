import React from 'react'
import { useNavigate } from 'react-router-dom'

const Blog = () => {
  const Navigation = useNavigate()
  return (
    <div>
      <h1>Blog Page</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi quis corporis iure doloremque, tempore numquam quod earum quia perferendis esse neque eum! Porro, provident laborum corporis voluptatem assumenda cum modi dignissimos mollitia aliquid, in totam facilis vero? Corporis aliquam harum ut qui beatae, asperiores ipsam est quas recusandae quod eos pariatur eius atque debitis minima, rem impedit consequatur praesentium quidem illum cumque commodi error! Id numquam nisi earum dolore porro dicta quod alias consequatur fugit? Minus voluptate quia excepturi! Vitae, voluptas in qui labore rem cupiditate amet veniam. Voluptas minima dolorem delectus voluptate aspernatur ratione rerum vero asperiores fugiat animi.</p>
      <button onClick={()=>{Navigation("/")}}>Back To Home Page</button>
    </div>
  )
}

export default Blog
