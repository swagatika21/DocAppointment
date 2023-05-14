import React, { useState } from "react";
import Context from "./Context";

function ContextHolder(props) {
  const [status, setStatus] = useState(2);
  return (
    <Context.Provider
      value={{ status, setStatus }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default ContextHolder;