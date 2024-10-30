import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const Navigation = useNavigate()
  return (
    <div className='from_div'>
      <h1>Contact Page</h1>
      <form action="#">
        <label htmlFor="name"><p>Name</p></label><br />
        <input type="text" name="name" id="name" placeholder='Enter Your Name' required/><br />
        <label htmlFor="email"><p>Email</p></label><br />
        <input type="text" name="email" id="email" placeholder='Enter Your Email' required/><br />
        <label htmlFor="password"><p>Password</p></label><br />
        <input type="text" name="password" id="password" placeholder='Enter Your Password' required /><br />
        <button type='submit'>Sign Up</button>
      </form>
      <button onClick={()=>{Navigation("/")}}>Back To Home Page</button>
    </div>
  )
}

export default Contact
