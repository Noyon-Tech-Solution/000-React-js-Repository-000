import React, { useState } from "react";

const Toggle = () => {
  const [Toggle, setToggle] = useState(true);
  return (
    <>
      <div
        style={{ backgroundColor: "red", color: "white", padding: "10px 20px" }}
      >
        {/* Toggle && ---> This is Shoet Carket Mathod ---> Sodo True hola Dakaba False hola kico dakaba na */}
        {Toggle && (
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
            ducimus neque tempora vel in. Nisi eum dolores officiis facere,
            officia a? Debitis at inventore quis consectetur laborum enim sit
            aperiam eos? Culpa earum architecto, in mollitia eos velit amet!
            Ipsam enim quibusdam cupiditate voluptate consequuntur rem
            repudiandae, deserunt labore impedit. Maxime quo beatae tenetur
            voluptates ipsum nulla, incidunt, quasi commodi nesciunt vel
            consequuntur perspiciatis molestiae dolor repellendus autem veniam
            recusandae vitae, ducimus nisi doloribus rem aperiam fugiat natus.
            Dolores, saepe. Mollitia doloremque provident sunt delectus et
            quidem maiores temporibus necessitatibus eos aliquid incidunt
            inventore error nemo, totam commodi eaque cum.
          </p>
        )}
      </div>
      <div style={{ textAlign: "center" }}>
        <button onClick={() => {setToggle(!Toggle)}}>{Toggle ? "Hide" : "Show"}</button>
      </div>
    </>
  );
};

export default Toggle;

{/* 07 How to use Toggle in React.Js */}