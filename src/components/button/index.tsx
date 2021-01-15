import React, { ReactElement } from "react";

interface Props {
  children?: any;
  type?: "primary" | "secondary";
  onClick?: any;
}

function Button({ children, type, onClick }: Props): ReactElement {
  return (
    <button
      style={{
        backgroundColor: type === "primary" ? "#CCC" : "#000",
        color: type === "primary" ? "#000" : "#FFF",
        padding: "10px",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
