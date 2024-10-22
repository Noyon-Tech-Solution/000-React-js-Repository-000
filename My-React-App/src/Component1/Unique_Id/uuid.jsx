import React from "react";
import { v4 as uuidv4 } from 'uuid';

const todos = [
    {
        id : uuidv4(),
        title : "todo 1",
        desc : "this is todo 1"
    },
    {
        id : uuidv4(),
        title : "todo 2",
        desc : "this is todo 2"
    },
    {
        id : uuidv4(),
        title : "todo 3",
        desc : "this is todo 3"
    },
];


function UniqueId (){
    return(
        <div>
            {todos.map((todo)=>{
                const {id, title, desc} = todo;
                return(
                    <div key={id}>
                        <h1>{title}</h1>
                        <h3>{desc}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default UniqueId;

 {/* 05 How to Crete a unique Id For Data in React.Js  */}