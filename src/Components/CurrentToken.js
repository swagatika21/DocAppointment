import React, { useContext } from "react";
import "./Styles/CurrentToken.css";
import Context from "../Context/Context";

function CurrentToken() {
  
 const get=useContext(Context);
  return (
      <div className="Current">
        <h3>Current Token</h3>
        <h1> {`T-${get.status + 100}`} </h1>
      </div>
    
  );
}

export default CurrentToken;


