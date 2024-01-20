import React from "react";

function Button(props) {
  console.log(props);
  return (
    <button type="submit" onClick={(e) => props.onClick(e)}>
      SIGN UP
    </button>
  );
}

export default Button;
