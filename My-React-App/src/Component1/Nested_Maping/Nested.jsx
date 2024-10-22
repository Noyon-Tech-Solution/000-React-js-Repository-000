import React from "react";

const users = [
    {
        Name: "Shahadat Hosen Noyon",
        Age: 22,
        phones: [{ Home: "Home : 0134458574" }, { Office: "Office : 0175873637" }]
    },
    {
        Name: "Jishanor Rohoman",
        Age: 19,
        phones: [{ Home: "Home : 0134458574" }, { Office: "Office : 0175873637" }]
    },
    {
        Name: "Abdulla Bin Nihal",
        Age: 11,
        phones: [{ Home: "Home : 0134458574" }, { Office: "Office : 0175873637" }]
    }
]

function Nested() {
    return (
        <div>
            {users.map((user, index) => {
                return (
                    <article key={index}>
                        <h1>Name: {user.Name}</h1>
                        <h3>Age: {user.Age}</h3>
                        {user.phones.map((phone, index) => {
                            return (
                                <div key={index}>
                                    <h4>{phone.Home}</h4>
                                    <h4>{phone.Office}</h4>
                                </div>
                            )
                        })}
                    </article>
                )
            })}
        </div>
    )
}

export default Nested;

{/* 06 How to Maping Nested Data in React.Js */}