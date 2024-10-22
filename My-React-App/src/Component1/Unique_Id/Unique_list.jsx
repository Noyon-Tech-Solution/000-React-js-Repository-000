import React from "react";
import { v4 as uuidv4 } from 'uuid';

const todos = [
    {
        id : uuidv4(),
        title : "Todos One",
        desc  : "This is description One"
    },
    {
        id : uuidv4(),
        title : "Todos Two",
        desc  : "This is description Two"
    },
    {
        id : uuidv4(),
        title : "Todos Three",
        desc  : "This is description Three"
    },
    {
        id : uuidv4(),
        title : "Todos Four",
        desc  : "This is description Four"
    }
]

function UniqueId(){
    return(
        <div>
            {todos.map((todo)=>{
                const {id, title, desc} = todo;
                return(
                    <div key={id}>
                        <h2>{title}</h2>
                        <h3>{desc}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default UniqueId;

 {/* 05 How to Crete a unique Id For Data in React.Js  */}