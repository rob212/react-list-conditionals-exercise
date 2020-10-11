import React from "react";

import "./Validation.css";

const validation = (props) => {
  return (
    <div className="validation">
      <p>I am the Validation Component.</p>
      <p>
        The character has been passed to me as:
        {props.letterCount < 5 ? (
          <span className="warning text-too-short">Text too short</span>
        ) : (
          <span className="warning text-good"> Text long enough</span>
        )}
      </p>
    </div>
  );
};

export default validation;
