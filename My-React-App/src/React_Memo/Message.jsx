import React, { memo, useMemo } from "react";

const Message = ({ numberOfMessage, onHandleMessage }) => {
  console.log("message is rendering");

  let memoNumber = useMemo(() => {
    let number = 0;
    for (let index = 0; index < 500000; index++) {
      number++;
    }
  }, []);

  return (
    <div>
      <p>Send {numberOfMessage} Message</p>
      <button onClick={onHandleMessage}>Handle Increment Message</button>
      <p>Number : {memoNumber} </p>
    </div>
  );
};

export default memo(Message);
