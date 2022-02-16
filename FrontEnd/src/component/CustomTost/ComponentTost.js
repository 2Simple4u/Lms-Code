import React from "react";
import "./Componentcss.css";

function Component_Tost(props) {
  return (    
    <div className="Compenent-Tost">
        <h2 className="Text-Tost">{props.tostTitle}</h2>
    </div>
  );
}

export default Component_Tost;
