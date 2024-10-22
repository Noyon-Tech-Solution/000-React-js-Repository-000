import React from 'react'

export default function Event_Bubbling() {
    const parantEvent = (event) => {
        event.stopPropagation();
        console.log(event, "Parant_Event_Clicked")
    }
    const childEvent = (event) => {
        event.stopPropagation();
        console.log(event, "Child_Event_Clicked");
    }
  return (
    <div onClick={parantEvent} style={{backgroundColor : "red"}}>
      <button onClick={childEvent}>CLICK</button>
    </div>
  )
}

{/* 03 How to use Event Bubbling / Stop Propagation in React.Js */}