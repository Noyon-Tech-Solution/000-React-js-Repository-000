import React, { useState } from 'react'
import Comp2 from './Comp2'
import { userContex } from './useContext/UseContext'

const Comp1 = () => {
    const [user, setUser] = useState({id: 504, name: "Shahadat Hosen Noyon"})
    const [text, setText] = useState("Hello! My Name Is Noyon")
  return (
    <userContex.Provider value={{user, text}}>
      <Comp2 />
    </userContex.Provider>
  )
}

export default Comp1

// 14 Prop_Drilling use na kora ter poriborta useContext use korta hoba.
// 13 How to use Prop_Drilling in React Js.