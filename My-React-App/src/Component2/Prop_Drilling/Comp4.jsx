import React, { useContext } from 'react'
import { userContex } from './useContext/UseContext'

const Comp4 = () => {
    const {user, text} = useContext(userContex)
  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.id}</h2>
      <h2>{text}</h2>
    </div>
  )
}

export default Comp4

// 07 Prop_Drilling use na kora ter poriborta useContext use korta hoba.
// 07 How to use Prop_Drilling in React Js